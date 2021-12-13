import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgxsModule } from "@ngxs/store";
import { AppHttpService } from "src/app/services/app-http.service";

import { DeviceListComponent } from "./device-list.component";
import { DeviceState } from "src/app/store/device/device.state";
import { By } from "@angular/platform-browser";

describe("DeviceListComponent", () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxsModule.forRoot([DeviceState]),
      ],
      providers: [AppHttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
