// 按键事件过滤

import { Component } from '@angular/core';

// @Component({
//     selector: 'my-keyup',
//     template:`
//         // 按键事件过滤，请按回车键<br/>
//         <input type="text" #box (keyup.enter)="onEnter(box.value)">
//         <p>{{value}}</p>
//     `
// })

@Component({
    selector: 'my-keyup4',
    template:`
        // 失去焦点事件<br/>
        <input #box
            (keyup.enter)="update(box.value)"
            (blur)="update(box.value)">
        <p>{{value}}</p>
    `
})

export class KeyupComponent {
    value = '';
    onEnter (val: string) { this.value = val; }
    update (val: string) { this.value = val; }
}