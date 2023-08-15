import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { MenuResponse, PrivilageItem, PrivilagesResponse } from '../models/response/MenuResponse'

export default class MenuServices {
  static async getMenu(): Promise<AxiosResponse<MenuResponse>> {
    return $api.get('Menu/GetMenu')
  }

  static async getPrivilages(): Promise<AxiosResponse<PrivilagesResponse>> {
    return $api.get('Menu/GetPrivileges')
  }
}
