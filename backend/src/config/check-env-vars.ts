import { PORT } from "./env";

export const checkEnvVars = () => {
  if (!PORT) throw new Error("PORT must be specified");
};
