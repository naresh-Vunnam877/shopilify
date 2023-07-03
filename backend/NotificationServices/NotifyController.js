export const sendNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;
    // Perform logic to send a notification to the user
    // ...
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
