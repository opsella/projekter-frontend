import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appExpansionContent]"
})
export class ExpansionContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
