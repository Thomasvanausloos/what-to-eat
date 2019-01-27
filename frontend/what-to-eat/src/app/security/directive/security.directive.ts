import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSecurity]'
})
export class SecurityDirective implements OnInit {

  @Input('appSecurity') featureIsActive: boolean;
  isVisible = false;

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) { }

  ngOnInit(): void {
    if (this.featureIsActive && !this.isVisible) {
      this.isVisible = true;
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.isVisible = false;
      this.viewContainerRef.clear();
    }
  }
}
