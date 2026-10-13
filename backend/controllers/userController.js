const User = require('../models/User')

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.status(200).json({
      message: 'Profile fetched successfully',
      user
    })

  } catch (error) {
    res.status(500).json({
      message: 'Server error while fetching profile'
    })
  }
}

module.exports = { getUserProfile }