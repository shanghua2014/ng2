import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EventComponent } from './event.component'
import { LoopBlockComponent } from './loop-back.component'
import { KeyupComponent } from './keyup.components'

// 自定义组件
const LoadModule = [
    AppComponent,
    EventComponent,
    LoopBlockComponent,
    KeyupComponent
]

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ LoadModule ],
    bootstrap:    [ LoadModule ],
    
})
export class AppModule { }