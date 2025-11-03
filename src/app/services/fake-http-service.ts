import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeHttpService {
  getWithDelay() {
    return of('Emission').pipe(delay(3000));
  }
}
