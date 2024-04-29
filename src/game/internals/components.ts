export type Component = "movable" | "renderable";

export interface Movable {
  x: number;
  y: number;
}

export interface Renderable {
  shape: string;
}
