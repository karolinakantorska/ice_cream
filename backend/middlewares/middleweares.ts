import {Response, Request, NextFunction, RequestParamHandler, RequestHandler} from "express"
import { validate as isUUID } from "uuid";

export const checkId: RequestParamHandler = (req:Request,res:Response,next: NextFunction,val:string)=> {
    if ( !isUUID(val)){
        return res
            .status(404)
            .json({
                success: false,
                message:'Invalid id'
        })
    }
    next()
}
export const requireBody: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Request body is required",
    });
  }
  next();
};


export const validateIceCreamBody: RequestHandler =(req:Request,res:Response,next: NextFunction)=>{
    const body = req.body || {};
    const bodyKeys = Object.keys(body);

    const requiredKeys= ['name','shape_id','size', 'receipe', 'description', 'price', 'owner_id', 'loves']
    const missingKey = requiredKeys.find(key => !bodyKeys.includes(key));
    if(missingKey){
        return res
            .status(404)
            .json({
                success: false,
                message:`${missingKey} property is missing in request body`
        })

    }
    next()
}