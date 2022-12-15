import express, { Express, Request, Response } from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./utils/errors/not-found";

const app: Express = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.sendStatus(200);
});


app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export default app;
