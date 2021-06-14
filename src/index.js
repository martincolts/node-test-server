import { middleware } from 'my-encrypter-middleware';
import express from 'express';
import { Router } from 'express';
import { DemoController } from './controllers/demoController.js';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const routes = Router();
routes.use(middleware('my key'));
routes.post('/', DemoController.post)

app.use('/', routes);

app.listen(port, () => {
    console.log(`Application started in port ${port}`)
});