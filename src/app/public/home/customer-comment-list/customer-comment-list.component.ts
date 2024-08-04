import { Component } from '@angular/core';
import { ICustomerComment } from './customer-comment-list';
import { CustomerCommentComponent } from "./customer-comment/customer-comment.component";

@Component({
  selector: 'app-customer-comment-list',
  standalone: true,
  imports: [CustomerCommentComponent],
  templateUrl: './customer-comment-list.component.html',
  styleUrl: './customer-comment-list.component.scss'
})
export class CustomerCommentListComponent {

  readonly comments: ICustomerComment[] = [
    {
      name: 'Leslie Alexander',
      position: 'Model',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jacob Jones',
      position: 'Co-Founder',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jenny Wilson',
      position: 'Fashion Designer',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    }
  ];
}
