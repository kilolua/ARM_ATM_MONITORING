import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { EventsResponse } from '../models/response/EventsResponse'

export default class EventsServices {
  static async getEvents(): Promise<AxiosResponse<EventsResponse>> {
    return $api.get('Event/List')
  }
}
