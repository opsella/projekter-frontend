import {
  AfterViewInit,
  Component,
  ElementRef, input,
  InputSignal,
  OnInit,
  output,
  OutputEmitterRef,
  ViewChild
} from '@angular/core';
import SignaturePad from "signature_pad";

@Component({
  selector: 'app-signature',
  imports: [],
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.scss',
})
export class SignatureComponent implements OnInit {
  public drawComplete: OutputEmitterRef<string | undefined> = output<string | undefined>();
  public width: InputSignal<number> = input(500);
  public height: InputSignal<number> = input(200);

  @ViewChild("canvas", { static: true })
  protected canvas: ElementRef;
  protected signaturePad: SignaturePad;

  public ngOnInit(): void {
    this.signaturePad = new SignaturePad(this.canvas.nativeElement);
    this.signaturePad.on();
    this.signaturePad.addEventListener('endStroke', (event: Event) => {
      this.drawComplete.emit(this.signaturePad.toDataURL());
    });
  }

  public clear(): void {
    this.signaturePad.clear();
  }
}
