import { agent } from './veramo/setup.js'

async function createIdentifier() {
  const identifier = await agent.didManagerCreate({ alias: 'default' })
  console.log(`New identifier created`)
  console.log(JSON.stringify(identifier, null, 2))
}

export default createIdentifier;
