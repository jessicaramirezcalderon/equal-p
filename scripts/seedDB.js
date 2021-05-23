const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const companySeed = [
  {
    title: "Company One",
    location: "France"
  },
  {
    title: "Company Two",
    location: "Italy"
  },
  {
    title: "Company Three",
    location: "Japan"
  }
];


const reviewSeed = [
  {
    user: null,
    company: null,
    rating: 2
  },
  {
    user: null,
    company: null,
    rating: 5
  },
  {
    user: null,
    company: null,
    rating: 4
  }
];

db.Company
  .deleteMany({})
  .then(() => db.Company.collection.insertMany(companySeed))
  .then(data => {
    console.log(data.result.n + " companies inserted!");

    const getUser = db.User.findOne({});
    const getCompany = db.Company.findOne({});
    return Promise.all([getUser, getCompany]);
  })
  .then((values) => {
    for (let i = 0; i < reviewSeed.length; i++) {
      reviewSeed[i].user = values[0]._id;
      reviewSeed[i].company = values[1]._id;
    }

    return db.Review.deleteMany({});
  })
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " reviews inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });