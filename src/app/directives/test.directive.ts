import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';
import { adjustBlueprintForNewNode } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[appHighlight]'
})
export class TestDirective implements OnInit{


  @Input()
  light: string;

  baseColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.light);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.baseColor);
  }

  constructor(private ref: ElementRef) { 
    console.log(ref);
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
    console.log('highlight');
    console.log(this.baseColor);
  }

  ngOnInit(): void {
    this.baseColor = this.ref.nativeElement.style.backgroundColor
  }
}
