
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(process.env.MONGO_URI);
    console.log("❌ MongoDB Connection Error:");
    console.log(err);
  });

//mongoose.connect("mongodb+srv://deepakamble281_db_user:PASSWORD@first-app.tnt1az2.mongodb.net/demo-app")
// node app.jsmongoose.connect("mongodb+srv://deepakamble281_db_user:pKCCiQrOVom4vzJ3@first-app.tnt1az2.mongodb.net/?appName=student-app").then(()=> console.log("db has connection success")).catch(()=>console.log("no connection"));
//mongoose.connect("mongodb://localhost:27017/student-api").then(()=> console.log("db connection success")).catch(()=>console.log("no connection"));

