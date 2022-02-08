import { Injectable } from '@angular/core';
import { ReservationList } from 'src/app/core/models/userReservationListModel';
@Injectable({
  providedIn: 'root'
})
export class ReservationsListService {
  reservationsList: ReservationList[] = [
    {
      id: '#T65048471',
      image: 'imCC-Resturantimg3 ',
      title: 'مطعم المخابز',
      description: `2x وجبة شاورمة 2x وجبة حوواشي`,
      date: '10/08/2021',
      process: 'تحت التنفيذ',
      bgStyle: 'cCC-text-opacity-lightblue-20',
      textStyle: 'cCC-text-lightyellow',
      icon: 'iCC-Clockblue',
      border:'uCC-Border-lightyellow'
    },
    {
      id: '#T25025489',
      image: 'imCC-Resturantimg5 ',
      title: 'مطعم طايه',
      description: `2x وجبة فراخ 4x وجيه كومبو`,
      date: '8/07/2021',
      process: 'مكتمل',
      bgStyle: 'cCC-opacity-green-20',
      textStyle: 'cCC-text-lightgreen',
      icon: '',
      border: 'uCC-Border-green'

    },
    {
      id: '#T15045810',
      image: 'imCC-Resturantimg4 ',
      title: 'مطعم برجر كينج',
      description: `1x برجر دجاج 2x برجر لحم 5x وجبه`,
      date: '22/2/2021',
      process: 'ملغي',
      bgStyle: 'cCC-opacity-grey-20',
      textStyle: 'cCC-text-support2',
      icon: '',
      border: 'uCC-Border-supprt2'

    },


  ]
  constructor() { }
}


