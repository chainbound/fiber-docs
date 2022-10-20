---
sidebar_position: 4
title: Tracing
---
Tracing can be very useful for seeing where certain transactions originated as well as how fast they propagated. Fiber has
an API that will show you the exact path a transaction took through the network. To clarify, here is the example output
for transaction [0xbd61e4eea352256c130daf09d54fd7e6410a746c3850c29dfcc1112385c30c16](https://etherscan.io/tx/0xbd61e4eea352256c130daf09d54fd7e6410a746c3850c29dfcc1112385c30c16):
```
[
    {
        "Timestamp": 1666168061245,
        "From": "enode://b48ddef5bae433438978fdff974b7c4247523e73a9c2dda435588eb8cc20f0e556283e7e1880a42be00d3bd8ddb442da2ba2539111ad2faa225511ba70d79af0@34.92.208.56:29888",
        "NodeID": "fiber-node-i3otsu-ap-east-1"
    },
    {
        "Timestamp": 1666168061250,
        "From": "enode://359bd6bf8774a68b0bab92318b083070489bf2c4b6e1ba727e1e39989a4153cf1459d704162da0939aea823a8b93be85c44504e5f29b78808a21e9497ff12c0a@35.73.208.158:30303",
        "NodeID": "fiber-node-zxlct6-us-west-1"
    },
    {
        "Timestamp": 1666168061263,
        "From": "fiber-node-zxlct6-us-west-1",
        "NodeID": "fiber-node-97c19t-us-west-2"
    },
    {
        "Timestamp": 1666168061264,
        "From": "fiber-node-i3otsu-ap-east-1",
        "NodeID": "fiber-node-fgp8wr-ap-northeast-2"
    },
    {
        "Timestamp": 1666168061266,
        "From": "enode://0bb0b938e1d9f7d9083b3e2bf7b045af266dcc3e9a30425b42d63dd8aaf64697bb3df4e607ccefb4c1751deff845d26b3b65aa08a8d88395009211deaac4fc00@144.76.57.184:30303",
        "NodeID": "fiber-node-131w03-eu-central-1"
    },
    {
        "Timestamp": 1666168061267,
        "From": "enode://6810dae7f81ef21e0e63c28f4bdcc23053faad4fd63f484da0b9b28cbba5a32fc844b4526dc9b11b3a9235757543b4debc1a54058ff57a66ba56884320c1b784@142.132.249.66:30303",
        "NodeID": "fiber-node-aqra30-eu-central-1"
    },
    {
        "Timestamp": 1666168061268,
        "From": "enode://b04878af5a911767aba214c68b19945a470fb96e0727f48a5e18fb5925cf6e31fd25f8bbb14710b0a3f68d1bc0cc568ab0b4c298aa8c84f3c72ba315c23a2948@100.24.53.140:30303",
        "NodeID": "fiber-node-r55juv-us-east-1"
    },
    {
        "Timestamp": 1666168061269,
        "From": "fiber-node-i3otsu-ap-east-1",
        "NodeID": "fiber-node-73e8sa-ap-northeast-1"
    },
    {
        "Timestamp": 1666168061269,
        "From": "enode://b04878af5a911767aba214c68b19945a470fb96e0727f48a5e18fb5925cf6e31fd25f8bbb14710b0a3f68d1bc0cc568ab0b4c298aa8c84f3c72ba315c23a2948@100.24.53.140:30303",
        "NodeID": "fiber-node-wudnrk-us-east-1"
    },
    {
        "Timestamp": 1666168061269,
        "From": "fiber-node-r55juv-us-east-1",
        "NodeID": "fiber-node-wudnrk-us-east-1"
    },
    {
        "Timestamp": 1666168061270,
        "From": "fiber-node-i3otsu-ap-east-1",
        "NodeID": "fiber-node-rm4zf9-ap-southeast-1"
    },
    {
        "Timestamp": 1666168061271,
        "From": "enode://3e6f45ff7e29aebb2fec616eb95e1b1f2def1def0e04ff57c428502fe957587193782c1a6c7a73068ab8d314e3270b7ace23006cf103fe4c203bcabdb507dd9a@157.90.209.20:30303",
        "NodeID": "fiber-node-xf9aix-eu-west-3"
    },
    {
        "Timestamp": 1666168061272,
        "From": "enode://bd5e2398d2c87d59f8fb86bd7e6d41d070f0999f497bebab8f793f6136150ddef7ed08a9a5f47df26d2b1f95b8abb118e43d08acc8fb20747b2ea3254be29094@116.202.163.31:30303",
        "NodeID": "fiber-node-cdhwy2-eu-west-1"
    },
    {
        "Timestamp": 1666168061275,
        "From": "fiber-node-131w03-eu-central-1",
        "NodeID": "fiber-node-2gr8l2-eu-west-2"
    },
    {
        "Timestamp": 1666168061275,
        "From": "fiber-node-r55juv-us-east-1",
        "NodeID": "fiber-node-4r0c28-us-east-2"
    },
    {
        "Timestamp": 1666168061276,
        "From": "enode://3e6f45ff7e29aebb2fec616eb95e1b1f2def1def0e04ff57c428502fe957587193782c1a6c7a73068ab8d314e3270b7ace23006cf103fe4c203bcabdb507dd9a@157.90.209.20:30303",
        "NodeID": "fiber-node-jy34hu-eu-north-1"
    }
]
```
The output is a JSON list of entries, and an entry consists of 3 fields:
* `Timestamp`: the UNIX timestamp in milliseconds.
* `NodeID`: the unique ID of the Fiber Node in question. It contains the location as well.
* `From`: if received from the devp2p network, an enode, otherwise the Fiber NodeID of the node we received it from.

### Usage
The API requires authentication, which you can do with your API key. The format is the following:
```
http://fiber-trace.chainbound.io/trace/<tx_hash>?key=<your_api_key>
```
:::danger
Don't share the link containing your key with others.
:::