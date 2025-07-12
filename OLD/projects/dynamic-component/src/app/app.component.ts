import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { AdService } from './ad-banner/ad.service';
import { AdItem } from './ad-banner/ad-item';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { TestDynamicComponentComponent } from './components/test-dynamic-component/test-dynamic-component.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ModalService } from './components/modal-dynamic/modal.service';
import { TestModalDynamicComponent } from './components/test-modal-dynamic/test-modal-dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];

  @ViewChild('employeeList', {read: ViewContainerRef})
  viewContainer: ViewContainerRef;
  @ViewChild('template')
  template: TemplateRef<any>;

  @ViewChild(GetViewContainerDirective)
  getViewContainer: GetViewContainerDirective;

  components = [TestDynamicComponentComponent, EmployeeListComponent,];
  indexComponents = -1;

  constructor(
    private adService: AdService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.ads = this.adService.getAds();

    setInterval(() => {
      this.getViewContainer.viewContainerRef.clear();
      this.indexComponents++;
      if (this.indexComponents === this.components.length) {
          this.indexComponents = 0;
      }
      const componentFactory = this.componentFactoryResolver
          .resolveComponentFactory(this.components[this.indexComponents]);
      this.getViewContainer.viewContainerRef.createComponent(componentFactory);
    }, 4000);

    const modalRef = this.modalService.create(TestModalDynamicComponent);
    modalRef.show();
  }

}

