# bee-pss-websockets
Example code on how to use pss websockets with bee

### How to use

Checkout the repo, then:

```
git clone https://github.com/acud/bee-pss-websockets.git && cd bee-pss-websockets
npm i
```

Run the bee node:

```
make binary
./dist/bee start --standalone --verbosity 5 --data-dir my-data-dir
```

Then run the javascript file with:

```
node client.js
```

This will create a listener on the topic which is defined in the uri (the last part of the locator)

### Patching bee to send data on the websocket

The file under `bee.diff` defines a new entry in the pumpWs handler in `bee`.
`Bee` will then send some custom defined data on the websocket periodically.

