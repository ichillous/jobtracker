const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    jobTitle: { type: String, required: false },
    company: { type: String, required: false },
    location: { type: String, required: false },    
    description: { type: String, required: false },
    numberOfInterviews: { type: String, required: false },
    jobOfferBool: { type: Boolean, required: false },
    applicationDate: { type: Date, required: false },
    position: { type: Number, required: false },
    jobOfferDate: { type: Date, required: false }
});

const Job = mongoose.model('Job', JobSchema);


module.exports =  Job;