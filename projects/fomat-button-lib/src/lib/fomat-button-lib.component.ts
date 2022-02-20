import { Component, OnInit, Input,
         Renderer2, ElementRef,HostListener,
         ViewChild,AfterViewInit
        } from '@angular/core';

@Component({
  selector: 'ng-btn-1',
  template: `
    <button #divBtn>
      button
    </button>
  `,
  styles: [`
      button{
        padding: 15px 20px;
        margin: 10px;
        text-align: center;
        border: 2px solid transparent;
        font-weight: bold;
        box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.3);
        border-radius: 7px;
        transition: all 0.35s;
      }
    button:hover{
      box-shadow: 2px 2px 3px rgba(0,0,0,0.6), 0 0 4px 6px rgba(0,0,0,0.18);
      border: 2px solid #003;
    }
  `]
})
export class FomatButtonLibComponent implements OnInit,AfterViewInit {
  @ViewChild('divBtn',{ static: false }) divBtn!:ElementRef;

  constructor(private RD2: Renderer2, private EL: ElementRef) { }

  @Input() label:string = 'button';
  @Input() color:string = "#000";
  @Input() bgColor:string = "fff";
  @Input() font:string = "monospace,consolas";
  @Input() shadow:string = '1px 2px 3px rgba(0,0,0,0.5)';
  @Input() pd:string ='15px 20px';
  @Input() mg:string = '10px';
  @Input() fontSize:string ='14px';
  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.divBtn.nativeElement.innerHTML = this.label;
    this.divBtn.nativeElement.style.color = this.color;
    this.divBtn.nativeElement.style.backgroundColor = this.bgColor;
    this.divBtn.nativeElement.style.fontFamily = this.font;
    this.divBtn.nativeElement.style.boxShadow = this.shadow;
    this.divBtn.nativeElement.style.margin = this.mg;
    this.divBtn.nativeElement.style.padding = this.pd;
    this.divBtn.nativeElement.style.fontSize = this.fontSize;
  }

  @HostListener('mouseenter') inHover(){
    // this.divBtn.nativeElement.style.boxShadow = this.boxShadow;
    // this.divBtn.nativeElement.style.border = '2px solid #000';
  }
  @HostListener('mouseleave') outHover(){
    // this.divBtn.nativeElement.style.boxShadow = 'none';
    // this.divBtn.nativeElement.style.border = '2px solid transparent';
  }

}
