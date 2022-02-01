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
      time: '60:00:00',
      bgStyle: 'cCC-opacity-green-20',
      textStyle: 'cCC-text-blue',
      icon: 'iCC-Clockblue'
    },
    {
      id: '#T25025489',
      image: 'imCC-Resturantimg5 ',
      title: 'مطعم طايه',
      description: `2x وجبة فراخ 4x وجيه كومبو`,
      date: '8/07/2021',
      process: 'مكتمل',
      time: '',
      bgStyle: 'cCC-opacity-green-20',
      textStyle: 'cCC-text-lightgreen',
      icon: ''

    },
    {
      id: '#T15045810',
      image: 'imCC-Resturantimg4 ',
      title: 'مطعم برجر كينج',
      description: `1x برجر دجاج 2x برجر لحم 5x وجبه`,
      date: '22/2/2021',
      process: 'ملغي',
      time: '',
      bgStyle: 'cCC-opacity-grey-20',
      textStyle: 'cCC-text-support2',
      icon: ''

    },


  ]
  constructor() { }
}


