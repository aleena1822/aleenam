const mongoose = require('mongoose');
let compass_url ='mongodb://localhost:27017/samplestudent';
let mongodb_url ="mongodb+srv://aleenakm:obito11@cluster0.zlish6j.mongodb.net/aleena?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodb_url).then(() =>{
    console.log("db connected");
})
.catch((err) => {
    console.log(err);
});