import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { AppHttpService } from "src/app/services/app-http.service";
import { SetSearchedDevices } from "src/app/store/device/device.actions";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private searchTerms = new Subject<string>();
  disabled = false;

  @ViewChild("searchBox")
  searchInput!: HTMLInputElement;

  constructor(
    private appHttpService: AppHttpService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === "/devices/details") {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      }
    });

    this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.appHttpService.searchDevices(term))
      )
      .subscribe((devices) =>
        this.store.dispatch(new SetSearchedDevices(devices))
      );
  }

  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
