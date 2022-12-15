export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message?: string) {
    super(message);

    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    else (this as any).__proto__ = actualProto;
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
