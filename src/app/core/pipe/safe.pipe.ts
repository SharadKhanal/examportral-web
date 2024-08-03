import {Pipe, PipeTransform, Sanitizer} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer) {
  }
  transform(value: any, args?: any): any {
    if (value && this.isContainsHtmlTags(value)) {
      // dynamic css can be append on following way as per requirement
      // const style = ` style = "${'font-family'}: ${'Preeti'}; ${'font-size'}: ${'19px'}; ${'margin'}: ${'0'}; ${'padding'}: ${'0'};"`;
      const customClass = ` class = "${'nepaliFont'}"`;
      const indexPosition = value.indexOf('>');
      const valueWithFont = [value.slice(0, indexPosition), customClass, value.slice(indexPosition)].join('');
      return this.sanitizer.bypassSecurityTrustHtml(valueWithFont);
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }

  isContainsHtmlTags(str:any) {
    return /<\/?[^>]*>/.test(str);
  }

}
