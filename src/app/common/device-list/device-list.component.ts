import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Device } from "src/app/models/devices.model";
import { SetCurrentDevices } from "src/app/store/device/device.actions";

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"],
})
export class DeviceListComponent implements OnInit {
  @Input() devices: Device[] = [];

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  deviceDetail(device: Device) {
    this.store.dispatch(new SetCurrentDevices(device));
    this.router.navigate(["devices/details"]);
  }
}
