const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(

{
    id: { type: Int, require:true}
},
{
    title: { type: String, require:true}
},
{
    timestamp: true
},

)