# A byte estimate, not a scan

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

8 bytes per field name plus the value size. One unsigned buyrambytes for the shortfall. No table is scanned.

The course is [EDUCATION.md](./EDUCATION.md). `setrampayer` / `setlastpayer` are a different function, in `wax-atomicassets-v2-action-previews`. This file does not move a payer.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/ram.ts` | The pure rules |
| `src/ram.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Queries and unsigned transactions

`executed` is false. This repo did not call any host. One use case includes an unsigned action. It is not broadcast.
