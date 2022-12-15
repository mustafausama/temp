import app from "./app";
import { checkEnvVars } from "./config/check-env-vars";

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    checkEnvVars();
    app.listen(port, () => {
      // Info log
    });
  } catch (err: unknown) {
    // Error log
  }
};

start();
