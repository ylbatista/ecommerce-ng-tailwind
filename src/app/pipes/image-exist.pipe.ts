import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageExist'
})

export class imageExistPipe implements PipeTransform {
    
    transform(value: any, ...args: any): any {
        
        if( !value || value === 'undefined' || null )
        
        return '../../assets/not-found-image.png';
    }

}