import express, { Express, Request, Response } from "express";
import "express-async-errors";
import morganMiddleware from "./middlewares/morgan";

const app: Express = express();

app.use(express.json());

app.use(morganMiddleware);

app.get("/", (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default app;
