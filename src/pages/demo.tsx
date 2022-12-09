import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

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
    constructor(props) {
        super(props);
        this.socket = socket;
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
            if (!this.state.transactions.some(tx => tx.Hash === txEvent.Hash)) {
                this.setState({ transactions: [txEvent, ...this.state.transactions.slice(0, 9)] });
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
                    <p>This is a live table of Uniswap trades recorded from the Fiber transaction stream, with data about
                        when and where the transaction was seen in the network.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Hash</th>
                                <th>Timestamp</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map(txEvent => {
                                let parts = txEvent.NodeID.split('-');

                                parts = parts.slice(-3)
                                let nodeID = parts.join('-')
                                return (
                                    <tr key={txEvent.Hash}>
                                        <td><a href={`https://etherscan.io/tx/${txEvent.Hash}`} target="_blank">{txEvent.Hash}</a></td>
                                        <td>{txEvent.Timestamp}</td>
                                        <td>{nodeID}</td>
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