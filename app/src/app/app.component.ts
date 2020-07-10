import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'app-test',
  template: 'Here we are in the test',
  styleUrls: ['./app.component.scss']
})
export class TestComponent {
}
