---
sidebar_position: 4
title: Mempool Injector
---

Often, it's very useful to inject transactions from Fiber into your local mempool.

Fiber offers a Docker image that allows users to do that.

## Usage

```bash
docker run --name fiber-inject ghcr.io/chainbound/fiber-inject:latest-arm64 \
    fiber-inject \
    --fiber-api $API_ENDPOINT \
    --fiber-key $YOUR_API_KEY \
    --enodes $ENODE1,$ENODE2 \
    --port 30303
```

This will subscribe to the Fiber transaction stream and broadcast all the transactions it receives
to your local nodes (specified by `--enodes`, provided they're connected).

Your local `enode`'s IP address should either be the gateway address of your Docker network (usually `172.17.0.1`), or one of the publicly reachable
IP addresses of your machine.

The default port number is 30303 (the default p2p port of Ethereum nodes), but you can change it with the `--port` flag.

## Troubleshooting

It's possible that your local node has reached its maximum amount of peers, and therefore won't accept Fiber inject as another peer.

If the Docker container doesn't print the following (`docker logs fiber-inject`):

```
14:51:44.831 INF [DEVP2P] Connected to trusted peer           enode=...
```

means that your node reached max n. of peers, and you have to add `fiber-inject` as a trusted peer.

### Add Fiber inject as a trusted peer

#### 1. Expose the p2p port of the Docker container

:::info
Make sure the mapped port isn't already taken by your local node.
:::

```bash
docker run -p 30304:30303 --name fiber-inject mempirate/fiber-inject \
    fiber-inject \
    --fiber-api $API_ENDPOINT \
    --fiber-key $YOUR_API_KEY \
    --enodes $ENODE1,$ENODE2
```

#### 2. Find the `enode`

Fetch `enode` from output:

```
14:51:44.811 INF [DEVP2P] Starting devp2p server               enode=enode://6e45ab02bc08b03da9527ef42e07e12d144eea3365b102b3d7f3b7a3f4ae0aed24a039d346af3a7e0e3c84257458af076e55e8860e262f551dab9d4e472f0fe3@127.0.0.1:30303?discport=0
```

#### 3. Add `enode` to your local node's trusted peerset

:::info
Make sure you use your mapped port as the `enode` port.
:::

If you're using geth, you can use the JavaScript console:

```bash
geth attach --datadir $DATADIR --exec \
'admin.addTrustedPeer("enode://6e45ab02bc08b03da9527ef42e07e12d144eea3365b102b3d7f3b7a3f4ae0aed24a039d346af3a7e0e3c84257458af076e55e8860e262f551dab9d4e472f0fe3@127.0.0.1:30304")'
```

#### 4. Check if the connection was made

Check the output and confirm the connection should have been made.
