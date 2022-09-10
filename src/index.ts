import express from "express"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT: string = process.env.PORT ?? "";

app.listen(PORT, () => {
    console.log(`Listenting on port ${PORT}`);
});