const express = require("express");
const router = express.Router();
const {
  processPayment,
  sendStripeApi,
} = require("../controllers/paymentController");

const {requireSignin}=require('../controllers/authController')

router.post("/payment/process", requireSignin, processPayment);
router.get("/stripeapi", sendStripeApi);

module.exports = router;
