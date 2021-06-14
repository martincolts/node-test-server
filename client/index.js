import axios from 'axios';
import { encryptBody } from 'my-encrypter-middleware';

const objectToEncrypt = {
    'data': 'some data',
    'list': ['one', 'two', 'three']
}

const encrypted = encryptBody(objectToEncrypt, 'my key')

console.log(encrypted);

const response = axios.post('http://localhost:3000', {'data': encrypted})
.then(response => {
    console.log(response.data);
});