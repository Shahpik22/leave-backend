const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String, 
    leaveType: String,
    startDate: String,
    endDate: String,
    reason: String,
    status: { type: String, default: 'APPROVED' }
});

module.exports = mongoose.model('Leave', LeaveSchema);