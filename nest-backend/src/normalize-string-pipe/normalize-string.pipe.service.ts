import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NormalizeStringPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    if (typeof value ===  'string') {
      console.log(value, metadata);
      return value.toLowerCase();
    }
    return value;
  }
}
