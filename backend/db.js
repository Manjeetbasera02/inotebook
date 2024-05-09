const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const mongoURI = "mongodb+srv://manjeetman38:Manjeetb02@cluster0.9kz0iqp.mongodb.net/"
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }


const connectToMongo = ()=> {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}


module.exports = connectToMongo;