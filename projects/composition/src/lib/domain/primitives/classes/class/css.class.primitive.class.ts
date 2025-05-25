

import { ICssClass } from '@composition/domain/primitives/interfaces/class/css.class.primitive.interface';

export class CssClass implements ICssClass
{

  [key: string]: string | string[];

}

