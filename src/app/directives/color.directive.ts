import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appColor]'
})

export class colorDirective implements OnInit {
    constructor (private elRef: ElementRef, private renderer: Renderer2) {}

    @HostBinding('style.backgroundColor') bcolor;
    ngOnInit () {
        this.renderer.setStyle(this.elRef.nativeElement, "color", "#541126");
        this.renderer.setStyle(this.elRef.nativeElement, "display", "inline-block");

    }

    @HostListener('mouseenter') mouseEnter(){
        this.bcolor = '#abc';
    }
    @HostListener('mouseleave') mouseLeave(){
        this.bcolor = 'transparent';
    }
}