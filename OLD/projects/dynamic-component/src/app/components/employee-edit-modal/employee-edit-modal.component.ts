import {Component, OnInit} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';

@Component({
    selector: 'employee-edit-modal',
    templateUrl: './employee-edit-modal.component.html',
    styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

    employee: Employee;

    constructor(private modalRef: ModalRefService) {
        this.employee = this.modalRef.context['employee'];
    }

    ngOnInit() {

    }

    editEmployee() {
        const copy = Object.assign({}, this.employee);
        this.modalRef.hide({employee: copy, submitted: true});
    }
}
