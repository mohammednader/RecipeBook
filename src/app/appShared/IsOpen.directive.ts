import { Directive , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[IsOpenDDL]'
})

export class IsOpen
{

@HostBinding('aria-expanded') isOpen = false;

@HostListener("click") toggleOpen(){

  this.isOpen = !this.isOpen;

}

}
