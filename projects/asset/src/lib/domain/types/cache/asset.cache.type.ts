
import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';

export type Cache<TAsset extends IAsset> = Record<string, TAsset>;
