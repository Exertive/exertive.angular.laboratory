

export interface ICssStyle
{

  [key: string]: string | ICssStyle;

}

export function getCssStyle(cssStyle: ICssStyle, key: string): ICssStyle
{

  return (cssStyle as { [key: string]: ICssStyle })[key];

}

