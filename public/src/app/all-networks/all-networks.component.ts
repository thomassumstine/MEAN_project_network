import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-networks',
  templateUrl: './all-networks.component.html',
  styleUrls: ['./all-networks.component.css']
})
export class AllNetworksComponent implements OnInit {

  networks: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getNetworks()
      .subscribe((data: any) => {
        this.networks = data.networks;
      });
  }

  editNetwork(networkId: string) {
    this._router.navigate(['/edit/', networkId]);
  }

  deleteNetwork(networkId: string) {
    this._httpService.deleteNetwork(networkId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.networks.length; i++) {
          if (this.networks[i]._id === networkId) {
            return this.networks.splice(i, 1);
          }
        }
      });
  }
}