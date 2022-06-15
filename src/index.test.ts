import { statement } from "./index";
import invoices from "../invoices";
import players from "../plays";

test("adds 1 + 2 to equal 3", () => {
  const str = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
  const result = statement(invoices[0], players);
  expect(result).toEqual(str);
  console.info(result);
});
