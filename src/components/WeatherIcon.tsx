import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const modules = import.meta.glob<IconComponent>('../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
});

const icons: Record<string, IconComponent> = {};

for (const [path, component] of Object.entries(modules)) {
  const name = path.split('/').pop()!.replace('.svg', '');
  icons[name] = component;
}

interface WeatherIconProps {
  code: number;
  isDay: boolean | number;
}

function WeatherIcon({ code, isDay }: WeatherIconProps) {
  const Icon = icons[`${isDay ? 'day' : 'night'}${code}`];
  return Icon ? <Icon /> : null;
}

export default WeatherIcon;
