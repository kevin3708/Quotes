import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("click") onClicks(){
    this.highlight("yellow")
  }
  private highlight(action:string){
    this.elem.nativeElement.backgroundColor=action;
  }

}
