import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getNetworks() {
    // longform
    const observable = this._http.get('/api/networks');
    return observable;
  }

  getNetwork(id) {
    return this._http.get('/api/networks/' + id);
  }

  createNetwork(newNetwork) {
    return this._http.post('/api/networks', newNetwork);
  }

  updateNetwork(id, editedNetwork) {
    return this._http.put('/api/networks/' + id, editedNetwork);
  }

  deleteNetwork(id) {
    return this._http.delete('/api/networks/' + id);
  }
}