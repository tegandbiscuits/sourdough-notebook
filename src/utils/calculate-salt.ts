const SALT_PERCENTAGE = 0.02;

function calculateSalt(flourGrams: number): number {
  const unroundedSaltGrams = flourGrams * SALT_PERCENTAGE;
  return Math.round(unroundedSaltGrams);
}

export default calculateSalt;
