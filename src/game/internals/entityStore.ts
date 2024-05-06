import type { Movable, Renderable, Component } from "./components";
import { reverseObject } from "./utilities";

const componentOrder: Component[] = ["movable", "renderable"] as const;
type Entity = [Movable?, Renderable?];

const componentOrderMap: { [key in Component]: number } = reverseObject(
  componentOrder
) as { [key in Component]: number };
const componentMaxCount = componentOrder.length;

const entityStore: Entity[] = [];

export const createEntity = (): Entity => {
  const entity = Array(componentMaxCount) as Entity;
  // Entity's position in the entityStore array is its id.
  entityStore.push(entity);
  return entity;
};

export function* getComponentsOfType<T>(
  componentType: Component
): Generator<T> {
  const componentIndex = componentOrderMap[componentType];
  for (const entity of entityStore) {
    if (entity[componentIndex]) {
      yield entity[componentIndex] as T;
    }
  }
}

export function* getEntitiesWithComponent(
  componentType: Component
): Generator<{ id: number; entity: Entity }> {
  const componentIndex = componentOrderMap[componentType];
  for (let i = 0; i < entityStore.length; i++) {
    const entity = entityStore[i];
    if (entity[componentIndex]) {
      yield { id: i, entity };
    }
  }
}
