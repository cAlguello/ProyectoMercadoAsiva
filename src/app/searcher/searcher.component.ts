import { Component, OnInit } from '@angular/core';
import { TableData } from './../md/md-table/md-table.component';
import { CommonModule } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  public tableData1: TableData;

  constructor() {
    this.tableData1 = {
      headerRow: [ 'Name', 'Country', 'City', 'Salary'],
      dataRows: [
          ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
   };
   }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Name', 'Country', 'City', 'Salary'],
      dataRows: [
          ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
   };
  }
  ngAfterViewInit() {
    const breakCards = true;
    if (breakCards === true) {
        // We break the cards headers if there is too much stress on them :-)
        $('[data-header-animation="true"]').each(function(){
            const $fix_button = $(this);
            const $card = $(this).parent('.card');
            $card.find('.fix-broken-card').click(function(){
                const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                $header.removeClass('hinge').addClass('fadeInDown');

                $card.attr('data-count', 0);

                setTimeout(function(){
                    $header.removeClass('fadeInDown animate');
                }, 480);
            });

            $card.mouseenter(function(){
                const $this = $(this);
                const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                $this.attr('data-count', hover_count);
                if (hover_count >= 20) {
                    $(this).children('.card-header, .card-image').addClass('hinge animated');
                }
            });
        });
    }
}

}
