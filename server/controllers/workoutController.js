// call the workouts collection
const workoutdb = require('../models/workoutModel')
// to handle _id format (if u use it), need to import back mongoose
const mongoose = require('mongoose')

// get all workouts
const getAllWorkouts = async (req,res)=>{
    try{
        // grab the req.user from the middleware 'requireAuth.js' before we pass it into find argument
        const user = req.user

        // use .find({}) empty parantheses to find all the data
        // then .sort({createdAt: -1}) by descending order means from newest to oldest
        if(user.role === "admin"){
            const workouts = await workoutdb.find({}).sort({createdAt: -1})
            res.status(200).json(workouts)
        }else if( user.role === "user"){
            const workouts = await workoutdb.find({ user_id : user._id }).sort({createdAt: -1})
            res.status(200).json(workouts)
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// get a workout
const getAWorkout = async (req,res)=>{
    // there is a params value which is id
    const {id} = req.params

    // check if the id inserted inside params are actually followed the _id format, return if it is invalid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in database"})
    }

    const workout = await workoutdb.findById(id)

    // if no workout found by that id, we need to return the function so that it will not proceed
    if(!workout){
        return res.status(404).json({error: "No such workout in database"})
    }

    res.status(200).json(workout)
}


// post new workout
const createWorkout = async (req,res)=>{
    const {title, reps, load} = req.body;

    // check the field that is empty
    let emptyFields = []

    // so for each field that empty, push the field properties to the array
    if(!title){
        emptyFields.push('title')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(emptyFields.length > 0){
        // if the emptyFields have value, we return universal error message means we avoid the system from continuing/proceeding
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    try{
        // grab the req.user from the middleware 'requireAuth.js'
        const user_id = req.user._id

        // use .create() to generate and save the data
        // include user_id into the creation of data so we know the OWNER of that data
        const workout = await workoutdb.create({title, reps, load, user_id})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// delete a workout
const deleteWorkout = async (req,res)=>{
    // there is a params value which is id
    const {id} = req.params

    // check if the id inserted inside params are actually followed the _id format, return if it is invalid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in database"})
    }

    // use .findOneAndDelete and put the parameter as _id that equal to id
    const workout = await workoutdb.findOneAndDelete({_id: id})

    // if no workout found by that id, we need to return the function so that it will not proceed
    if(!workout){
        return res.status(404).json({error: "No such workout in database"})
    }

    res.status(200).json(workout)
}

// patch a workout
const updateWorkout = async (req,res)=>{
    // there is a params value which is id
    const {id} = req.params
    // get the json body to update as well

    // check if the id inserted inside params are actually followed the _id format, return if it is invalid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in database"})
    }

    // use .findOneAndDelete and put the parameter as _id that equal to id
    // second argument is the value/body that you want to pass and update
    const workout = await workoutdb.findOneAndUpdate({_id: id},{
        /*
        req.body typically refers to the body of a request in an Express.js application. 
        When you use req.body, you're accessing the body of the HTTP request that the client sends to your server.

        On the other hand, ...req.body is a JavaScript syntax for object spreading. It spreads the properties of req.body into a new object. 
        This can be useful if you want to clone or merge the properties of req.body into another object. It will not affect the original req.body
        */
        ...req.body
    })

    // if no workout found by that id, we need to return the function so that it will not proceed
    if(!workout){
        return res.status(404).json({error: "No such workout in database"})
    }

    res.status(200).json(workout)
}

// export the functions 
module.exports = {
    createWorkout,
    getAllWorkouts,
    getAWorkout,
    deleteWorkout,
    updateWorkout
}