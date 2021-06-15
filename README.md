# Express server

This repository is a server created to test [my-encrypter-middleware](https://www.npmjs.com/package/my-encrypter-middleware) and it consists of a little server configured with a POST endpoint to decrypt the return of a cipher body.

This server follows the instructions in the [middleware](https://www.npmjs.com/package/my-encrypter-middleware) documentation.

# How to run it

## Start server

The server can be started with the ```npm start``` command or with a docker image ```docker build -t foo . && docker run -it -p 3000:3000 foo```.
Once the server is started you should see this log.

```js
Application started in port 3000
```

## Run client

Now that the server is up we can run the client, to do that we should execute the command ```npm run start:client" and you will see the next log

```sh
Body to encrypt:  { data: 'some data', list: [ 'one', 'two', 'three' ] }

Body ecrypted to send to the server:  U2FsdGVkX19HkSO3KH0eyLUvAbH//3B3JqkoWHjdco9DV8Py4/WiOreKsdi/FxqDmHCom0NvvALJnEuP7T+D2VGZq5ydNhg3bKUA4RBunds=

Response encrypted from the server { data: 'some data', list: [ 'one', 'two', 'three' ] }
```

This means that the experiment was executed correctly and in the log you can see the body that was sent encrypted, and the response from the server decrypted. You can see this code in ```client/index.js```