import {Response, Request} from "express"
import mock_ices from "../backend/src/mock_ices.json"
import { ApiResponse, IceCream } from "../backend/src/TS";

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