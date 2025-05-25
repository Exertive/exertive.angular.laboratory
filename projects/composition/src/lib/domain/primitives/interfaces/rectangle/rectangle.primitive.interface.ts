
import { IPoint } from '@composition/domain/primitives/interfaces/point/point.primitive.interface';
import { ISize } from '@composition/domain/primitives/interfaces/size/size.primitive.interface';

export interface IRectangle
{

  readonly x: number;

  readonly y: number;

  readonly width: number;

  readonly height: number;

  readonly position: IPoint;

  readonly size: ISize;

  equals(other: IRectangle): boolean;

  clone(): IRectangle;

  move(position: IPoint): IRectangle;

  resize(width: number, height: number): IRectangle;

  project(position: IPoint, width: number, height: number): IRectangle;

}
