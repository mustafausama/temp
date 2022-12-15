import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  reason = "Authorization is required.";

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
