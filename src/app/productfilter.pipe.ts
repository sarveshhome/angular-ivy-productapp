import {PipeTransform,Pipe} from '@angular/core'
import { IProduct } from './IProduct';

@Pipe({
  name:'productfilter'
})
export class Productfilter implements PipeTransform{
    transform(value:IProduct,args:string): unknown
    {

        if(!args){
          return value;
        }
        return value.filter(
          item => item.productName.toLowerCase().indexOf(args.toLocaleLowerCase())>1);
        )      

    }
}