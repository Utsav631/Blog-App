import { User } from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';


const signup = async (req, res, next) => {
    // Your signup logic here
    // console.log(req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') 
    {
        
        next(errorHandler(400, "All fields must be filled !!"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists" 
            });
        }
    
        const newUser = new User({ username, email, password:hashedPassword });
        await newUser.save();
    
        res.status(201).json({
            success: true,
            message: "Signup successful"
        });
    } catch (error) {
        next(error);
    }
    
};

export default signup;