import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeHttpService } from '../../app/services/fake-http-service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First implements OnInit {
  router = inject(Router);
  httpService = inject(FakeHttpService);

  ngOnInit() {
    // Delay de 3s, puis traitement next()/complete()
    this.httpService.getWithDelay().subscribe({
      next: (value) => {
        console.log('On subscribe (success) : ', value);
        this.router.navigateByUrl('/');
      },
      complete: () => console.log('completion'),
    });
  }
}
