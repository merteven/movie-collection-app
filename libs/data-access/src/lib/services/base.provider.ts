import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseProvider {
  constructor(protected httpClient: HttpClient) {}
}
