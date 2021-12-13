import { Device } from "src/app/models/devices.model";

export class SetAllDevices {
  static readonly type = "[Device] Set All Devices";
  constructor(public devices: Device[]) {}
}

export class SetSearchedDevices {
  static readonly type = "[Device] Set Searched Devices";
  constructor(public searchDevices: Device[]) {}
}

export class SetCurrentDevices {
  static readonly type = "[Device] Set Current Device";
  constructor(public currentDevice: Device) {}
}
