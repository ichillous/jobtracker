import { Component, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { Job } from '../shared/models/job.model';
import { ModalService } from '../shared/modal.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SlicePipe , NgFor} from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlicePipe,
    NgbPaginationModule,
    NgFor,
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {
  // Complete Crud operations then create login for use, link users to jobs etc
  @Output() job: Job[] = [];
  pageSize = 10;
  page = 1;
  totalRows = 5;
  jobForm: FormGroup;
  jobOfferBool: FormControl = new FormControl(false, Validators.required);

  displayedColumns: string[] = [
    'position',
    'jobTitle',
    'company',
    'location',
    'description',
    'numberOfInterviews',
    'jobOfferBool',
    'applicationDate',
    'jobOfferDate',
  ];
  dataSource = JobComponent.ELEMENT_DATA;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private http: HttpClient
  ) {
    this.jobForm = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      dateApplied: ['', Validators.required],
      numberOfInterviews: ['', Validators.required],
      applicaitonStatus: ['', Validators.required],
      jobNotes: ['', Validators.required],
      hireDate: ['', Validators.required],
      jobOfferBool: this.jobOfferBool,
    });
  }

  ngOnInit(): void {
    this.getJobsFromBackend();
  }


  static ELEMENT_DATA: Job[] = [
    {
      position: 1,
      jobTitle: 'Software Engineer',
      company: 'ABC Company',
      location: 'New York',
      description: 'Lorem ipsum dolor sit amet',
      numberOfInterviews: 3,
      jobOfferBool: true,
      applicationDate: new Date('2022-01-01'),
      jobOfferDate: new Date('2022-01-01'),
    },
  ];
 
  // CRUD operations
  public getJobsFromBackend() {
    this.http
      .get<Job[]>('http://localhost:3000/all-jobs') 
      .subscribe(
        (data) => {
          data.forEach((job, index) => {
            job.position = index + 1;
          });
          this.job = data;
          this.dataSource = data;
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
  }

  updateJob() {
    if (this.jobForm.valid) {
    }
  }

  deleteJob() {
  }

}

export interface JobArray {
  position: number;
  jobTitle: string;
  company: string;
  location: string;
  description: string;
  numberOfInterviews: number;
  jobOfferBool: boolean;
  applicationDate: Date;
  hireDate: Date;
}
