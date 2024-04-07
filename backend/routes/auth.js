import express from 'express';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import User from '../modules/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchuser from '../middleware/fetchuser.js';
const JWT_SECRET = "HelloKamal@#$";

const router = express.Router();
router.use(bodyParser.json());

// Create User
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword
        });
        
        const data = {
            user: {
                id: user.id
            }
        };

        const jwtData = jwt.sign(data, JWT_SECRET);
        console.log(jwtData)

        // Return newly created user
        res.json({ user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// User Login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        let user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct Credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
  
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct Credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        };
        
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// //Route 3:get Loffged IN user Details using:POst "/api/auth/getuser"
// router.post('/getuser',fetchuser,async(req,res)=>{
//     try {
//         userId = "req.user.id";
//         const user = await User.findById(userId).select("-password");
//         res.send(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
    // Route to get Logged In user Details using: POST "/api/auth/getuser"
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user });
    } catch (error) {
        console.error("Error in fetching user details:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})


export default router;
