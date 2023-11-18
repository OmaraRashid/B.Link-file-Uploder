import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.gurad';


/** modules  */
@NgModule({
    imports: [CommonModule],
    providers: [
        AuthService,
    ],
})
/** AuthModule */
export class AuthModule {

}