export interface ActionsListResponse {
  ReturnValue: ActionsListReturnValue
  ResultState: number
  ErrorText: string
}

export interface ActionGetResponse {
  ReturnValue: ActionsListItem
  ResultState: number
  ErrorText: string
}


export interface DropDownListPluginResponse {
  ReturnValue: Array<DropDownListPluginItem>
  ResultState: number
  ErrorText: string
}


export interface ActionsListReturnValue{
  PageCount: number,
  Step: number,
  Page: number,
  List: Array<ActionsListItem>
}

export interface ActionsListItem{
  id: string,
  name: string,
  param: string,
  PluginName: string,
  PluginId: string,
  timeout: number,
  packagesCount: number,
  ActionSettings: null,
  hash: string
}

export  interface DropDownListPluginItem{
  Disabled: boolean
  Group: null
  Selected: boolean
  Text: string
  Value: string
}