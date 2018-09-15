import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../../service/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  onClick($event) {
    this.modalService.onCloseModal();
  }
}