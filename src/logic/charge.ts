import { hoursPassedSince } from "./time";

const PRICE_PER_HOUR = 1000

export const getChargeBetweenDates = (final: Date, since: Date): number => {
  const hours = hoursPassedSince(final, since)
  return hours * PRICE_PER_HOUR
}