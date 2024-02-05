import { EventEmitter, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from './models/job.model';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');
  job: Job[] = []
  jobAdded = new EventEmitter<Job>();

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  addJob(job: Job) {
    //this will be used in a button to submit modal form data
    this.job.push(job);
    this.jobAdded.emit(job);

  }

  getJobs() {
    //this should return the form data from the modal
    return this.job;
  }
  

  open() {
    this.display.next('open');
  }

  close() {
    this.job = [];
    this.display.next('close');
  }
}
