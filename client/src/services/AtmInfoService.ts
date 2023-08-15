import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { AtmInfoEventListResponse } from '../models/response/AtmInfoResponse'

export default class AtmInfoService {
  static async getLastEvents(
    id: string
  ): Promise<AxiosResponse<AtmInfoEventListResponse>> {
    return $api.get('Event/getLastEvents', { params: { id, sPage: 1 } })
  }
}
