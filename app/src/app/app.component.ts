import { Component, OnInit } from '@angular/core';

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
    template: 'Here we are in the test'
})
export class TestComponent {
}
@Component({
    selector: 'app-test',
    template: 'The time is: {{time}}'
})
export class TimeComponent implements OnInit {

    time: string;

    async ngOnInit(): Promise<void> {
        const response = await fetch('/api/GetTime');
        this.time = await response.json();
    }

}
