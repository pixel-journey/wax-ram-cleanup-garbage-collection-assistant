# Education — a byte estimate, not a scan

> **Rung:** `npm test` passes. Each field name costs 8 bytes plus the value size you pass. This does not call `get_table_rows` and it does not free RAM.  
> **The test is the rule.** Official RAM is billed by the node, not by this sum. [WAX accounts and resources](https://docs.wax.io/build/core-concepts/accounts). An Antelope name is `[a-z1-5.]{1,12}` with no leading, trailing, or doubled dot.

## Predict, then run

`SAMPLE_FIELDS` is `owner` (8 value bytes) and `id` (8 value bytes).

| Call | Locked result |
| --- | --- |
| `estimateRow(SAMPLE_FIELDS, 20)` | `{ bytes: 32, shortfall: 12 }` |
| `estimateRow(SAMPLE_FIELDS, 32)` | shortfall `0`. The exact budget is not a shortfall. |
| name `BAD` | not ok. Uppercase is not an Antelope name. |

`32` is `(8 + 8) + (8 + 8)`. The shortfall is `max(0, bytes - budget)`. A shortfall of 12 is not a transaction that buys RAM.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this estimate.
