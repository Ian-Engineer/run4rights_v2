const ZONE_LABELS: Record<string, string> = {
  "America/Denver": "MT",
  "America/Chicago": "CT",
  "America/New_York": "ET",
  "America/Los_Angeles": "PT",
};

export function formatTime(
  time: string,          // "HH:mm:ss"
  timezone: string
): string {
  const [hStr, mStr] = time.split(":");

  const h24 = Number(hStr);
  const minute = mStr.padStart(2, "0");

  const ampm = h24 >= 12 ? "PM" : "AM";
  const hour12 = h24 % 12;   // gives 0–11 (your desired 0 instead of 12)

  const zoneLabel = ZONE_LABELS[timezone] ?? timezone;

  return `${hour12}:${minute} ${ampm} ${zoneLabel}`;
}
