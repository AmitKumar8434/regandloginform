const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtubeRegistration", {
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
}).then(() => {
    console.log(`Connection Sucessful`);
}).catch((err) => {
    console.log(`No Connection`);
})