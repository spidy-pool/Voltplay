import { product } from "./constants/data.js"
import Product from "./module/productshcema.js";




const Defaultdata = async() => {
    try {
       await Product.insertMany(product);
        console.log('Error nhi aya dataupload m ');

    }
    catch (error) {
        console.log('Error agya h dataupload m', error.message)
    }
}


export default Defaultdata;