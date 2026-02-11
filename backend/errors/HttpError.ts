export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    //this.isOperational = true
    // Required so TS preserves the class name
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export interface HttpError extends Error {
  status: number;
}

export function createHttpError(status: number, message: string):HttpError  {
  const err = new Error(message) as any;
  err.status = status;
  return err;
}
