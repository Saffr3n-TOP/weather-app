export default interface WeatherDataNormalized {
  location: LocationNormalized;
  current: CurrentNormalized;
}

interface LocationNormalized {
  country: string;
  city: string;
}

interface CurrentNormalized {
  condition: ConditionNormalized;
  temperature: Temperature;
}

interface ConditionNormalized {
  icon: string;
  description: string;
}

interface Temperature {
  actualC: number;
  actualF: number;
  feelsLikeC: number;
  feelsLikeF: number;
}
