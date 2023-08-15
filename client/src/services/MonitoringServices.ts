import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { MonitoringAtmResponse } from '../models/response/MonitoringResponse'
import { FiltersRequest } from '../models/response/FiltersResponse'

const getFilterObject = (filters: Array<FiltersRequest>) => {
  const obj: any = {}
  filters.forEach((item) => {
    switch (item.name) {
      case 'Connection':
        // obj[item.name] = [...item.value];
        break
      case 'TellME':
        obj.TellMEVersion = [...item.value]
        break
      case 'TellME SP':
        obj.TellMESPVersion = [...item.value]
        break
      case 'NDC':
        obj.NDC = [...item.value]
        break
      case 'BIM':
        obj.BIM = [...item.value]
        break
      case 'CDM':
        obj.CDM = [...item.value]
        break
      case 'Updater agent version':
        obj.UpdaterVersion = [...item.value]
        break
      case 'Configuration':
        obj.Configurations = [...item.value]
        break
      case 'CONFIDAssigned':
        obj.CONFIDAssigned = [...item.value]
        break
      case 'UPDIDInstalled':
        obj.UPDIDInstalled = [...item.value]
        break
      case 'Tag':
        obj.Tags = [...item.value]
        break
      case 'Warning':
        obj.Warning = [...item.value]
        break
      default:
        break
    }
  })
  console.log(obj)
  return obj
}

export default class MonitoringServices {
  static async getMonitoringAtmInfo(
    search: string,
    filters: Array<FiltersRequest>
  ): Promise<AxiosResponse<MonitoringAtmResponse>> {
    const data = { ...getFilterObject(filters), search, Warning: 0 }
    console.log(data)
    return $api.post<MonitoringAtmResponse>('Monitoring/GetData', data)
  }
}
