import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appBday'
})

export class BdayPipe implements PipeTransform{
    transform(value: any, byear: number){
        return value + ' has ' + byear + ' Birthday today! Congratulations!'
    }

}