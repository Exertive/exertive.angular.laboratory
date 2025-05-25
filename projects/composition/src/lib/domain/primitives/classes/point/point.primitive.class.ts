
import { IPoint } from '@composition/domain/primitives/interfaces/point/point.primitive.interface';

export class Point implements IPoint
{

  public get x(): number
  {
    return this._x;
  }

  public get y(): number
  {
    return this._y;
  }

  // Private Instance Fields

  private _x: number;

  private _y: number;

  // Constructor

  public constructor(x: number, y: number)
  {
    this._x = x;
    this._y = y;
  }

  // Public Instance Methods

  public equals(other: IPoint): boolean
  {
    return ((this.x === other.x) && (this.y === other.y));
  }

  public clone(): IPoint
  {
    return new Point(this.x, this.y);
  }

  public translate(dx: number, dy: number): IPoint
  {
    const x: number = this.x + dx;
    const y: number = this.y + dy;
    return new Point(x, y);
  }

  public move(point: IPoint): IPoint
  {
    this._x = point.x;
    this._y = point.y;
    return this;
  }


}
