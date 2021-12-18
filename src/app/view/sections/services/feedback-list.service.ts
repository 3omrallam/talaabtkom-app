import { Injectable } from '@angular/core';
import { feedbackList } from '../../models/models/feedbackListModel';

@Injectable({
  providedIn: 'root'
})
export class FeedbackListService {
  feedbackList: feedbackList[] = [
    {
      id: 1,
      image:'imCC-Userfeedbackimg1',
      name: 'عمر جمال',
      date: '5/8/2020الأربعاء',
    
    },
    {
      id: 2,
      image:'imCC-Userfeedbackimg2',
      name: 'بسنت احمد',
      date: '6/11/2021الأربعاء',

    },
    {
      id: 3,
      image:'imCC-Userfeedbackimg3',
      name: 'محمد ابراهيم',
      date: '8/5/2019الأربعاء',
    },
  ]

  constructor() { }
}
