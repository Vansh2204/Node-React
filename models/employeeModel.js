const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        ApplicationName:{
            type: String,
            required:[true,"Please enter this field"]
        },
        PositionAppliedFor:{
            type :String,
            required:false,

        },
        ApplicationDate:{
            type:Date,
            required:false
        },
        Status:{
            type:String,
            required:false
        }
        
    },
    {
        timestamps:true
    }
)

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee;

//required false , would let the feilds go empty while adding a user while name is true it should be entered
