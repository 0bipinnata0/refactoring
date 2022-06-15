export interface Plays {
  hamlet: PlaysType;
  "as-like": PlaysType;
  othello: PlaysType;
}

interface PlaysType {
  name: string;
  type: "tragedy" | "comedy";
}

const players: Plays = {
  hamlet: {
    name: "Hamlet",
    type: "tragedy",
  },
  "as-like": {
    name: "As You Like It",
    type: "comedy",
  },
  othello: {
    name: "Othello",
    type: "tragedy",
  },
};

export default players;
