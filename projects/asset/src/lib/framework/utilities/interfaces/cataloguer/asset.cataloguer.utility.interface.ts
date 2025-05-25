
import { HttpClient } from '@angular/common/http';

import { Observable}  from 'rxjs';

import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

export interface IAssetCataloguer
{

  readonly httpClient: HttpClient;

  catalogue$(): Observable<ICatalogue>;

}
