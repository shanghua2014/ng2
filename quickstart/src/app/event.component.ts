// 绑定到用户输入事件

import { Component } from '@angular/core';

@Component({
    selector: 'my-btn',
    template:`
        // 绑定到用户输入事件<br/>
        <button (click)="onClickMe()">点我</button>
        {{clickMessage}}
        <br>
        <input type="text" (keyup)="onKey($event)" />
        {{keyupMessage}}
    `,
})
export class EventComponent {
    clickMessage = '';
    keyupMessage = '';
    onClickMe () {
        this.clickMessage = '哈哈哈，我变了！！'
    }
    onKey (event: KeyboardEvent) {
        console.log(event)
        this.keyupMessage += (<HTMLInputElement>event.target).value + ' | ';
    }
}