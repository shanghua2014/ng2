import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{myhero.name}}</h1>
        <h2>哈哈哈哈: {{myNmae}}</h2>
        <input #box
        (keyup.enter)="update(heros.length+2, box.value)"
        (bulr)="update(heros.length+2, box.value)">
        <input type="button" (click)="update(heros.length+2, box.value)" value="添加">
        <ul>
            <li *ngFor="let hero of heros;let $i=index">
                <p *ngIf="$i%2==0" style="color:blue">{{hero.id}}:{{hero.name}}</p>
                <p *ngIf="$i%2==1" style="color:red">{{hero.id}}:{{hero.name}}</p>
            </li>
        </ul>
    `
})

export class AppComponent  {

    // heros = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    heros = [
        new Hero(1, 'AA'),
        new Hero(2, 'BB'),
        new Hero(3, 'CC'),
        new Hero(4, 'DD'),
        new Hero(5, 'EE'),
    ]
    myhero = this.heros[0]
    name = 'Angular';
    myNmae = 'Shanghua';

    value = '';
    update (num:number, val: string) {
        this.heros.push(new Hero(num,val));
    }
}
