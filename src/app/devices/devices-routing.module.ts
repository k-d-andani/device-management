import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceDetailsComponent } from "./device-details/device-details.component";
import { DevicesComponent } from "./devices.component";

const routes: Routes = [
  { path: "", component: DevicesComponent },
  { path: "details", component: DeviceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesRoutingModule {}
