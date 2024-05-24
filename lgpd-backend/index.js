import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

import sequelize from "./utils/database.js";
import association from "./models/associations.js";

const app = express();
const { json, urlEncoded } = pkg;

app.use(json());
app.use(urlEncoded({ extended: true }));

(async () => {
    try {
        association.associations();
        await sequelize.sync();
        app.listen(3000, function() {
            console.log("Listening from 3000");
        });
    } catch (error) {
        console.log(error);
    }
})(); 

app.use("/router", router);