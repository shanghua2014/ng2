// 从一个模板引用变量中获得用户输入

import { Component } from '@angular/core';

@Component({
    selector: 'my-loop-block',
    template: `
        //从一个模板引用变量中获得用户输入<br>
        <input type="text" #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
    `,
})


export class LoopBlockComponent {
    values = '';
    value = '';

    onKey(val: string) {
        this.values += val + ' | ';
    }

}