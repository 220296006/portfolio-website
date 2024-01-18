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
      name: 'John Doe', // Replace with the actual name from your form
      email: 'john.doe@example.com', // Replace with the actual email from your form
      subject: 'Contact Form Submission', // Replace with the actual subject from your form
      message: 'This is a test message.' // Replace with the actual message from your form
    };

    this.loading = true;

    this.http.post('http://localhost:3000/send-email', emailData)
      .subscribe({
        next: (response: any) => {
          console.log('Email sent successfully:', response);
        },
        error: (error: any) => {
          console.error('Error sending email:', error);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
