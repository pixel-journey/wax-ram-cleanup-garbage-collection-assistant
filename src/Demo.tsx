"use client";

import { SAMPLE_FIELDS, estimateRow } from "./ram";

export function Demo() {
  const row = estimateRow(SAMPLE_FIELDS, 20);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A byte count, not a table scan</h1>
      <p className="lede">Each field name costs 8 bytes plus the value size you pass in. No wallet table was read. Buying RAM is a separate unsigned action on the query page.</p>
      <ul className="plain">
        {SAMPLE_FIELDS.map((field) => (
          <li key={field.name}>
            {field.name}: 8 + {field.valueBytes} bytes
          </li>
        ))}
      </ul>
      {row.ok ? (
        <p>
          {row.bytes} bytes against a budget of 20. Shortfall {row.shortfall}.
        </p>
      ) : (
        <p>{row.reason}</p>
      )}
    </main>
  );
}
