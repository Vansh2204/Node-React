const express = require('express');
const users = require('./jobapplications.json')
const mongoose = require('mongoose')
const Employee = require('./models/employeeModel')
const cors = require('cors')
const app = express();
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/employees', async (req, res) => {
    // try {
        const employees = await Employee.find({});
        res.json(employees)

    // } catch (error) {
    //     res.json({ message: error.message })

    // }
})

app.get('/employees/:id', async (req, res) => {
    // try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.json(employee)

    // } catch (error) {
    //     res.json({ message: error.message })

    // }
})

//CREATE USER------------

app.post('/employees', async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.json(employee)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })

    }
})

//UPDATE USER------------

app.put('/employees/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const employee = await Employee.updateOne({ _id: id }, req.body);
        if(!employee){
            return res.status(404).json({message: `cannot find employee with ${id}`})
        }
        const updatedEmployee = await Employee.findById(id)
        res.json(employee);

    }catch (error){
        res.status(500).json({ message: error.message })
    }
})

//DELETE USER------------

app.delete('/employees/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const employee = await Employee.findByIdAndDelete(id);
        if(!employee){
            return res.status(404).json({message:  `connot find employee with ${id}`})
        }
        res.status(200).json(employee);

    }catch (error){
        res.status(500).json({message:error.message})
    }
})

//CONNECTION WITH THE DATABASE (MongoDB Atlas)------------

mongoose.connect('mongodb+srv://vanshhathi2204:rFsoeS254vO4LkXl@vanshapi.7mrdl9s.mongodb.net/Node-API?retryWrites=true&w=majority&appName=VanshAPI')
    .then(() => {
        console.log('Connected to Database')
        app.listen(5000, () => {
            console.log('NODE API running on PORT 5000 !!!')
        })
    }).catch((error) => {
        console.log(error)
    })
