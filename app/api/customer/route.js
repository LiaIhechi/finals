const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer'); // Assuming you have the Customer model in models folder

// Create (POST) - Add a new customer
router.post('/', async (req, res) => {
  const newCustomer = new Customer(req.body);
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json({ message: "Customer created successfully", customer: savedCustomer });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read (GET) - Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update (PUT) - Update a customer by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Customer updated successfully", customer: updatedCustomer });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete (DELETE) - Delete a customer by ID
router.delete('/:id', async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;