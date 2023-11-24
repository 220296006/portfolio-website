import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  loading = false;

  constructor(private http: HttpClient) {}

  sendEmail() {
    const emailData = {
      name: String,
      email: String,
      subject: String,
      message: String
    };

    this.loading = true;

    this.http.post('http://localhost:3000/send-email', emailData)
      .subscribe({
        next: (response: any) => {
          console.log('Email sent successfully:', response);
        },
        error: (error: any) => {
          console.error('Error sending email:', error);
        }
      });
  }
}
