import { Router } from "express"
import { createIceCream, deleteIceCream, getIceCream, getIceCreams, updateIceCream } from "./RoutingFunctions";

export const iceCreamRoutes = Router();

iceCreamRoutes.route('/')
    .get(getIceCreams)
    .post(createIceCream)

iceCreamRoutes.route('/:id')
    .get(getIceCream)
    .patch(updateIceCream)
    .delete(deleteIceCream)

//app.get("/api/v1/ice_creams",getIceCreams );
// optional param: /api/v1/ice_creams/:id/:x?
//app.get("/api/v1/ice_creams/:id", getIceCream)
//app.post('/api/v1/ice_creams', createIceCream)
//app.patch("/api/v1/ice_creams/:id", updateIceCream)
//app.delete("/api/v1/ice_creams/:id", deleteIceCream)