import Product from '../module/productshcema.js';



export const getProduct = async (req, res) => {
    try {
     const product = await   Product.find({});
     res.status(200).json(product);
    } catch (error) {
 res.status(500).json({message:error.message});
    }

}


export const getProductById= async (req,res)=>{
    try{
const id= req.params.id;
const product = await Product.findOne({'id':id})

res.status(200).json(product);
    }catch(error){
res.status(500).json({meassge:error.message})
    }
}