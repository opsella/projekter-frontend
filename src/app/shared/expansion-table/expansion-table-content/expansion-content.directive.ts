import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[appExpansionContent]",
    standalone: false
})
export class ExpansionContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
