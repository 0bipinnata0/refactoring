import { Plays } from "./plays";

export interface Invoce {
  customer: string;
  performance: Performance[];
}

interface Performance {
  playId: keyof Plays & string;
  audience: number;
}
const invoices: Invoce[] = [
  {
    customer: "BigCo",
    performance: [
      {
        playId: "hamlet",
        audience: 55,
      },
      {
        playId: "as-like",
        audience: 35,
      },
      {
        playId: "othello",
        audience: 40,
      },
    ],
  },
];

export default invoices;
