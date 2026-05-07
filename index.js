export const PETAL = "Flow-Gold";
export const INVARIANT = "FLOW_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "flow-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Flow-Gold" &&
    input.petal === "Flow-Gold" &&
    input.ring === 1 &&
    input.invariant === "FLOW_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "flow-gold:STATIONARY" : "flow-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
