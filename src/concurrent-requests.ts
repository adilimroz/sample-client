import { client, fetchAccountResources } from "./client";

const address = '0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4';
const iterations = process.argv[2] ? parseInt(process.argv[2]) : 100;

async function concurrent() {
    let successCount = 0;
    let errorCount = 0;

    const promises = [];

    for (let i = 0; i < iterations; i++) {
        promises.push(fetchAccountResources(address));
    }

    const results = await Promise.all(promises.map(p => p.catch(e => e)));

    for (const result of results) {
        if (result === 'success') {
            successCount++;
        } else {
            errorCount++;
        }
    }

    console.log("Data for Concurrent requests....")
    console.log(`\nTotal Successful responses: ${successCount}`);
    console.log(`Total Error responses: ${errorCount}`);
}

concurrent();