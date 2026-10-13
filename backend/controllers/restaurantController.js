const Restaurant = require('../models/Restaurant')
const restaurant=require('../models/Restaurant')

const createRestaurant=async(req,res)=>{
    try{
      const{name,description,address,cuisine,image}=req.body
      const restaurant=new Restaurant({
        name,
        description,
        address,
        cuisine,
        image,
        owner:req.user.userId
      })
      await restaurant.save()
      res.status(201).json({
        message:'Restaurant Created Successfully',restaurant
      })
    }catch(error){
      res.status(500).json({
        message:'Server error while creating restaurant'
      })
    }
}

module.exports ={createRestaurant}