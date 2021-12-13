import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AppHttpService } from "./app-http.service";

describe("AppHttpService", () => {
  let service: AppHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppHttpService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
