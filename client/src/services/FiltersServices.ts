import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { FiltersResponse } from '../models/response/FiltersResponse'

export default class FiltersServices {
  static async getFilters(): Promise<AxiosResponse<FiltersResponse>> {
    return $api.get('Monitoring/GetFilterValues')
  }
}
