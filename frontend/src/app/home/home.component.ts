import { Component } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalService } from '../shared/modal.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  constructor(
    private modalService: ModalService,
) {
}

open() {
  this.modalService.open();
  console.log('open');
}

}
