import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../utils/errors/custom-error";

export const errorHandler = (err: Error, _req: Request, res: Response) => {
  if (err instanceof CustomError)
    return res
      .status(err.statusCode)
      .send({ status: err.statusCode, erros: err.serializeErrors() });

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Internal server Error"
  });
};
