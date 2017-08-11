import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeroFormComponent } from "./hero-form.component";

// 系统模块
const SysModule = [
    BrowserModule,
    FormsModule
]
// 自定义视图模块、根模块
const MyModule = [
    AppComponent,
    HeroFormComponent
]

/**
    imports - 本模块声明的组件模板需要的类所在的其它模块。
    declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    exports - declarations 的子集，可用于其它模块的组件模板。
    providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置
 */
@NgModule({
    imports: [SysModule],
    declarations: [MyModule],
    bootstrap: [AppComponent]
})
export class AppModule { }