import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Device } from "src/app/models/devices.model";
import {
  SetAllDevices,
  SetCurrentDevices,
  SetSearchedDevices,
} from "./device.actions";

export class DeviceStateModel {
  devices?: Device[];
  searchDevices?: Device[];
  currentDevice?: Device;
}

const defaults = {
  devices: [],
  searchDevices: [],
};

@State<DeviceStateModel>({
  name: "device",
  defaults,
})
@Injectable()
export class DeviceState {
  @Selector()
  static getAllDevices(state: DeviceStateModel): Device[] {
    return state.devices || [];
  }

  @Selector()
  static getSearchDevices(state: DeviceStateModel): Device[] {
    return state.searchDevices || [];
  }

  @Selector()
  static getCurrentDevice(state: DeviceStateModel) {
    return state.currentDevice;
  }

  @Selector()
  static getRelatedDevices(state: DeviceStateModel) {
    const deviceCategory = state.currentDevice?.category;
    const currrentDeviceId = state.currentDevice?.id;

    if (deviceCategory) {
      let devices = state.devices;
      return devices?.filter(
        (device) =>
          device.category === deviceCategory && device.id !== currrentDeviceId
      );
    }

    return [];
  }

  @Action(SetAllDevices)
  setAllDevices(
    { setState, getState }: StateContext<DeviceStateModel>,
    { devices }: SetAllDevices
  ) {
    setState({ ...getState(), devices });
  }

  @Action(SetSearchedDevices)
  setSearchedDevices(
    { setState, getState }: StateContext<DeviceStateModel>,
    { searchDevices }: SetSearchedDevices
  ) {
    setState({ ...getState(), searchDevices });
  }

  @Action(SetCurrentDevices)
  setCurrentDevices(
    { setState, getState }: StateContext<DeviceStateModel>,
    { currentDevice }: SetCurrentDevices
  ) {
    setState({ ...getState(), currentDevice });
  }
}
