import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import cookiParser from "cookie-parser";


const app: Application = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiParser());
app.use("api/v1/image", express.static("public/images"));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});



export default app;