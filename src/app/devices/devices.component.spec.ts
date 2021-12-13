import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NgxsModule, Store } from "@ngxs/store";
import { AppHttpService } from "../services/app-http.service";
import { DeviceState } from "../store/device/device.state";

import { DevicesComponent } from "./devices.component";

describe("DevicesComponent", () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevicesComponent],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([DeviceState])],
      providers: [AppHttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
