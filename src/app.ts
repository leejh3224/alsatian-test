import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/UserController";
import { createDB } from "./db";

// creates express app, registers all controller routes and returns you express app instance
export const app = createExpressServer({
    controllers: [UserController] // we specify controllers we want to use
 });

 createDB().then(() => {
    // run express application on port 3000
    app.listen(3000, () => {
        if (process.env.NODE_ENV !== 'test') console.log('hi')
    });
})
