import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-init-in-constructor',
  imports: [],
  templateUrl: './init-in-constructor.html',
  styleUrl: './init-in-constructor.css',
})
export class InitInConstructor {
  monInputSignal = input<string>();

  constructor() {
    console.log('Constructor (valeur de inputSignal) : ', this.monInputSignal());
    // Note : Si `monInputSignal` est required, il y aura une erreur : `monInputSignal` is a required `input` and does not have a value in this context
  }

  ngOnInit() {
    console.log('ngOnInit (valeur de inputSignal) : ', this.monInputSignal());
  }
}
