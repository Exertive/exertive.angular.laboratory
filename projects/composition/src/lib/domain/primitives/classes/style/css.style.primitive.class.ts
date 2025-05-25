

import { ICssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';

export class CssStyle implements ICssStyle
{

  [key: string]: string | ICssStyle;

}

