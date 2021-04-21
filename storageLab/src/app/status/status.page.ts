import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'; // Import Storage
import {NavController} from '@ionic/angular'; // Import: To navigate pages

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  // Variable
  myStatus:string = "undefined";

  constructor(private storage: Storage,private navCtrl:NavController) { } // Instantiate storage & nav object

  // Executed once on initialization
  ngOnInit() {
    this.storage.get('status')
    .then((data)=>{
      this.myStatus=data; // Retrieve value from storage 'status', updates variable
    })
    .catch();
  }

  // Function: Update the status
  updateStatus()
  {
    // Saves variable to storage
    this.storage.set('status',this.myStatus)
    .then(()=>{
      this.navCtrl.navigateBack('/home'); // Routes back to home page
    })
    .catch();
  }
}
