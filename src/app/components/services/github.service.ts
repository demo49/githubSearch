import{ Injectable} from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';




@Injectable()
    export class GithubService{
        private username:string;
        private client_id = 'b723647c968d761c52fd';
        private client_secret ='cdbb08b604cedf8f8b1f390c2a8b64197156d432';

        constructor(private _http: Http){
            console.log('it works');
            this.username = 'demo49';
        }

        getUser(){
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
        }
        getRepos(){
            return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
        }
        updateUser(username:string){
            this.username = username;
        }
    }
