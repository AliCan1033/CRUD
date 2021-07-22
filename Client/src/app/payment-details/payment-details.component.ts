import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetail){//kişinin ismine tıkladığında forma geri alır
    this.service.formData=Object.assign({},selectedRecord); //formda güncelleme yaparken aynı zamanda listede de anında değişim olur. Anında değişim olmaması için  Object.assign ekledik
  }

  onDelete(id:number){
    if(confirm("are you sure to delete this record")){
    this.service.deletePaymentDetail(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted suceess",'Payment Detail Register')
      },
      err => {console.log(err)}
    )
  }
}
}
