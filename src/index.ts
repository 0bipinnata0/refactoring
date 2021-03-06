import { Plays } from "../plays";
import { Invoce } from "./../invoices";
import invoices from "../invoices";
import players from "../plays";

export function statement(invoice: Invoce, plays: Plays) {
  let totalAmount = 0;
  let volumeCredits = 0;

  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performance) {
    volumeCredits += volumeCreditsFor(perf);
    // print line for this order
    result += ` ${queryFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

function volumeCreditsFor(aPerformance: Invoce["performance"][number]) {
  let result = Math.max(aPerformance.audience - 30, 0);
  if (queryFor(aPerformance).type === "comedy")
    result += Math.floor(aPerformance.audience / 5);
  return result;
}

function queryFor(aPerformance: Invoce["performance"][number]) {
  return players[aPerformance.playId];
}

function amountFor(aPerformance: Invoce["performance"][number]) {
  let result = 0;
  switch (queryFor(aPerformance).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${queryFor(aPerformance).type}`);
  }

  return result;
}

console.info(statement(invoices[0], players));
