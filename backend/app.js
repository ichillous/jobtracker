const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Job = require('./db/jobs');
const cors = require('cors');

const app = express();

const dbURI = 'mongodb+srv://admin:Password@jobtrackerdb.vnup7tb.mongodb.net/jobTracker';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.redirect('/all-jobs');
    }
);

app.get('/all-jobs', (req, res) => {
    Job.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}
);





// add a new job to mongodb
app.post('/add-job', (req, res) => {
    const job = new Job(req.body);
    job.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}
);
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
    }
);

//todo: update and delete routes