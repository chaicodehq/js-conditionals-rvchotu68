/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here

  const GO = "GO";
  const SLOW_DOWN = "SLOW DOWN";
  const STOP = "STOP";
  const STOP_AND_PROCEED_WITH_CAUTION = "STOP AND PROCEED WITH CAUTION";
  const OTHER = "INVALID SIGNAL";

  color = color.toLocaleLowerCase();

  if (color === "green") return GO;
  else if (color == "yellow") return SLOW_DOWN;
  else if (color === "red") return STOP;
  else if (color === "flashing red") return STOP_AND_PROCEED_WITH_CAUTION;
  else return OTHER;
}
