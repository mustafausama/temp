import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  reason = "Internal server error. Please try again later.";

  serializeErrors() {
    return [{ message: this.message }];
  }
}
