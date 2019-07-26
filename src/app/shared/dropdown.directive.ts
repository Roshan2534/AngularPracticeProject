import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') dropdown=false;
  constructor() { }
@HostListener('click') opentoggle(){
  this.dropdown = !this.dropdown;
}
}
