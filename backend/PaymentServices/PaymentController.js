export const processPayment = async (req, res) => {
  try {
    const { amount, cardNumber, expiryDate, cvv } = req.body;
    // Perform logic to process the payment
    // ...
    res.status(200).json({ success: true, message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
