const { Product } = require("../models/product.model")

const addProduct =async ( item_id, item_name, item_description, item_price) => {
    let product = new Product({ item_id, item_name, item_description, item_price });
    await product.save();
    return product;
}
const getAllProduct=async()=>{
return await Product.find();
} 
const getProductById=async(id) =>{
   product= await Product.findById(id);
    return product;
}
const deleteProduct=async(id) =>{
   product= await Product.findById(id);
  await  Product.remove(product);
 }
