type Parse1<S extends string> = S extends `${infer F}${string}`
  ? F extends "+" | "-"
    ? F
    : ""
  : "";

type Parse3<S extends string> = S extends `${string}%` ? "%" : "";

type Parse2<S extends string> = S extends `${Parse1<S>}${infer R}${Parse3<S>}`
  ? R
  : "";

type PercentageParser<S extends string> = [Parse1<S>, Parse2<S>, Parse3<S>];

type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
