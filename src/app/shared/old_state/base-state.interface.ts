export interface IBaseState<Entity, Error> {
  entities: Entity[];
  isLoading: boolean;
  error: Error;
}
