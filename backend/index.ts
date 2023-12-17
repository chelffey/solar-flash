import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pool from "./config/db.config";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 9000;

// add functions here
const getFlashcards = (req: Request, res: Response) => {
    pool.query('SELECT * FROM flashcards', (error, flashcards) => {
      if (error) {
        throw error
      }
      res.status(200).json(flashcards.rows)
    })
  }

// add routes here
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World! Welcome.");
});

app.get('/flashcards', getFlashcards);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
