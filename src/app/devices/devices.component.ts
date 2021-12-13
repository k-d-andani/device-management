import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { Device } from "../models/devices.model";

import { AppHttpService } from "../services/app-http.service";
import { SetAllDevices } from "../store/device/device.actions";
import { DeviceState } from "../store/device/device.state";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent implements OnInit, OnDestroy {
  @Select(DeviceState.getAllDevices) devices$!: Observable<Device[]>;
  @Select(DeviceState.getSearchDevices) searchedDevices$!: Observable<Device[]>;

  devices: Device[] = [];
  searchedDevices: Device[] = [];

  deviceSubscription!: Subscription;
  searchDeviceSubscription!: Subscription;

  constructor(
    private appHttpService: AppHttpService,
    private store: Store,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllDevices();

    this.deviceSubscription = this.devices$.subscribe((devices) => {
      this.devices = devices;
      this.cd.markForCheck();
    });
    this.searchDeviceSubscription = this.searchedDevices$.subscribe(
      (searchedDevices) => {
        this.searchedDevices = searchedDevices;
        this.cd.markForCheck();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.deviceSubscription) {
      this.deviceSubscription.unsubscribe();
    }
    if (this.searchDeviceSubscription) {
      this.searchDeviceSubscription.unsubscribe();
    }
  }

  getAllDevices() {
    this.appHttpService
      .getAllDevice()
      .subscribe((devices) => this.store.dispatch(new SetAllDevices(devices)));
  }
}
