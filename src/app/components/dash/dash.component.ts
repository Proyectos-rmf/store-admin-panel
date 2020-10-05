import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  miniCardData = [{
    icon: 'shop_two',
    title: 'Total Sales',
    value: 9465,
    color: 'primary',
    isIncrease: true,
    isCurrency: true,
    duration: 'since last month',
    percentValue: .5383 * (-1)
  },
  {
    icon: 'local_atm',
    title: 'Average Order Valaue',
    value: 465,
    color: 'accent',
    isIncrease: false,
    isCurrency: false,
    duration: 'since last month',
    percentValue: .2544
  },
  {
    icon: 'shopping_cart',
    title: 'Total Orders',
    value: 243,
    color: 'warn',
    isIncrease: true,
    isCurrency: false,
    duration: 'since last month',
    percentValue: .4565
  },
  {
    icon: 'person',
    title: 'Returning Customers',
    value: 35,
    color: 'primary',
    isIncrease: false,
    isCurrency: false,
    duration: 'since last month',
    percentValue: .8361 * (-1)
  }];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

  }
}
