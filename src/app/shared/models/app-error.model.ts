import { HttpStatusCode } from '@angular/common/http';

export class AppError {
  status!: HttpStatusCode;
  message!: string;
  error: any;
}
