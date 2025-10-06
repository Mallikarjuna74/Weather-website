export const weatherConditions: Record<
  number,
  { icon: string; label: string }
> = {
  0: { icon: "/Weather-website/images/icon-sunny.webp", label: "Clear sky" },
  1: { icon: "/Weather-website/images/icon-sunny.webp", label: "Mainly clear" },
  2: { icon: "/Weather-website/images/icon-partly-cloudy.webp", label: "Partly cloudy" },
  3: { icon: "/Weather-website/images/icon-overcast.webp", label: "Overcast" },
  45: { icon: "/Weather-website/images/icon-fog.webp", label: "Fog" },
  48: { icon: "/Weather-website/images/icon-fog.webp", label: "Depositing rime fog" },
  51: { icon: "/Weather-website/images/icon-rain.webp", label: "Light drizzle" },
  61: { icon: "/Weather-website/images/icon-rain.webp", label: "Rain" },
  71: { icon: "/Weather-website/images/icon-snow.webp", label: "Snow" },
  95: { icon: "/Weather-website/images/icon-storm.webp", label: "Thunderstorm" },
};

export function getWeatherCondition(code: number | undefined) {
  if (!code) return weatherConditions[0];
  return weatherConditions[code] || weatherConditions[0];
}
