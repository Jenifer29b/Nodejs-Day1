import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 4000;



app.get('/first', (req,res) => {
    res.status(200).json({ message: "App is listening and its working" });
})





app.listen(PORT, () => {
    console.log("Server is running on port" , PORT);
});