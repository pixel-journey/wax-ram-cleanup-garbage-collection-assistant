import { describe, expect, it } from "vitest";
import { SAMPLE_FIELDS, estimateRow } from "./ram";

describe("row bytes", () => {
  it("charges 8 bytes per name plus the value", () => {
    const row = estimateRow(SAMPLE_FIELDS, 20);
    expect(row).toEqual({ ok: true, bytes: 32, shortfall: 12 });
    expect(estimateRow(SAMPLE_FIELDS, 32)).toMatchObject({ shortfall: 0 });
  });

  it("rejects a bad field name", () => {
    expect(estimateRow([{ name: "BAD", valueBytes: 1 }], 10).ok).toBe(false);
  });
});
