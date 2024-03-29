import { User } from '../models/userModel.js';
import bcryptjs from 'bcryptjs';


const signup = async (req, res) => {
    // Your signup logic here
    // console.log(req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists" 
            });
        }

        const newUser = new User({ username, email, password:hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: "Signup successful"
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export default signup;