import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

declare const $: any;
const md: any = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};

@Component({
    selector: 'app-fixedplugin',
    templateUrl: './fixedplugin.component.html',
    styleUrls: ['./fixedplugin.component.css']
})

export class FixedpluginComponent implements OnInit {
    public validEmail:boolean = false;
    mail = {
        mensaje: "",
        mensaje2: "",
        mensaje3: "",
        destinatario: ""
    }


    constructor(private service: ServicesService) { }

    onChange(newValue) {
        const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }else {
          this.validEmail = false;
        }
    
      }
    enviarMailContacto() {

        this.mail.destinatario = 'testasiva@gmail.com';
        this.mail.mensaje = 'De:';
        console.log(this.mail);
          this.service.sendEmail(this.mail).subscribe(val=>{
    
          }, error =>{
            console.log(error);
          });
          this.mail.mensaje='';
          this.mail.mensaje2='';
          this.mail.mensaje3='';
    
    }

    ngOnInit() {
        // fixed plugin
        const $sidebar = $('.sidebar');
        const $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        const $full_page = $('.full-page');
        //
        const $sidebar_responsive = $('body > .navbar-collapse');
        const window_width = $(window).width();

        const fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }

        }


    }

}