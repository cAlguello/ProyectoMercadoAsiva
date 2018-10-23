import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    user1 = { id: '1', username: 'Empresa A', password: 'test', is_active: '0' };
    user2 = { id: '2', username: 'Empresa B', password: 'test', is_active: '1' };
    localUser = {
        username: '',
        password: ''
    }
    constructor(private element: ElementRef, private router: Router, private service: ServicesService) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    irPerfil() {

        // this.dataUser= this.service.getUser(this.localUser.username);
        //console.log(this.dataUser);
        /* if (this.localUser.username == this.user1.username && this.localUser.password == this.user1.password) {
             sessionStorage.setItem('id', this.user1.id);
             if (this.user1.is_active == '0') {
                 this.router.navigateByUrl('/forms/wizard');
             }
             else
                 this.router.navigateByUrl('dashboard');
         }
         if (this.localUser.username == this.user2.username && this.localUser.password == this.user2.password) {
             sessionStorage.setItem('id', this.user1.id);
             if (this.user2.is_active == '0') {
                 this.router.navigateByUrl('/forms/wizard');
             }
             else
                 this.router.navigateByUrl('dashboard');
         }*/
        this.service.getUser(this.localUser.username).subscribe(val => {
            if (val != null) {
                if (this.localUser.password == val.password) {
                    console.log(val);
                    sessionStorage.setItem('id', val.usuario);
                    /*if (val.password == 'admin') {
                      this.router.navigateByUrl("admin");
                    }*/
                    // else {
                    if (val.usuario == 'admin') {
                        this.router.navigateByUrl('/charts');

                    }
                    else if (val.is_active == '0') {
                        this.router.navigateByUrl('/forms/wizard');
                    }
                    else {
                        this.router.navigateByUrl("dashboard");
                    }

                    //}
                }
            }
            else {
                console.log("error");
            }

        });
    }

    ngOnInit() {
        this.service.getUser('Empresa 1').subscribe(val => {
            console.log(val);
        })
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    }
}
