---
sidebar_position: 5
title: Mempool Injector
---
Often, it's very useful to inject transactions from Fiber into your local mempool. We offer a Docker image that will help you do that.

## Usage
```bash
docker run -p 8080:8080 --name fiber-inject mempirate/fiber-inject 
    --fiber-api fiberapi.io:8080 
    --fiber-key $YOUR_API_KEY 
    --enodes $ENODE1,$ENODE2 
    --port 8080
```

This will proxy the gRPC API on `localhost:8080`, and once (**and only once**) you subscribe to the transaction stream, `fiber-inject` will send these
transactions to your local node over devp2p.

:::danger
For this to work, you HAVE to connect your client to `localhost:8080` instead of `fiberapi.io:8080`.
:::

Your local `enode`'s IP address should either be the gateway address of your Docker network (usually `172.17.0.1`), or one of the publicly reachable
IP addresses of your machine.

It's possible that your local node has reached its maximum amount of peers, and therefore won't accept Fiber inject as another peer.
If the Docker container doesn't print the following (`docker logs fiber-inject`):

```
14:51:44.831 INF [DEVP2P] Connected to trusted peer           enode=...
```
that's probably the case, and you have to add `fiber-inject` as a trusted peer. First we need to expose the p2p port of the Docker container, so you'll have to
run it like this:
```bash
docker run -p 8080:8080 -p 30304:30303 mempirate/fiber-inject 
    --fiber-api fiberapi.io:8080 
    --fiber-key $YOUR_API_KEY 
    --enodes $ENODE1,$ENODE2 
    --port 8080
```
:::info
Make sure the mapped port isn't already taken by your local node.
:::

Next, find the `enode`. This should also be printed in the output:
```
14:51:44.811 INF [DEVP2P] Starting devp2p server               enode=enode://6e45ab02bc08b03da9527ef42e07e12d144eea3365b102b3d7f3b7a3f4ae0aed24a039d346af3a7e0e3c84257458af076e55e8860e262f551dab9d4e472f0fe3@127.0.0.1:30303?discport=0
```

Now add this enode to your local node's trusted peerset. If you're using geth, you can use the JavaScript console:
```bash
geth attach --datadir $DATADIR --exec 'admin.addTrustedPeer("$ENODE")'
```

Now if you check the output, the connection should have been made.