
export const IconWeights: string[] =
  [
    'thin',
    'light',
    'normal',
    'heavy',
    'thick'
  ];

export type IconWeight = typeof IconWeights[number];

export const ThinIconWeight: IconWeight = IconWeights[0];
export const LightIconWeight: IconWeight = IconWeights[1];
export const NormalIconWeight: IconWeight = IconWeights[2];
export const HeavyIconWeight: IconWeight = IconWeights[3];
export const ThickIconWeight: IconWeight = IconWeights[4];

export const IconStrokeWidths: Record<IconWeight, number> =
  {
      [ThinIconWeight]: 1.5,
      [LightIconWeight]: 3.0,
      [NormalIconWeight]: 4.5,
      [HeavyIconWeight]: 6.0,
      [ThickIconWeight]: 7.5,
  };
