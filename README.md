# sample-client
Structure
* `src` folder has the code for client and making requests.
* `client.ts` has the working full node url from my apotos project in lava gateway. Though you can also use your own.
* `concurrent-requests.ts` has the code to make n concurrent getAccountResources() requests.
* `sequential-requests.ts` has the code to make n sequential getAccountResources() requests.
* Count of requests has been set as default to 100.

Execution
* Clone the repository.
* Install the dependencies  .  
   `yarn install`
* Run the code to make 100 concurrent requests.
  `yarn start-concurrent`
* Run the code to make 100 sequential requests.
  `yarn start-sequential`
* You can provide your own count of requests by supplying the count as argument to yarn command.
  `yarn start-concurrent 500` or `yarn start-sequential 500`

