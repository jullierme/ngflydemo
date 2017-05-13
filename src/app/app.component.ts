import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex:number;

  title = 'app works!';

  selecionouAba2(tab) {
    console.log(tab.heading);
  }

  selecionouAba(tab) {
    console.log('Evento principal ' + tab.heading);
  }

  activeTab(index) {
    this.selectedIndex = index;
  }
}
