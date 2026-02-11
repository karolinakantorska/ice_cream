import express, {Response, Request, NextFunction} from "express"
import dotenv from "dotenv";
import router from "./routes/iceCreamRoutes";

import { error404Handler, errorHandler } from "middlewares/errorHandler";

dotenv.config({ path: "./config.env" })
const app = express()
//if (process.env.NODE_ENV === 'development'){}
app.use(express.json())

// ROUTES
app.use("/api/v1/ice_creams", router)


app.use(error404Handler)

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ice Cream Backend!");
});
*/