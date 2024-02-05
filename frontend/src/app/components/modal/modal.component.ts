import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../shared/modal.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { Job } from '../../shared/models/job.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobComponent } from '../../job/job.component';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, AsyncPipe, ReactiveFormsModule, FormsModule, JobComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  @Input() jobs: Job[] = [];
  display$: Observable<'open' | 'close'> = new Observable<'open' | 'close'>();
  job: Job[] = []
  jobForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
      private modalService: ModalService,
      private http: HttpClient
  ) {

    //todo : Add validation logic in separate file
    this.jobForm = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      numberOfInterviews: ['', Validators.required],
      jobOfferBool: ['', Validators.required],
      description: ['', Validators.required],
      applicationDate: ['', Validators.required],      
      jobOfferDate: ['', Validators.required], 
    });
  }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }


  addJob() {
    const job: Job = {
      jobTitle: this.jobForm.value.jobTitle,
      company: this.jobForm.value.company,
      location: this.jobForm.value.location,
      description: this.jobForm.value.description,
      numberOfInterviews: this.jobForm.value.numberOfInterviews,
      jobOfferBool: this.jobForm.value.jobOfferBool,
      applicationDate: this.jobForm.value.applicationDate,
      jobOfferDate: this.jobForm.value.jobOfferDate,
    };

    this.http.post('http://localhost:3000/add-job', job) // Assuming the endpoint is '/create'
      .subscribe(() => {
        this.modalService.addJob(job);
      }, (error) => {
        console.error('Error adding job:', error);
      });
  }

  // opens the modal
  open() {
    this.modalService.open();
    console.log('open');
    this.modalService.jobAdded.subscribe(job => {
      console.log(job); 
    });
  }
  
  // closes the modal
  close() {
    this.modalService.close();
    console.log('close');

  }
}
