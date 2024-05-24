import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

const app = express();
const { json, urlEncoded } = pkg;

app.use(json());
app.use(urlEncoded({ extended: true }));

app.listen(3000, function() {
    console.log("Listening from 3000");
});

app.use("/router", router);