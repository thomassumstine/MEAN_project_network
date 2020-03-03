import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-network',
  templateUrl: './new-network.component.html',
  styleUrls: ['./new-network.component.css']
})
export class NewNetworkComponent implements OnInit {

  newNetwork = {
    name: '',
    description: '',
    notes: '',
    status: '',
    links: ''
  }

  errors: string[] = [];

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this._httpService.createNetwork(this.newNetwork)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          // this is only set up for the create controller method currently
          // see edit component to see easier way of doing it
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/']);
        }
      })
  }

  handleCancel() {
    this._router.navigate(['/']);
  }
}