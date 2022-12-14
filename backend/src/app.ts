import express, { Express, Request, Response } from "express";
import "express-async-errors";

const app: Express = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default app;
