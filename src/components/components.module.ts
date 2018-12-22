import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [ListComponent],
	imports: [BrowserModule],
	exports: [ListComponent]
})
export class ComponentsModule {}
