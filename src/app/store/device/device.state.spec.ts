import { TestBed } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { DeviceState } from "./device.state";

describe("Device actions", () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DeviceState])],
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  describe("All devices", () => {
    it("it should select all devices", () => {
      const devices = store.selectSnapshot((state) => state.device.devices);
      expect(devices.length).toEqual(0);
    });
  });
});
