import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;

  constructor(public message: string = "Not found") {
    super(message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
