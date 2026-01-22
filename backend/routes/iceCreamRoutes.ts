import { Router } from "express"
import { checkId, createIceCream, deleteIceCream, getIceCream, getIceCreams, requireBody, updateIceCream, validateIceCreamBody } from "./RoutingFunctions";

const router = Router()

router.param('id', checkId)

router.route('/')
    .get(getIceCreams)
    .post(requireBody,validateIceCreamBody, createIceCream)

router.route('/:id')
    .get(getIceCream)
    .patch(requireBody,updateIceCream)
    .delete(deleteIceCream)

export default router

//app.get("/api/v1/ice_creams",getIceCreams );
// optional param: /api/v1/ice_creams/:id/:x?
//app.get("/api/v1/ice_creams/:id", getIceCream)
//app.post('/api/v1/ice_creams', createIceCream)
//app.patch("/api/v1/ice_creams/:id", updateIceCream)
//app.delete("/api/v1/ice_creams/:id", deleteIceCream)