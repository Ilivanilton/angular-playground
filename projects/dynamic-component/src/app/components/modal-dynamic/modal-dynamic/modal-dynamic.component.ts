import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Injector, OnDestroy, OnInit, Output, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import {ModalContentDirective} from '../modal-content.directive';
import {ModalRefService} from '../modal-ref.service';
import {ReplaySubject} from 'rxjs';

declare const $;

@Component({
    selector: 'modal-dynamic',
    template: `
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <ng-template modalContent></ng-template>
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class ModalDynamicComponent implements OnInit, OnDestroy {

    onHide: ReplaySubject<any> = new ReplaySubject(1);
    onShow: ReplaySubject<any> = new ReplaySubject(1);

    @ViewChild(ModalContentDirective,{static: true})
    modalContent: ModalContentDirective;
    modalRef: ModalRefService;

    showEventData = null;
    hideEventData = null;

    contextModal;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private element: ElementRef,
                private injector: Injector) {
    }

    ngOnInit() {


    }

    mount(modalImplementedComponent, context = {}): ModalRefService { //modal especifico
      console.log(this.modalContent);

        this.contextModal = context;
        const componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(modalImplementedComponent);
        const viewContainerRef = this.modalContent.viewContainerRef;
        viewContainerRef.createComponent(componentFactory, null, this.makeLocalInjector());
        return this.modalRef;
    }

    private makeLocalInjector() {
        return Injector.create({
            providers: [
                {provide: ModalRefService, useValue: this.makeModalRef()}
            ],
            parent: this.injector
        });
    }

    private makeModalRef() {
        this.modalRef = new ModalRefService();
        this.modalRef.instance = this;
        this.modalRef.context = this.contextModal;
        return this.modalRef;
    }

    hide(eventData = null) {
        this.hideEventData = eventData;
        $(this.divModal).modal('hide');
    }

    show(eventData = null) {
        this.registerEvents();
        this.showEventData = eventData;
        $(this.divModal).modal('show');
    }

    dispose() {
        $(this.divModal).modal('dispose');
    }

    private registerEvents() {
        $(this.divModal).on('hidden.bs.modal', (e) => {
            //console.log('escondido', e);
            this.onHide.next({
                event: e,
                data: this.hideEventData
            });
        });

        $(this.divModal).on('shown.bs.modal', (e) => {
            //console.log('mostrado', e);
            this.onShow.next({
                event: e,
                data: this.showEventData
            });
        });
    }

    private get divModal(): HTMLElement {
        const nativeElement: HTMLElement = this.element.nativeElement; //modal
        return nativeElement.firstChild as HTMLElement;
    }

    ngOnDestroy(): void {

        console.log('modal dynamic component destruído');
    }
}
