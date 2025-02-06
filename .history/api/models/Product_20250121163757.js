const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(

{
    id: { type: Number, required:true}
},
{
    title: { type: String, required:true}
},
{
    price: { type: Number, required:true}
},
{
    category: { type: Number, required:true}
},
{
    timestamps: true
},

);

const Product = mongoose.model("categories", ProductSchema);
module.exports = Product;