const mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        name: String,
        Age: Number,
        Dept: String,
        Salary: Number
    }
);

var EmployeeModel = mongoose.model('Employee', schema);
module.exports = EmployeeModel;
