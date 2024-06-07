// call the express router
const express = require('express');
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

// import the functions from the controller
const {
    createWorkout,
    getAllWorkouts,
    getAWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// we use the middleware first before any req API can be done
router.use(requireAuth)

// put the router API for get('/api/workouts/') all
router.get('/',getAllWorkouts)

// put the router API for get('/api/workouts/:id') single
router.get('/:id',getAWorkout)

// put the router API for post('/api/workouts/')
router.post('/', createWorkout)

// put the router API for delete('/api/workouts/')
router.delete('/:id', deleteWorkout)

// put the router API for patch('/api/workouts/')
router.patch('/:id', updateWorkout)

// export the router to be used inside index.js
module.exports = router