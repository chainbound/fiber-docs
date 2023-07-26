---
sidebar_position: 5
title: Tracing
---
### Usage
First, set up `cbctl` by following the instructions [here](https://github.com/chainbound/cbctl#readme).

Then, you can use the `fiber trace` subcommand to trace messages:
```bash
NAME:
   cbctl fiber trace - Trace transactions or blocks

USAGE:
   cbctl fiber trace command [command options] [arguments...]

COMMANDS:
   tx       Trace a transaction
   block    Trace a block
   help, h  Shows a list of commands or help for one command

OPTIONS:
   --help, -h  show help
```

### Transaction Tracing
Tracing can be very useful for seeing where certain transactions originated as well as how fast they propagated. Fiber has
an API that will show you the exact path a transaction took through the network. You can use our [`cbctl`](https://github.com/chainbound/cbctl) CLI tool to access the API.

Here an example of how to trace a transaction with `cbctl`:

**Command**
```bash
cbctl fiber trace tx --hash 0xaa04f9b21ad55393eac0343e4c162be56cdc54f15f7abc59dfecca347635ec9f --show-source
```
**Output**
```
Timestamp       Node ID                 Region                  Observation Type        Source
[1683552246359] fiber-node-tzqfmUHX     (eu-central-1)          p2p                     enode://0xc4702653ad608e49f36a292e87d4299e34c69ee5a8d79c1f06c5e76a2941e682ca25b974e97b5165d3ce164c37098819fe9821a3c01fe8c0adc4cc697d7e0cda@144.76.79.170:30303
[1683552246359] fiber-node-UBUhZvC3     (eu-central-1)          fiber                   fiber-node-tzqfmUHX-eu-central-1
[1683552246361] fiber-node-UBUhZvC3     (eu-central-1)          p2p                     enode://0xa039a887e07e8899c308b94bc77c9d6a8c3fa589a0191646bb6a5f42c471bad9f8ea545d3a8d2f3ff03a9c7edb6c0f056dac2d485064a948bbac50742df5da0b@3.68.227.119:30303
[1683552246364] fiber-node-1FNltdeP     (eu-west-3)             fiber                   fiber-node-tzqfmUHX-eu-central-1
[1683552246368] fiber-node-uy91LhSB     (eu-west-2)             fiber                   fiber-node-UBUhZvC3-eu-central-1
[1683552246375] fiber-node-1FNltdeP     (eu-west-3)             p2p                     enode://0x9a6808b872cdef7d153aaf26e4447f27499b367f44121068d36d38e4829e336df2a32acf9088ba1a07952016abeea92e58368338b73406a178e751c56335b5b5@81.249.172.138:30403
[1683552246376] fiber-node-uy91LhSB     (eu-west-2)             p2p                     enode://0xbcfb491c00fd1a6577311cf96c40165c1e70450968a10f920bc8900f1d6042db0dc6555064333ec153cc147a9d665d410f905383aa1b022d6e4878139e85c858@13.36.234.254:30303
[1683552246401] fiber-node-uxXKJltD     (us-east-1)             p2p                     enode://0x11dfc468e1370365058f8024e371b9fdd9fc8b7d7666f14912d8354e2d1e98c1bcb570028fabe9e3a5755df500fe933b58dc41390e0c42bd5b5efbbd2e9f2af8@138.201.137.117:30303
[1683552246401] fiber-node-vKZvH7Va     (us-east-1)             fiber                   fiber-node-uxXKJltD-us-east-1
[1683552246401] fiber-node-RrDUEn2O     (us-east-1)             fiber                   fiber-node-uxXKJltD-us-east-1
[1683552246406] fiber-node-RrDUEn2O     (us-east-1)             p2p                     enode://0xf0177460cedeb39a9e9791e1b93ee510467e9b75052ab4ff6bdbdf273d6c7a1d6db010a39032974f90798415ca284bc400182eef119dbc1b83da2a103478b171@34.229.169.228:30303
[1683552246406] fiber-node-vKZvH7Va     (us-east-1)             p2p                     enode://0x49def938197d138fccdfd15250e27fa2b423f7ecf560ef9c826a16f8558f9d062b88648e92578ce7e81558ce53832ffd87efe0ae42d191858bbc42f11e70af85@18.234.75.196:30303
[1683552246406] fiber-node-bp1hdWL3     (us-east-2)             fiber                   fiber-node-uxXKJltD-us-east-1
[1683552246412] fiber-node-bp1hdWL3     (us-east-2)             p2p                     enode://0x919da281398a13e227b26c21b1747e7d28acf3270eb2a707787961608e21d0e4206b1806b04029eec0a75933a08ad730359184e6005dc4245b6c2116a1da57d6@44.201.98.188:30303
[1683552246432] fiber-node-rvrbVEEN     (us-west-1)             fiber                   fiber-node-uxXKJltD-us-east-1
[1683552246437] fiber-node-pjjlW9ba     (ap-southeast-1)        fiber                   fiber-node-UBUhZvC3-eu-central-1
[1683552246439] fiber-node-rvrbVEEN     (us-west-1)             p2p                     enode://0xf8c1c390d373c7d439dbee739213b3529067997b97b8249ba550e8348ad9affafa133c784e40e81aaec535bf88beaebf4f2285561ff7d333282b23b4c9ce2d93@185.171.131.117:30303
[1683552246441] fiber-node-pjjlW9ba     (ap-southeast-1)        p2p                     enode://0x2976502fd13cc604da9775ae332ed45c13708d5c04677d311085be717a7162ebd7fdfa5659d48b047f38f106810f3293f7beac9649decb74256e65d336da8dce@18.141.166.63:29888
[1683552246448] fiber-node-yJuuNX1O     (ap-northeast-1)        p2p                     enode://0x1ef5d1c8ea44928c284a2e850647428773d0f2ba02343795dec93f76dedd73949d516e7580666bc1809782ee0acc51e39f8de90520baca31b164840e0cebda99@52.193.254.254:44881
[1683552246456] fiber-node-YboaGO5a     (ap-east-1)             fiber                   fiber-node-tzqfmUHX-eu-central-1
[1683552246462] fiber-node-YboaGO5a     (ap-east-1)             p2p                     enode://0xf149cf0fb44e5c493e5f7cd7d2b4841a9faa817d034c1d5394527b8105a296a1ba7e15823b60469dd304f5e50f535076a311a1f29b422ca4407ac45f22bd2049@78.46.174.84:30303
[1683552246463] fiber-node-hz71Y1Ml     (ap-northeast-2)        p2p                     enode://0x451229d9f219fe1660b8a6959d13a0bbfbed25427a99caa4b5f45a6076e620ad1fa396525be0b643bff974b3762e997864808be9b7b4d9f443b595e290f5273c@3.36.101.198:40216
```
The output is a table of observations with 5 columns:
* `Timestamp`: the UNIX timestamp in milliseconds.
* `NodeID`: the unique ID of the Fiber Node in question.
* `Region`: the regions of said Fiber Node.
* `Observation Type`: the type of observation. It can be either `p2p` or `fiber`.
    * `p2p`: the observation was from a peer in the p2p network.
    * `fiber`: the observation was from another node in the Fiber Network.
    * We include both types of observations because it can be useful to compare the 2. You can filter by observation type by using the `--type` flag.
* `Source`: if received from the p2p network, an enode, otherwise the NodeID of the node we received it from.

### Block Tracing
Similarly, you can also trace blocks with `cbctl` using either an execution block hash or number:
```
cbctl fiber trace block --hash <block_hash>
# or
cbctl fiber trace block --number <block_number>
```

For example:

**Command**:
```bash
cbctl fiber trace block --number 17769274
```

**Output**:
```
Timestamp	Node ID			Region			Observation Type
[1690277953069]	fiber-node-WZfpDrEh	(us-east-1)		p2p
[1690277953076]	fiber-node-sRjq9ckr	(us-east-1)		fiber
[1690277953076]	fiber-node-q5MFsXcd	(us-east-1)		fiber
[1690277953082]	fiber-node-EEMW2afd	(us-east-2)		fiber
[1690277953107]	fiber-node-gSwmEiFj	(us-west-1)		fiber
[1690277953114]	fiber-node-Kyu2snsE	(eu-west-2)		fiber
[1690277953118]	fiber-node-EBafacey	(eu-west-3)		fiber
[1690277953122]	fiber-node-4WUOdGw3	(eu-central-1)		fiber
[1690277953122]	fiber-node-fJsb66hv	(eu-central-1)		fiber
[1690277953144]	fiber-node-q5MFsXcd	(us-east-1)		p2p
[1690277953150]	fiber-node-yKhHJsyo	(ap-northeast-1)		fiber
[1690277953151]	fiber-node-Er6JELxH	(ap-northeast-1)		fiber
[1690277953163]	fiber-node-hZ4K3q7A	(ap-northeast-2)		fiber
[1690277953176]	fiber-node-LkP2dHge	(ap-east-1)		fiber
[1690277953184]	fiber-node-JVIFxwE0	(ap-southeast-1)		fiber
[1690277953185]	fiber-node-qCD5QJB2	(ap-southeast-1)		fiber
[1690277953219]	fiber-node-sRjq9ckr	(us-east-1)		p2p
[1690277953359]	fiber-node-Kyu2snsE	(eu-west-2)		p2p
[1690277953366]	fiber-node-EEMW2afd	(us-east-2)		p2p
[1690277953392]	fiber-node-qCD5QJB2	(ap-southeast-1)		p2p
[1690277953461]	fiber-node-4WUOdGw3	(eu-central-1)		p2p
[1690277953479]	fiber-node-fJsb66hv	(eu-central-1)		p2p
[1690277953580]	fiber-node-EBafacey	(eu-west-3)		p2p
[1690277953639]	fiber-node-yKhHJsyo	(ap-northeast-1)		p2p
[1690277953669]	fiber-node-Er6JELxH	(ap-northeast-1)		p2p
[1690277953674]	fiber-node-gSwmEiFj	(us-west-1)		p2p
[1690277953841]	fiber-node-LkP2dHge	(ap-east-1)		p2p
[1690277954136]	fiber-node-JVIFxwE0	(ap-southeast-1)		p2p
[1690277954152]	fiber-node-hZ4K3q7A	(ap-northeast-2)		p2p
```
