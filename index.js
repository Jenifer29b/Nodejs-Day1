import express from "express";
import cors from "cors";
import fs from "fs";
import { format } from "date-fns";

const app = express();
app.use(cors());
const PORT = 4000;





app.get('/write', (req, res) => {
    const today = format(new Date(), 'dd-MM-yyyy-hh-mm-ss')
    console.log(today);
    const filepath = `TimeStamp/ ${today}`

    fs.writeFileSync(filepath, `${today}`, 'utf-8');
    
    
    // let data = fs.readFileSync(filepath, 'utf-8')
    // try {
    //     res.status(200).send(data)

    // } catch (error) {
    //     console.log(error);
    // }
})

app.get('/read', (req, res) => {
    const filepath = "TimeStamp"
    let data1 = fs.readdirSync(filepath, 'utf-8')

    res.send(data1)
})








app.listen(PORT, () => {
    console.log("Server is running on port" , PORT);
});