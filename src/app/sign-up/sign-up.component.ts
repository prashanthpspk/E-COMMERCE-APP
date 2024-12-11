import { Component } from '@angular/core';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private register:RegisterService){}

  onSubmit(value:Object){
      // console.log(value)
      this.register.submit(value);
  }
}
