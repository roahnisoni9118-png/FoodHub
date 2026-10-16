require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const userRoutes=require('./routes/userRoutes')
const restaurantRoutes=require('./routes/restaurantRoutes')


const User = require('./models/User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const authMiddleware=require('./middleware/authMiddleware')
const roleMiddleware=require('./middleware/roleMiddleware')

const app = express()

// Middleware
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/restaurants', restaurantRoutes)

// User Register
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body

  console.log(name, email, password)
  const existingUser=await User.findOne({email})
  if(existingUser){
    return res.status(400).json({
      message:'User already exists'
    })
  }
  const user=new User({
    name,
    email,
    password
  })
  await user.save()
  res.status(201).json({
    message:'User registered successfully'
  })
})

//User Login Route

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body

  console.log(email, password)

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid email or password'
    })
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password)

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: 'Invalid email or password'
    })
  }

  const token=jwt.sign(
    {userId:user._id,role:user.role},
    process.env.JWT_SECRET,
    {expiresIn:'7d'}
  )

  res.status(200).json({
    message:'Login Successful',
    token:token,
    user:{
      id:user._id,
      name:user.name,
      email:user.email,
      role:user.role
    }
  })
})

//middleware

app.get('/api/auth/profile',authMiddleware,async(req,res)=>{
  const user=await User.findById(req.user.userId).select('-password')
  
  if(!user){
    return res.status(401).json({
      message:'user not found'
    })
  }
  res.status(200).json({
    message:'Profile accessed successfully'
  })
})
//admin testing
app.get('/api/admin/test',
  authMiddleware,
  roleMiddleware('admin'),
  (req, res) => {

    res.status(200).json({
      message: 'Admin access granted'
    })

  }
)
//restaurant-owner testing
app.get('/api/restaurant/test',
  authMiddleware,
  roleMiddleware('restaurant'),
  (req,res)=>{
    return res.status(200).json({
      messgae:'Restaurant Access Granted'
    })
  })

connectDB()
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

