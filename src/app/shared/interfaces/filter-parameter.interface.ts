import { HttpParams } from '@angular/common/http';

export interface FilterParameter {
  params: HttpParams;
  toString: () => string;
}
