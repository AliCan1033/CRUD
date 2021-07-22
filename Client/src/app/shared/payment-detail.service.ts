import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://localhost:5001/api/PaymentDetail'
  formData: PaymentDetail = new PaymentDetail();
  payments: PaymentDetail[];

  postPaymentDetail(){
    return this.http.post(this.baseUrl, this.formData)
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.payments = res as PaymentDetail[])
  }
}
