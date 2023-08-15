export interface FiltersResponse {
  ReturnValue: Array<FilterItem>
  ResultState: number
  ErrorText: string
}

export interface FilterItem {
  ItemName: string
  States: Array<FilterStatesItem>
}

export interface FilterStatesItem {
  Name: string
  Count: number
  id: string
}

export interface FilterStatesItemWith extends FilterStatesItem {
  ItemName: string
}

export interface FiltersRequest {
  name: string
  value: Array<string>
}
