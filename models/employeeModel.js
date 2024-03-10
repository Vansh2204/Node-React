const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        ApplicationName:{
            type: String,
            required:[true,"Please enter this feild"]
        },
        PositionAppliedFor:{
            type :String,
            required:true,

        },
        ApplicationDate:{
            type:Date,
            required:true
        },
        Status:{
            type:String,
            required:true
        }
        
    },
    {
        timestamps:true
    }
)

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee;

