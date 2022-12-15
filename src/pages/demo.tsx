import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ethers } from 'ethers';

import styles from './index.module.css';

const INFURA_URL = 'wss://mainnet.infura.io/ws/v3/0728aa7b5c674c1796b64920ef30342d';
const WS_URL = 'wss://demo-api.fiber.chainbound.io/ws/uniswap'
let socket;
if (typeof window != 'undefined') {
    try {
        socket = new WebSocket(WS_URL);
    } catch (e) {
        console.error(e);
    }
}

export default class DemoTable extends React.Component<{}, { transactions: Array<any> }> {
    private socket: WebSocket;
    private ethers: ethers.providers.WebSocketProvider;

    constructor(props) {
        super(props);
        this.socket = socket;
        this.ethers = new ethers.providers.WebSocketProvider(INFURA_URL);

        this.state = {
            transactions: []
        };
    }

    componentDidMount(): void {
        this.socket.addEventListener('open', () => {
            console.log("Connected to", WS_URL);
        });

        this.socket.addEventListener('message', (msg) => {
            const txEvent = JSON.parse(msg.data as string);
            if (!this.state.transactions.some(tx => tx.Hash === txEvent.Hash) && !txEvent.From.includes('fiber-node')) {
                this.setState({ transactions: [txEvent, ...this.state.transactions.slice(0, 40)] });

                this.ethers.waitForTransaction(txEvent.Hash, 2).then(tx => {
                    if (this.state.transactions.some(tx => tx.Hash == txEvent.Hash)) {
                        this.setState({ transactions: this.state.transactions.filter(tx => tx.Hash !== txEvent.Hash) });
                    }
                });
            }
        });

        this.socket.addEventListener('error', (err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <Layout title="Demo">
                <div className={clsx(styles.demo)}>
                    <h1>Demo</h1>
                    <p>This is a live table of the <a target="_blank" href="https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45">Uniswap Swap Router</a> trades recorded from the Fiber transaction stream, with data about
                        when and where the transaction was seen in the network. <b>The stream will have a delay of 10 seconds, because to get the
                            extra metadata for the transaction, we need to wait for it to be indexed in the database.</b> The actual moment
                        the transaction was seen by Fiber is shown in the timestamp column.
                    </p>
                    <table className={clsx(styles.table)}>
                        <thead>
                            <tr>
                                <th>Hash</th>
                                <th>Timestamp (UTC)</th>
                                <th>Location</th>
                                <th>Action</th>
                                <th>From Host</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map(txEvent => {
                                let parts = txEvent.NodeID.split('-');

                                parts = parts.slice(-3)
                                let nodeID = parts.join('-')

                                let host = txEvent.From.split('@')[1]
                                return (
                                    <tr key={txEvent.Hash}>
                                        <td><a href={`https://etherscan.io/tx/${txEvent.Hash}`} target="_blank">{txEvent.Hash}</a></td>
                                        <td>{txEvent.Timestamp.split('+')[0]}</td>
                                        <td>{nodeID}</td>
                                        <td>{txEvent.Action}</td>
                                        <td>{host}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </Layout>
        );
    }
}