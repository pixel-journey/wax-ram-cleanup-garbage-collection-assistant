# Education — 8 bytes per name, plus the value

> **Rung:** `npm test`. The sample fields are `owner` (8) and `id` (8).  
> **The test is the rule.** No table is scanned.

```ts
estimateRow([{ name: "owner", valueBytes: 8 }, { name: "id", valueBytes: 8 }], 20)
// { ok: true, bytes: 32, shortfall: 12 }
```

Each field is `8 + valueBytes`. Budget 32 has shortfall 0. `BAD` is not an account name, so the row is `{ ok: false }`.

This is not `setrampayer`. Moving `ram_payer` is `wax-atomicassets-v2-action-previews`. That lab does not count bytes. An unsigned `buyrambytes` in `usecases.ts` is not broadcast.

```bash
npm test
```
