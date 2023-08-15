export interface MenuResponse {
  ReturnValue: {
    Menu: Array<MenuItem>
  }
  ResultState: number
  ErrorText: string
}

export interface MenuItem {
  name: string
  controller: string
  action: string
}

export interface PrivilagesResponse{
  ResultState: number;
  ErrorText: string;
  ReturnValue: Array<PrivilageItem>
}

export interface PrivilageItem{
  id: string,
  Name: string,
  Read: boolean,
  Write: boolean,
  cap_id: string
}