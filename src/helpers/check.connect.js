'use strick';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECONDS = 5000;

// count connect
const countConnect = () => {
    const numConn = mongoose.connections.length;
    console.log(`Number of connections::${numConn}`);
};

// check over load
const checkOverload = () => {
    setInterval(() => {
        const numConn = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        console.log(`Active connections::${numConn}`);
        console.log(`Memory usage::${memoryUsage / 1024 / 1024} MB`);

        // example max number of connections based on number os cores
        const maxConn = numCores * 5;
        if (numConn > maxConn) {
            console.log(`Connection overload detected`);
            // notify.send(...)
        }
    }, _SECONDS); // monitor every _SECOND second
};

module.exports = {
    countConnect,
    checkOverload,
};
