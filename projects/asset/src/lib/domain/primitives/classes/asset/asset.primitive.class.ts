
import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';
import { ISize } from '@composition/domain/primitives/interfaces/size/size.primitive.interface';

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';
import { AssetFormat } from '@asset/domain/types/format/asset.format.type';
import { AssetSubCategory } from '@asset/domain/types/subcategory/asset.subcategory.type';

export class Asset implements IAsset
{

  // Public Instance Properties

  // <summary>
  // Get the Unique String Key of the Asset.
  // <summary>
  public get key(): string
  {
    return this._key!;
  }

  // <summary>
  // Get the Category of the Asset.
  // <summary>
  public get category(): AssetCategory
  {
    return this._category!;
  }

  // <summary>
  // Get the SubCategory of the Asset.
  // <summary>
  public get subcategory(): AssetSubCategory
  {
    return this._subcategory!;
  }

  // <summary>
  // Get the MIME Format of the Asset.
  // <summary>
  public get format(): AssetFormat
  {
    return this._format!;
  }

  // <summary>
  // Get the URI of the Host of the Asset.
  // <summary>
  public get host(): string
  {
    return this._host!;
  }

  // <summary>
  // Get the Path of the Asset relative to the Host URI.
  // <summary>
  public get path(): string
  {
    return this._path!;
  }

  // <summary>
  // Get the Size of the Asset in pixels.
  // <summary>
  public get size(): ISize
  {
    return this._size!;
  }

  // <summary>
  // Get the Title of the Asset.
  // <summary>
  public get title(): string
  {
    return this._title!;
  }

  // <summary>
  // Get the Artist Name of the Asset.
  // <summary>
  public get artist(): string
  {
    return this._artist!;
  }

  // <summary>
  // Get the optional Original Medium of the Asset.
  // <summary>
  public get medium(): string | null
  {
    return this._medium || null;
  }

  // <summary>
  // Get the optional Original Dimensions of the Asset.
  // <summary>
  public get dimensions(): string | null
  {
    return this._dimensions || null;
  }

  // <summary>
  // Get the optional Description of the Asset.
  // <summary>
  public get description(): string | null
  {
    return this._description || null;
  }

  // Private Instance Fields

  private _key: string | undefined;

  private _category: AssetCategory | undefined;

  private _subcategory: AssetSubCategory | undefined;

  private _format: AssetFormat | undefined;

  private _host: string | undefined;

  private _path: string | undefined;

  private _size: ISize | undefined;

  private _title: string | undefined;

  private _artist: string | undefined;

  private _medium: string | null | undefined;

  private _dimensions: string | null | undefined;

  private _description: string | null | undefined;

  // Public Instance Constructor

  public constructor(input: string | object | null = null)
  {
    if (!(input === null))
    {
      input = (typeof input === 'string') ? JSON.parse(input) : input;
    }
    this.instantiate(input as object);
  }

  // Private Instance Methods

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private instantiate(input: any): void
  {
    this._key = input.key;
    this._category = input.category;
    this._subcategory = input.subcategory;
    this._format = input.format;
    this._host = input.host;
    this._path = input.path;
    this._size = input.size;
    this._title = input.title;
    this._artist = input.artist;
    this._medium = input.medium;
    this._dimensions = input.dimensions;
    this._description = input.description;
  }

}
