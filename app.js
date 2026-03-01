
const express = require('express');
const app = express();
require("dotenv").config();
require("./db/conn");
const Student = require("./models/student");
app.use(express.json());


app.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result);
        console.log(result)
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});


// Get student data 

app.get("/student", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(201).send(studentData);
        console.log(result)
    } catch (e) {
        res.status(400).send(e);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("app is running"));


// app.listen(3000, () => console.log("app is running"));
// pKCCiQrOVom4vzJ3
// ip address : 183.87.165.230 
// Db Name : deepakamble281_db_user 
// Db passwd : pKCCiQrOVom4vzJ3
// mongodb+srv://deepakamble281_db_user:pKCCiQrOVom4vzJ3@first-app.tnt1az2.mongodb.net/?appName=first-app
// mongodb+srv://deepakamble281_db_user:pKCCiQrOVom4vzJ3@first-app.tnt1az2.mongodb.net/?appName=first-app
// mongodb+srv://deepakamble281_db_user:<db_password>@first-app.tnt1az2.mongodb.net/
// https://www.youtube.com/watch?v=OOVRZzg2fgo&list=PLwGdqUZWnOp26kuL9GZaR0Bspm6RMAdrx&index=4

