import {Component, OnDestroy, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {Modalable} from '../modal/modalable';
import {InputDirective} from '../../directives/input.directive';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';

declare const $;

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit, OnDestroy {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    // @ViewChild(InputDirective)
    // inputName: InputDirective;

    @ViewChild('inputSalary', {static: true,read: InputDirective})
    inputName: InputDirective;//ElementRef

    @ViewChildren(InputDirective)
    inputs;

    constructor(private employeeService: EmployeeService,
                private modalRef: ModalRefService) {
    }

    ngOnInit() {
        this.modalRef.onShow.subscribe(() => {
            console.log(this.inputName);
            this.inputName.focus();
        });
    }

    ngAfterViewInit() {
        console.log(this.inputs);
    }

    addEmployee() {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
        this.modalRef.hide({employee: copy, submitted: true});
    }

    ngOnDestroy(): void {
        console.log('employee new modal destruído');
    }

    // fechou(event) {
    //     console.log(event);
    //     this.onHide.emit(event);
    // }
    //
    // mostrou(event) {
    //     console.log(event);
    // }
}
