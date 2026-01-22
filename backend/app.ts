import express, {Response, Request} from "express"

import router from "./routes/iceCreamRoutes";

const app = express()

app.use(express.json())

app.use("/api/v1/ice_creams", router)

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ice Cream Backend!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});