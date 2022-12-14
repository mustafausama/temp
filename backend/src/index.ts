import app from "./app";

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      // Info log
    });
  } catch (err: unknown) {
    // Error log
  }
};

start();
