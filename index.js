// index.js
import express from "express";
import dotenv from "dotenv";
//import morgan from "morgan";
import connectDB from "./db.js";
import usersRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});


