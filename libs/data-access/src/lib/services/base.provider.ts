import { HttpClient } from '@angular/common/http';

export abstract class BaseProvider {
  constructor(protected httpClient: HttpClient) {}
}
