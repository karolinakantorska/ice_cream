import { AppError } from "lib/TS";

export const createError = (status: number, message: string): AppError => {
  const err = new Error(message) as AppError;
  err.status = status;
  return err;
};

