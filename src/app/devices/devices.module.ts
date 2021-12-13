import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { DeviceListComponent } from "../common/device-list/device-list.component";
import { DeviceDetailsComponent } from "./device-details/device-details.component";
import { DevicesRoutingModule } from "./devices-routing.module";
import { DevicesComponent } from "./devices.component";

@NgModule({
  declarations: [DevicesComponent, DeviceDetailsComponent, DeviceListComponent],
  imports: [CommonModule, DevicesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DevicesModule {}
