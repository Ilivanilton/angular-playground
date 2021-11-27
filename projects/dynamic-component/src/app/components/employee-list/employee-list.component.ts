import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';
import {EmployeeDetailModalComponent} from '../employee-detail-modal/employee-detail-modal.component';
import {ModalService} from '../modal-dynamic/modal.service';


@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employee: Employee;
    showMessageSuccess = false;
    employeeToDelete: Employee;
    employeeToDetail: Employee;
    data = '2018-05-05';
    isLoading = true;
    @ViewChild(EmployeeDetailModalComponent) //pegar uma referencia de um elemento
    employeeDetailModal: EmployeeDetailModalComponent;

    @ViewChild(EmployeeDeleteModalComponent) //pegar uma referencia de um elemento
    employeeDeleteModal: EmployeeDeleteModalComponent;

    constructor(public employeeService: EmployeeService, private modalService: ModalService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.isLoading = false;
        }, 5000);
    }

    openDetailModal(employee: Employee) {
        this.employeeToDetail = employee;
        this.employeeDetailModal.show();
    }

    openNewModal() {
        const modalRef = this.modalService.create(EmployeeNewModalComponent);
        // modalRef.instance.onHide
        //     .subscribe((data))
        modalRef.onHide.subscribe((event) => {
            console.log(event);
        });
        modalRef.show();
        //algo.events
        //algo.open();
    }

    openEditModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeEditModalComponent, {
                employee
            });
        modalRef.onHide.subscribe((event) => {
            console.log(event);
        });
        modalRef.show();
    }

    openDestroyModal(employee: Employee) {
        this.employeeToDelete = employee;
        this.employeeDeleteModal.show();
    }

    onNewEmployee(employee: Employee) {
        this.employee = employee;
        this.showMessageSuccess = true;
    }

    onEditEmployee(employee: Employee) {
        console.log(employee);
    }

    onDestroyEmployee(employee: Employee) {
        console.log(employee);
    }

    fechou($event) {
        console.log($event);
    }
}
