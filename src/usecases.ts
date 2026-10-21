import { CHAIN_ORIGIN, active, tableRows } from "./api";
import { SAMPLE_FIELDS, estimateRow } from "./ram";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const row = estimateRow(SAMPLE_FIELDS, 20);
if (!row.ok) throw new Error(row.reason);
const estimated = row;

export const USE_CASES: UseCase[] = [
  {
    title: "userres is the quota table, not this estimate",
    detail: "eosio userres holds CPU, NET, and RAM quota for an account. estimateRow does not read it. The request is not sent.",
    request: tableRows(CHAIN_ORIGIN, "eosio", "alice", "userres", 1),
    transaction: null,
  },
  {
    title: "Unsigned buyrambytes for the shortfall",
    detail: `The sample fields are ${estimated.bytes} bytes. Budget 20 leaves a shortfall of ${estimated.shortfall}. This action is not broadcast and no table was scanned.`,
    request: tableRows(CHAIN_ORIGIN, "eosio", "bob", "userres", 1),
    transaction: {
      note: "Not broadcast. bytes is the shortfall from the fixture, not a chain measurement.",
      actions: [
        active("alice", {
          account: "eosio",
          name: "buyrambytes",
          data: { payer: "alice", receiver: "alice", bytes: estimated.shortfall },
        }),
      ],
    },
  },
];

export function assertUseCases(): void {
  if (estimated.shortfall !== 12) throw new Error(String(estimated.shortfall));
}
