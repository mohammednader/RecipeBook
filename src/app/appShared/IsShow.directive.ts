import { Directive , HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[IsShowDDL]'
})

export class IsShow
{

  constructor(private _el: ElementRef) {

  }
@HostBinding('class.show') isShow = "";

@HostListener("click") toggleOpen(){

  if(this.isShow == "")
  {
    this.isShow = "show";
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');

  }
  else
  {
    this.isShow = "";
  }

}

}
