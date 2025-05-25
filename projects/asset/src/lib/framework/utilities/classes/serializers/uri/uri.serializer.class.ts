
import { Injectable } from '@angular/core';

import { DefaultUrlSerializer } from '@angular/router';
import { UrlSerializer } from '@angular/router';
import { UrlTree } from '@angular/router';

type Replacer = (substring: string, ...args: any[]) => string;

// The Service Definition

@Injectable({ providedIn: 'root' })
export class UriSerializer implements UrlSerializer
{

  private get serializer(): UrlSerializer
  {
    return this._serializer;
  }

  private static readonly _Recognizer: RegExp =
    new RegExp('%' + [ '40', '3A', '24', '2C', '3B', '20', '3D', '3F','2F' ].join('|'), 'gi');

  private static readonly _Replacements: { [key: string]: string } =
    {
      '40' : '@',
      '3A' : ':',
      '24' : '$',
      '2C' : ',',
      '3B' : ';',
      '20' : '+',
      '3D' : '=',
      '3F' : '?',
      '2F' : '/'
    };

  private static readonly _Replacer: Replacer = (substring: string, ..._args: any[]): string =>
    {
      return UriSerializer._Replacements[substring];
    }

  private readonly _serializer: UrlSerializer;

  public constructor()
  {
    this._serializer = new DefaultUrlSerializer();
  }

  public parse(uri: any): UrlTree
  {
    return this.serializer.parse(uri);
  }

  public serialize(tree: UrlTree): string
  {
    const uri: string = this.serializer.serialize(tree);
    return uri.replace(UriSerializer._Recognizer, UriSerializer._Replacer);
  }

}
