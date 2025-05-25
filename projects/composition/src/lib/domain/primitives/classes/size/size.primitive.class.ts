import { ISize } from '@composition/domain/primitives/interfaces/size/size.primitive.interface';

export class Size implements ISize
{

  public readonly width: number;

  public readonly height: number;

  public constructor(width: number, height: number)
  {
    this.width = width;
    this.height = height;
  }

}
