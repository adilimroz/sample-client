import { client, fetchAccountResources } from "./client";

const address = '0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4';
const iterations = process.argv[2] ? parseInt(process.argv[2]) : 100;

async function sequential() {
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < iterations; i++) {
        const result = await fetchAccountResources(address);
        
        if (result === 'success') {
            successCount++;
        } else {
            errorCount++;
        }
    }

    console.log("Data for Sequential requests....")
    console.log(`\nTotal Successful responses: ${successCount}`);
    console.log(`Total Error responses: ${errorCount}`);
}

sequential();
