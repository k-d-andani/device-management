export interface Device {
  id?: number;
  name?: string;
  icon?: string;
  status?: string;
  category?: string;
  temprature?: string;
  usage?: DeviceUsage[];
}

export interface DeviceUsage {
  month?: string;
  usage?: number;
}
