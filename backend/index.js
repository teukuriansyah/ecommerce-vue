import express from "express"
import cors from "cors"
import "dotenv/config"
import paymentRoute from "./route/paymentRoute.js"
import errorRoute from "./route/errorRoute.js"

const port = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());

app.use(paymentRoute)
app.use(errorRoute)

app.listen(port, () => console.log(`Server is running on port ${port}`));