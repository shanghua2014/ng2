import { Component } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector : 'hero-form',
    templateUrl : '/hero-form.component.html'
})

export class HeroFormComponent{
    powers = ['精明', '灵活', '炙热', '变幻'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.model); }
    newHero () {
        this.model = new Hero(42, '' , '');
        this.onSubmit();
    }

}