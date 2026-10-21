/**
 * Byte estimate for fields the caller already listed.
 * A name costs 8 bytes. This does not scan a chain table.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export type Field = { name: string; valueBytes: number };

export type RowEstimate = { ok: false; reason: string } | { ok: true; bytes: number; shortfall: number };

export function estimateRow(fields: readonly Field[], budget: number): RowEstimate {
  if (!Number.isInteger(budget) || budget < 0 || budget > 1_000_000) {
    return { ok: false, reason: "budget must be an integer from 0 to 1000000" };
  }
  let bytes = 0;
  for (const field of fields) {
    if (!NAME.test(field.name)) return { ok: false, reason: `${field.name} is not an Antelope name` };
    if (!Number.isInteger(field.valueBytes) || field.valueBytes < 0 || field.valueBytes > 65_535) {
      return { ok: false, reason: `${field.name} valueBytes must be an integer from 0 to 65535` };
    }
    bytes += 8 + field.valueBytes;
  }
  return { ok: true, bytes, shortfall: Math.max(0, bytes - budget) };
}

export const SAMPLE_FIELDS: Field[] = [
  { name: "owner", valueBytes: 8 },
  { name: "id", valueBytes: 8 },
];
