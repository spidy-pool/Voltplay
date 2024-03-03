import  express  from "express";
import { userSignup , userLogin } from "../controller/usercontroller.js";
import { getProduct,getProductById } from "../controller/productcontroller.js";
import { addPaymentGateway,paymentResponse } from "../controller/Payment-conroller.js";


const  router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/product',getProduct);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback',paymentResponse)

export default router;
