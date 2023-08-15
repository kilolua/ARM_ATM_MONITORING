import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { ActionGetResponse, ActionsListResponse, DropDownListPluginResponse } from '../models/response/ActionsResponse'

export default class ActionsServices {
  static async getActionsList(step: number, page: number, search: string): Promise<AxiosResponse<ActionsListResponse>> {
    return $api.get('CustomAction/List', { params: { sStep: step, sPage: page, Search:search } })
  }

  static async getAction(id: string): Promise<AxiosResponse<ActionGetResponse>> {
    return $api.get('CustomAction/Get', { params: { id: id } })
  }

  static async getDropDownListPlugin(id: string): Promise<AxiosResponse<DropDownListPluginResponse>> {
    return $api.get('CustomAction/DropDownListPlugin', { params: { id: id } })
  }

  static async deleteAction(id: string): Promise<AxiosResponse<ActionsListResponse>> {
    return $api.delete('CustomAction/Delete', { params: { id: id } })
  }
}
