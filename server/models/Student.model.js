const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({

   name: {
    type: String,
    required: [true, "please enter student name"]
   },

   email:{
    type: String,
    required: [true, "please enter student email"]
   },
   coures:{
    type: String,
    required: true,
    default: 1
   }
},
   {
    timestamps: true,
   }
)

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;