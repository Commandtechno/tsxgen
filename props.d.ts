import { NodeFactory } from "typescript";
import { ArgsMap } from "./args";

export type Props = {
  [Method in keyof NodeFactory as Method]: {
    [Arg in ArgsMap[Method] as Arg[0]]?: Parameters<
      NodeFactory[Method]
    >[Arg[1]];
  };
};