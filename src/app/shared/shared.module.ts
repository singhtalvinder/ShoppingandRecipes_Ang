import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        // must export it explicitly to use in other places.
        DropdownDirective
    ]

})

export class SharedModule {}