const User = require('../models/User')
const bcrypt = require('bcryptjs')

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
//user profile update
const updateUserProfile = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: 'Name is required'
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { name: name.trim() },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    return res.status(200).json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error while updating profile'
    });
  }
};
//user password changee
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: 'Current password and new password are required'
      })
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        message: 'New password must be at least 8 characters long'
      })
    }

    const user = await User.findById(req.user.userId)

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    )

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'Current password is incorrect'
      })
    }

    user.password = newPassword
    await user.save()

    return res.status(200).json({
      message: 'Password changed successfully'
    })
  } catch (error) {
    console.error('Change Password Error:', error.message)

    return res.status(500).json({
      message: 'Server error while changing password'
    })
  }
}


module.exports = { getUserProfile, updateUserProfile, changePassword}