import { Component, input, Input, signal } from '@angular/core';
import { ICustomerComment } from '../customer-comment-list';

@Component({
  selector: 'app-customer-comment',
  standalone: true,
  imports: [],
  templateUrl: './customer-comment.component.html',
  styleUrl: './customer-comment.component.scss'
})
export class CustomerCommentComponent {

  customerComment!: ICustomerComment;
  stars = signal < Array<Number>>([]);

  @Input({required: true}) set comment (val: ICustomerComment) {
    if (val) {
      this.customerComment = val;
      this.stars().length = val.stars;
    }
  }
  // comment = input.required<ICustomerComment>();
  // stars=computed(() => {
  //   Array(this.comment().stars);
  // })
}
