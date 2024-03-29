const { Router } = require('express');
const router = Router(); 
const UserRoutes = require('../model/UserRoutes') 


// Create a new userRoutes
router.post('/', async(req, res) => {
    try {
        let userRoutes = new UserRoutes({
            key:value
        })
        userRoutes = await userRoutes.save()
        res.send(userRoutes)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router