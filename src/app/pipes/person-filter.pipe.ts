import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  transform(athletesList, athSearch: string, styleSearch: string) {
    if (athletesList.length == 0 || athSearch == '') {return athletesList};

    return athletesList.filter(participant => participant[styleSearch].toLowerCase().indexOf(athSearch) !==-1 );
  }

}
