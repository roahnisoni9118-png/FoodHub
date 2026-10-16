const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const { getUserProfile,
        updateUserProfile,
        changePassword
      }= require('../controllers/userController')

router.get('/profile', authMiddleware, getUserProfile)
router.put('/profile', authMiddleware, updateUserProfile)
router.put('/change-password', authMiddleware, changePassword)

module.exports = router