import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableDeepLinkGuard } from './auth.gurad';
import { AuthService } from './auth.service';


/** modules  */
@NgModule({
    imports: [CommonModule],
    providers: [
        AuthService,
        DisableDeepLinkGuard,
    ],
})
/** AuthModule */
export class AuthModule {}