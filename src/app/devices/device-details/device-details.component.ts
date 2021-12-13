import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Device } from "src/app/models/devices.model";
import { DeviceState } from "src/app/store/device/device.state";

@Component({
  selector: "app-device-details",
  templateUrl: "./device-details.component.html",
  styleUrls: ["./device-details.component.scss"],
})
export class DeviceDetailsComponent implements OnInit {
  @Select(DeviceState.getCurrentDevice) currentDevice$!: Observable<Device>;
  @Select(DeviceState.getRelatedDevices) relatedDevice$!: Observable<Device[]>;

  constructor() {}

  ngOnInit(): void {}
}
