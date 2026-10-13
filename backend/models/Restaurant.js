const  mongoose=require('mongoose')

const RestaurantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        default:''
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    cuisine:{
        type:[String],
        required:true
    },
    image:{
        type:String,
        default:''
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    deliveryTime:{
        type:String,
        default:'30-45 min'
    },
    isOpen:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Restaurant=mongoose.model('Restaurant',RestaurantSchema)

module.exports=Restaurant