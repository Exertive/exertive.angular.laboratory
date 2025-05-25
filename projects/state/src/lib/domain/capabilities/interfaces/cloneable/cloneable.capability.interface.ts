
export interface ICloneable<TEntity>
{

  clone(overrides?: Record<string, unknown> | null): TEntity;

}
