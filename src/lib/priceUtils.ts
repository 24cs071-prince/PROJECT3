/**
 * Size-based price adjustment utility.
 *
 * Pricing philosophy:
 *  - XS / S / M  → base price (no markup)
 *  - L            → +3%
 *  - XL           → +7%
 *  - XXL / 2XL   → +11%
 *  - XXXL / 3XL  → +15%
 *  - Numeric sizes (jeans/pants waists) use a $1.50 per inch step above 30
 */

/** Map of uppercase size label → price multiplier */
export const SIZE_MULTIPLIERS: Record<string, number> = {
  XXS:   0.97,
  XS:    0.97,
  S:     1.00,
  M:     1.00,
  L:     1.03,
  XL:    1.07,
  XXL:   1.11,
  "2XL": 1.11,
  XXXL:  1.15,
  "3XL": 1.15,
  "4XL": 1.18,
};

/**
 * Returns the price multiplier for the given size string.
 * Falls back to 1.0 (no change) for unknown sizes.
 */
export function getSizeMultiplier(size: string): number {
  const key = size.trim().toUpperCase();

  // Standard size lookup
  if (SIZE_MULTIPLIERS[key] !== undefined) {
    return SIZE_MULTIPLIERS[key];
  }

  // Numeric size (e.g. jeans waist: 28, 30, 32, 34…)
  const num = parseInt(key, 10);
  if (!isNaN(num)) {
    const base = 30; // 30" waist = base price
    const stepsAboveBase = Math.max(0, (num - base) / 2); // every 2" = 1 step
    return 1 + stepsAboveBase * 0.03; // +3% per step
  }

  return 1.0;
}

/**
 * Returns the price adjusted for the given size.
 * Rounds to 2 decimal places.
 */
export function getSizeAdjustedPrice(basePrice: number, size: string): number {
  const multiplier = getSizeMultiplier(size);
  return Math.round(basePrice * multiplier * 100) / 100;
}

/**
 * Formats a price for display without forcing trailing zeroes.
 */
export function formatPrice(value: number): string {
  return value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

/**
 * Returns the discount amount between an original price and the current price.
 */
export function getMarkdownAmount(originalPrice: number, currentPrice: number): number {
  return Math.max(0, Math.round((originalPrice - currentPrice) * 100) / 100);
}

/**
 * Returns the markdown percentage between an original price and the current price.
 */
export function getMarkdownPercent(originalPrice: number, currentPrice: number): number {
  if (originalPrice <= 0 || currentPrice >= originalPrice) {
    return 0;
  }

  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Returns the absolute price difference (positive = markup, negative = discount).
 * e.g. getSizePriceDiff(100, "XL") → 7
 */
export function getSizePriceDiff(basePrice: number, size: string): number {
  return Math.round((getSizeAdjustedPrice(basePrice, size) - basePrice) * 100) / 100;
}

/**
 * Returns a human-readable badge string:
 *  "+$7" for markup,  "-$3" for discount,  "" for base price (no badge needed)
 */
export function getSizePriceBadge(basePrice: number, size: string): string {
  const diff = getSizePriceDiff(basePrice, size);
  if (diff === 0) return "";
  return diff > 0 ? `+$${diff.toFixed(0)}` : `-$${Math.abs(diff).toFixed(0)}`;
}

/**
 * Checks whether a size carries a price markup (useful for showing tooltips).
 */
export function hasSizeMarkup(size: string): boolean {
  return getSizeMultiplier(size) !== 1.0;
}
