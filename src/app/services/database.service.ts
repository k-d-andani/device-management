import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Device } from "../models/devices.model";

@Injectable({
  providedIn: "root",
})
export class DatabaseService implements InMemoryDbService {
  createDb() {
    const devices: Device[] = this.generateSampleData();

    return { devices };
  }

  generateSampleData(): Device[] {
    const sampleData = [];
    const icons = ["fa fa-mobile", "fa fa-headphones"];
    const category = ["Display", "Audio"];
    const status = ["Available", "Offline"];
    let i = 1;
    let total = 20;
    while (i <= total) {
      const device: Device = {
        id: i,
        name: `Device ${i}`,
        icon: i % 2 === 0 ? icons[0] : icons[1],
        category: i % 2 === 0 ? category[0] : category[1],
        status: i % 2 === 0 ? status[0] : status[1],
        temprature: `${i * 5} celsius`,
        usage: [
          {
            month: "December",
            usage: 10,
          },
        ],
      };

      sampleData.push(device);

      i++;
    }

    return sampleData;
  }
}
