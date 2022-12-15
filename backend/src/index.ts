import app from "./app";
import Logger from "./utils/logger";

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      Logger.info(`Listening on port ${port}`);
    });
  } catch (err: unknown) {
    Logger.error((err as Error).message);
  }
};

start();
