
export interface IPoint
{

  readonly x: number;

  readonly y: number;

  equals(other: IPoint): boolean;

  clone(): IPoint;

  translate(dx: number, dy: number): IPoint;

  move(point: IPoint): IPoint;

}
