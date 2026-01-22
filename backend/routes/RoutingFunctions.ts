import {Response, Request, NextFunction, RequestParamHandler, RequestHandler} from "express"
import mock_ices from '../lib/mock_ices.json'
import { ApiResponse, IceCream } from "lib/TS";
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

export const getIceCreams =(req: Request, res: Response<ApiResponse<IceCream[]>>) => {
  res
    .status(200)
    .json({
        success: true,
        results: mock_ices.length,
        data: 
            mock_ices
       });
}

export const getIceCream = (req: Request<{ id: string }>, res: Response<ApiResponse<IceCream>>) =>{
    console.log(req.params)
    const id = req.params.id

    const iceCream = mock_ices.find((ice:IceCream)=> ice.id === id)

    if(!iceCream){
        return res
            .status(404)
            .json({
            success: false,
            message:'invalid id'
        })
    }

    res
        .status(200)
        .json({
            success: true,
            data: iceCream
        })
}

export const createIceCream = (req: Request<{}, {}, IceCream>, res: Response<ApiResponse<IceCream>>) =>{
        console.log(req.body)
        res
            .status(201)
            .json({
                success: true,
                data:req.body
            })
    }

export const updateIceCream = (req: Request<{ id: string },{}, IceCream>, res: Response<ApiResponse<string>>) =>{
        const id = req.params.id

        const iceCream = mock_ices.find((ice:IceCream)=> ice.id === id)

    if(!iceCream){
        return res
            .status(404)
            .json({
            success: false,
            message:'not found'
        })
    }
        res
            .status(200)
            .json({
                success: true,
                data:id

            })
    }

export const deleteIceCream = (req: Request<{ id: string }>, res: Response<ApiResponse<string>>) =>{
        const id = req.params.id

        const iceCream = mock_ices.find((ice:IceCream)=> ice.id === id)

    if(!iceCream){
        return res
            .status(404)
            .json({
                success: false,
                message:'not found'
        })
    }
        res
            .status(200)
            .json({
                success: true,
                message:'Ice cream deleted succesfully.'
            })
    }