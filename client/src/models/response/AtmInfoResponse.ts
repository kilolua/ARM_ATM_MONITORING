export interface AtmInfoEventListResponse {
  ReturnValue: string
  ResultState: number
  ErrorText: string
}

export interface AtmInfoEventListReturnValue {
  eventList: Array<AtmInfoEventListItem>
  count: number
}

export interface AtmInfoEventListItem {
  id: string
  event_type: string
  event_date: string
  event_data: string
}
