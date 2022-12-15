import morgan, { StreamOptions } from "morgan";

import Logger from "../utils/logger";

const stream: StreamOptions = {
  write: (msg) => Logger.http(msg)
};

const skip = () => {
  const env = process.env.NODE_ENV || "dev";
  return env !== "dev";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
