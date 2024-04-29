import type { Movable, Renderable, Component } from "./components";
import { reverseObject } from "./utilities";

const componentOrder: Component[] = ["movable", "renderable"] as const;
const componentOrderMap: { [key in Component]: number } = reverseObject(
  componentOrder
) as { [key in Component]: number };
type Entity = [number, Movable?, Renderable?];
type K = ["A", "B"];

let idCounter = 0;
const entityStore: Entity[] = [];

export const createEntity = (): Entity => {
  return [idCounter++, undefined, undefined];
};
