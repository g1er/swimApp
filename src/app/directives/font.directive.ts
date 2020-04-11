import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective implements OnInit{
  @Input() hoverFont: string = '24px';
  @Input() defaultFont: string = '18px';
  @HostBinding('style.fontSize') fSize;

  constructor(private fontRef: ElementRef, private fontRenderer: Renderer2) {}

  ngOnInit() {
    this.fontRenderer.setStyle(this.fontRef.nativeElement, "fontFamily", "Century Gothic");
    this.fSize = this.defaultFont;
  }
  @HostListener('mouseenter') mouseEnter(){
    this.fSize = this.hoverFont;
  }
  @HostListener('mouseleave') mouseLeave(){
    this.fSize = this.defaultFont;
}

}
