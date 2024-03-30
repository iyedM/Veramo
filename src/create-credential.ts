import { agent } from './veramo/setup.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  // Assuming you have a function to get the DID identifier
  const identifier = await agent.didManagerGetByAlias({ alias: 'default' });

          const verifiableCredential = await agent.createVerifiableCredential({
            credential: {
              issuer: { id: identifier.did },
              credentialSubject: {
                id: "did:web:example.com",
                you: "ala",
                Driver: "Rzouga",
                weight: "400kg",
                date: "24-03-2024",
              },
            },
            proofFormat: "jwt",
          });

          console.log(`New credential created`);
          console.log(JSON.stringify(verifiableCredential, null, 2));

         
}

main().catch(console.log);

export default main();