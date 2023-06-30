import User from './userModels.js';

// Controller for handling user-auth-related operations
const authController = {
  // Get all users
  signup: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  login: async (req, res) => {
      // Validate email and password
    const { email, password } = req.body;
  try {
        if (!email || !password) {
      res.status(500).json({ error: "password or email missing"  });
    }
     // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      res.status(500).json({ error: " email missing"  });
    }
    const passwordMatch = await user.matchPasswords(password);
      if (!passwordMatch) {
     res.status(500).json({ error: "password  missing"  });
    }
    res.status(201).json(user);
  } catch (error) {
       res.status(500).json({ error: error });
  }

  }
}


export default authController