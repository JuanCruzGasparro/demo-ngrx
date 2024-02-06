import { HttpParams } from '@angular/common/http';
import { FilterParameter } from '@shared/interfaces/filter-parameter.interface';

export class TodoFilterParameter implements FilterParameter {
  params: HttpParams = new HttpParams();
  description!: string;
  isCompleted!: boolean;

  toString(): string {
    if (this.description)
      this.params = this.params.set('description', this.description);

    if (this.isCompleted)
      this.params = this.params.set('isCompleted', this.isCompleted);

    return this.params.toString();
  }
}
