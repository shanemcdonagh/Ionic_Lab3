import { Component,OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // Variable
  myStatus:string;
  
  constructor(private storage:Storage) {} // Instantiate Storage object

  ngOnInit()
  {
    // Promise - Then/catch block
    this.storage.get('status')
    .then((data)=>{
      this.myStatus = data; // Retrieve data from storage, update variable
    })
    .catch();
  }

}
