
// <summary>
// Defines the contract for a CSS Class Primitive as used in Exertive Angular Libraries
// and Applications, where the CSS Class for a Component is a Dictionary containing
// potentially multiple class definition entries.
// </summary>

export interface ICssClass
{

  // <summary>
  // Get/Set the single or multiple CSS Class names for the string key provided.
  // </summary>
  [key: string]: string | string[];

}

export function getCssClass(cssClass: ICssClass, key: string): string | string[]
{

  return cssClass[key];

}



