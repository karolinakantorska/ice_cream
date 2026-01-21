import express, {Response, Request} from "express"

import { createIceCream, deleteIceCream, getIceCream, getIceCreams, updateIceCream } from "./src/RoutingFunctions";

const app = express()

app.use(express.json())


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ice Cream Backend!");
});

//app.get("/api/v1/ice_creams",getIceCreams );
// optional param: /api/v1/ice_creams/:id/:x?
//app.get("/api/v1/ice_creams/:id", getIceCream)
//app.post('/api/v1/ice_creams', createIceCream)
//app.patch("/api/v1/ice_creams/:id", updateIceCream)
//app.delete("/api/v1/ice_creams/:id", deleteIceCream)

app.route('/api/v1/ice_creams')
    .get(getIceCreams)
    .post(createIceCream)
app.route('/api/v1/ice_creams/:id')
    .get(getIceCream)
    .patch(updateIceCream)
    .delete(deleteIceCream)

const port = 3000;
app.listen()

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});