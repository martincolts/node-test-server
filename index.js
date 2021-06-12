import { Cipher } from 'my-encrypter-middleware';
import { middleware } from 'my-encrypter-middleware';
import express from 'express';

const app = express();
const port = 3000;

app.use(middleware('key'))

app.get('/', (req, res) => {
    console.log(req);
    res.send({'version': '1.0.0', 'message-from-middleware': req.messageFromMiddleware, 'encrypted': req.messageFromMiddlewareEncrypted
, messageDecrypted: new Cipher('key').decrypt(req.messageFromMiddlewareEncrypted)})
})

app.listen(port, () => {
    console.log(`Application started in port ${port}`)
})