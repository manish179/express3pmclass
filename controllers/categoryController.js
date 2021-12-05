const Category=require('../model/categoryModel')


exports.HelloFunction=(req,res)=>{
    res.send("Hello from the controller function")
}

//function to insert data in category Model

exports.postCategory=async(req,res)=>{
    let category=new Category(req.body)
    Category.findOne({category_name:category.category_name},async(error,date)=>{
        if(data==null){
            category= await category.save()
            if(!category){
                return res.status(400).json({error:'something went wrong'})
            }
            res.json({category})

        }
        else {
            return res.status(400).json({error:'Category must be unique'})
        }
    })
   
    
}
 //to post catageory in database
exports.categoryList=async(req,res)=>{
    const category=await Category.find()

    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.json({category})
}

//to show all category
exports.showCategoryList=async(req,res)=>{
    const category=await Category.find()
    if(!category){
        return res.status(400).json({error:'something went wrong'})

    }
    res.send(category)
}

//to show category details
exports.categoryDetails=async(req,res)=>{
    const category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}

//to Update category
exports.updateCategory=async(req,res)=>{
    const category= await Category.findByIdAndUpdate(
        req.params.id,{
            category_name:req.body.category_name
        },
        {new:true}
    )
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}

//to delete catagery
exports.deleteCategory=(req,res)=>{
    Category.findByIdAndRemove(req.params.id).then(category=>{
        if(!category){
            return res.status(403).json({error:"category not Found"})
        }
        else{
            return res.status(200).json({message:"category deleted"})
        }

    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })

}