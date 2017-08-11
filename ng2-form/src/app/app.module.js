"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var hero_form_component_1 = require("./hero-form.component");
// 系统模块
var SysModule = [
    platform_browser_1.BrowserModule,
    forms_1.FormsModule
];
// 自定义视图模块、根模块
var MyModule = [
    app_component_1.AppComponent,
    hero_form_component_1.HeroFormComponent
];
/**
    imports - 本模块声明的组件模板需要的类所在的其它模块。
    declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    exports - declarations 的子集，可用于其它模块的组件模板。
    providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [SysModule],
        declarations: [MyModule],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map