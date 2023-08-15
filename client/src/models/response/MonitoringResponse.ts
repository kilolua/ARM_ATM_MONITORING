import { MenuItem } from './MenuResponse'

export interface MonitoringAtmResponse {
  ReturnValue: string
  ResultState: number
  ErrorText: string
}

export interface MonitoringAtmItem {
  id: string
  isOnline: boolean
  State: number
}

export interface MonitoringReturnValue {
  ATMList: Array<MonitoringAtmItem>
  count: number
  OnlineCount: number
  WarningCount: number
  OfflineCount: number
}
