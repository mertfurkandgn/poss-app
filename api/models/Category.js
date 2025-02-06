const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(

{
    id: { type: Number, required:true},
    title: { type: String, required:true}

},
{
    timestamps: true
},

);

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;