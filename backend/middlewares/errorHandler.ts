
import { HttpError } from "errors/HttpError";
import {Response, Request, NextFunction} from "express"
import { AppError } from "lib/TS";

// unhandled rejections for example db is off
// by subscribing on the event 
// process.on('unhandeltRejection')
// process.exit - it is crashing the app
// server.close(()=>{
//  process.exit(1)
//})

// uncaught exeptions
// bugs unhandeld anywhere else
// process.on('uncaughtExeption')
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof HttpError ? err.status : 500;
  const isDev = process.env.NODE_ENV === "development";
  // TODO implement operational errors
  console.error("Error:", err);

  res.status(status).json({
    status: "error",
    message: err.message || "Something went wrong",
    ...(isDev && { stack: err.stack }),
    ...(isDev && { error: err }),
  });
};

export const error404Handler = (req:Request, res:Response, next:NextFunction) => {
  next(new HttpError(404, "Route not found"));
}