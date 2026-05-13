const express = require('express');
const Leave = require('../models/Leave');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/apply', authMiddleware, async (req, res) => {
    const leave = new Leave({
        userId: req.user.id,
        name: req.body.name,
        email: req.user.email, 
        leaveType: req.body.leaveType,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        reason: req.body.reason
    });

    await leave.save();

    res.json({ message: 'Leave applied successfully' });
});

router.get('/list', authMiddleware, async (req, res) => {

    const leaves = await Leave.find();

    res.json(leaves);
});

module.exports = router;