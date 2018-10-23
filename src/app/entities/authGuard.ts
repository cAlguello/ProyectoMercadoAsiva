import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { ServicesService } from "../services.service";


@Injectable()
export class authGuard implements CanActivate{
    base_url: string;

    constructor(private router: Router, private service: ServicesService){}

    canActivate(){
        if(this.service.isAuthenticated()){
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }

}

