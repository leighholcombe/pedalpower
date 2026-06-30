export type ColorSwatch = {
  name: string;
  value: string;
  class: string;
};

export interface ParamProps {
  searchParams: {
    color: string | null;
    type: string | null;
    brand: string | null;
  }
}

export interface BrandProps {
  tagParam: string;
  selected: boolean;
}

export interface ColorProps {
  colorParam: string;
  selected: boolean;
}

export interface TypeProps {
  colorParam: string;
  selected: boolean;
}

export interface Pedal {
  id: number;
  name: string;
  image: string;
  description: string;
  color: string;
  brand: string;
  type: Array<string>;
}