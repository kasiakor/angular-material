import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
    <mat-icon>face</mat-icon>
      Click me!
    </button>
    <mat-checkbox>Check me!</mat-checkbox>

    <div class="wrapper">
      <div class="div1">
        <mat-form-field>
          <mat-label>Different locale</mat-label>
          <input matInput [matDatepicker]="dp">
          <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
          <mat-datepicker #dp></mat-datepicker>
        </mat-form-field>
      </div>
      <div class="div2">
        <button mat-button (click)="french()">Dynamically switch to French</button>
        <button mat-button (click)="japanese()">Dynamically switch to Japanese</button>
        <button mat-button (click)="dutch()">Dynamically switch to Dutch</button>
        <button mat-button (click)="spanish()">Dynamically switch to Spanish</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor(private dateAdapter: DateAdapter<Date>) {}

  ngOnInit(): void {
  }

  french() {
    this.dateAdapter.setLocale('fr');
  }

  japanese() {
    this.dateAdapter.setLocale('ja');
  }

  dutch() {
    this.dateAdapter.setLocale('nl');
  }

  spanish() {
    this.dateAdapter.setLocale('es');
  }

}
