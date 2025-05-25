
import { IPoint } from '@composition/domain/primitives/interfaces/point/point.primitive.interface';
import { IRectangle } from '@composition/domain/primitives/interfaces/rectangle/rectangle.primitive.interface';
import { ISize } from '@composition/domain/primitives/interfaces/size/size.primitive.interface';
import { Point } from '@composition/domain/primitives/classes/point/point.primitive.class';
import { Size } from '@composition/domain/primitives/classes/size/size.primitive.class';

export class Rectangle implements IRectangle
{

  // /Public Instance Properties

  public get x(): number
  {
    return this.position.x;
  }

  public get y(): number
  {
    return this.position.y;
  }

  public get width(): number
  {
    return this.size.width;
  }

  public get height(): number
  {
    return this.size.height;
  }

  public get position(): IPoint
  {
    return this._position;
  }

  public get size(): ISize
  {
    return this._size;
  }

  // Private Instance Fields

  private _position: IPoint;

  private _size: ISize;

  // Constructor

  public constructor(x: number, y: number, width: number, height: number)
  {
    this._position = new Point(x, y);
    this._size = new Size(width, height);
  }

  // Public Instance Methods

  public equals(other: IRectangle): boolean
  {
    return ((this.x === other.x) && (this.y === other.y) && (this.width === other.width) && (this.height == other.height));
  }

  public clone(): IRectangle
  {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }

  public move(position: IPoint): IRectangle
  {
    this._position = position;
    return this;
  }

  public resize(width: number, height: number): IRectangle
  {
    this._size = new Size(width, height);
    return this;
  }

  public project(position: IPoint, width: number, height: number): IRectangle
  {
    return this.move(position).resize(width, height);
  }

}
