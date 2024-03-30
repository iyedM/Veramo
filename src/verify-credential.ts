import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      "credentialSubject": {
        "you": "Iyed",
        "Driver": "Rzouga",
        "weight": "400kg",
        "date": "24-03-2024",
        "id": "did:web:example.com"
      },
      "issuer": {
        "id": "did:ethr:goerli:0x02a356ccd48ba574792c6158a43a07ed88572439d46798477df146e045fe18517e"
      },
      "type": [
        "VerifiableCredential"
      ],
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "issuanceDate": "2024-03-30T05:50:02.000Z",
      "proof": {
        "type": "JwtProof2020",
        "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6Ikl5ZWQiLCJEcml2ZXIiOiJSem91Z2EiLCJ3ZWlnaHQiOiI0MDBrZyIsImRhdGUiOiIyNC0wMy0yMDI0In19LCJzdWIiOiJkaWQ6d2ViOmV4YW1wbGUuY29tIiwibmJmIjoxNzExNzc3ODAyLCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwMmEzNTZjY2Q0OGJhNTc0NzkyYzYxNThhNDNhMDdlZDg4NTcyNDM5ZDQ2Nzk4NDc3ZGYxNDZlMDQ1ZmUxODUxN2UifQ.jlgfPva1GJj2eizkI2vF3T-_sAXlws5djVGAmpzJpSlOmfQ8TDlpn4RTKEsZ2WMCrkgj4mmp1PfyZm11P6kTtg"
      }
    }
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)