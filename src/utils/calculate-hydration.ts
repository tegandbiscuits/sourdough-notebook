const STARTER_WATER_PORTION = 3;

function calculateHydration(flourGrams: number, waterGrams: number, starterGrams: number): number {
  const starterWaterGrams = starterGrams / STARTER_WATER_PORTION;
  const unroundedHydration = (waterGrams + starterWaterGrams) / flourGrams;
  return Math.round(unroundedHydration * 100);
}

export default calculateHydration;
