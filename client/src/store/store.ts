import { makeAutoObservable } from 'mobx'
import AuthService from '../services/AuthService'
import MenuServices from '../services/MenuServices'
import { MenuItem, PrivilageItem } from '../models/response/MenuResponse'
import MonitoringServices from '../services/MonitoringServices'
import {
  MonitoringAtmItem,
  MonitoringReturnValue,
} from '../models/response/MonitoringResponse'
import AtmInfoService from '../services/AtmInfoService'
import { AtmInfoEventListReturnValue } from '../models/response/AtmInfoResponse'
import FiltersServices from '../services/FiltersServices'
import { FilterItem, FiltersRequest } from '../models/response/FiltersResponse'
import EventsServices from '../services/EventsServices'
import ActionsServices from '../services/ActionsServices'
import { ActionsListItem, ActionsListReturnValue, DropDownListPluginItem } from '../models/response/ActionsResponse'
import jwt_decode from "jwt-decode";

export default class Store {
  isAuth = false

  isLoading = true;

  menuItems: Array<MenuItem> = []

  monitoringAtmItems: Array<MonitoringAtmItem> = []

  actionsList: Array<ActionsListItem> = []

  actionEditCurrent: ActionsListItem = {} as ActionsListItem;

  actionsListPageCount: number = 1;

  atmOnlineCount = 0

  actionEditPluginDropDown: Array<DropDownListPluginItem> = [];

  atmOfflineCount = 0

  activePage = ''

  currentId = ''

  currentEvents: AtmInfoEventListReturnValue = {} as AtmInfoEventListReturnValue

  isLoadinAtmData = false

  privilages: Array<PrivilageItem> = []

  monitoringFilters: Array<FilterItem> = []

  currentFilters: Array<FiltersRequest> = []

  atmEvents: Array<string> = []

  constructor() {
    makeAutoObservable(this)
  }

  setActivePage(page: string) {
    console.log(page)
    this.activePage = page
  }

  setCurrentFiltersAdd(id: string, itemName: string) {
    const index = this.currentFilters.findIndex((x) => x.name === itemName)
    if (index !== -1) {
      this.currentFilters[index].value.push(id)
    } else {
      this.currentFilters.push({ name: itemName, value: [id] })
    }
    console.log(this.currentFilters)
  }

  setCurrentFiltersRemove(id: string, itemName: string) {
    const index = this.currentFilters.findIndex((x) => x.name === itemName)
    if (index !== -1) {
      const removeIndex = this.currentFilters[index].value.findIndex(
        (x) => x === id
      )
      if (removeIndex !== -1)
        this.currentFilters[index].value.splice(removeIndex, 1)
    }
    console.log(this.currentFilters.toString())
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setCurrentId(id: string) {
    this.currentId = id
  }

  setActionEditCurrent(obj : ActionsListItem){
    this.actionEditCurrent = obj;
  }

  setMenu(array: Array<MenuItem>) {
    this.menuItems = array
  }

  setLoadinAtmData(bool: boolean) {
    this.isLoadinAtmData = bool
  }

  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password)
      console.log("Auth response: "+JSON.stringify(response))
      if (response.data.ResultState === 200) {
        localStorage.setItem('token', response.data.ReturnValue)
        this.setAuth(true)
      }

    } catch (e: any) {
      console.log("loginError: "+e)
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async checkAuth() {
    try {
      const response = await AuthService.checkAuth()
      console.log('auth response'+response);
      this.isLoading = false;
      if (response.data.ResultState === 200) {
        this.setAuth(true);
        // let test = localStorage.getItem('token') || "";
        // console.log("res token decode: ", jwt_decode(test));
      } else {
        localStorage.removeItem('token')
        this.setAuth(false);
      }
    } catch (e: any) {
      this.isLoading = false;
      localStorage.removeItem('token')
      this.setAuth(false);
      console.log(e)
    }
  }

  async getMenu() {
    try {
      const response = await MenuServices.getMenu()
      console.log('getMenu: ', response)
      this.menuItems = response.data.ReturnValue.Menu.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async getPrivilages() {
    try {
      const response = await MenuServices.getPrivilages()
      console.log('getPrivilages: ', response)
      this.privilages = response.data.ReturnValue;
    } catch (e: any) {
      console.log('error privilages');
      console.log(e.response?.data?.message)
    }
  }

  async getActionsList(step:number, page:number, search:string) {
    try {
      const response = await ActionsServices.getActionsList(step, page, search)
      this.actionsList = response.data.ReturnValue.List;
      this.actionsListPageCount = response.data.ReturnValue.PageCount;
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async getAction(id:string) {
    try {
      const response = await ActionsServices.getAction(id)
      this.actionEditCurrent = response.data.ReturnValue;
      console.log("actionEditCurrent: "+this.actionEditCurrent)
    } catch (e: any) {
      console.log(JSON.stringify(e));
    }
  }
  async getDropDownListPlugin(id:string) {
    try {
      const response = await ActionsServices.getDropDownListPlugin(id)
      this.actionEditPluginDropDown = response.data.ReturnValue;
    } catch (e: any) {
      console.log(e)
    }
  }

  async getMonitoringAtm(search = '') {
    try {
      const response = await MonitoringServices.getMonitoringAtmInfo(
        search,
        this.currentFilters
      )
      console.log('getMonitoringAtmInfo: ', response)
      const obj: MonitoringReturnValue = JSON.parse(response.data.ReturnValue)
      this.monitoringAtmItems = obj.ATMList
      this.atmOnlineCount = obj.OnlineCount
      this.atmOfflineCount = obj.OfflineCount
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async getAtmInfo(id: string) {
    try {
      const response = await AtmInfoService.getLastEvents(id)
      console.log('getLastEvents: ', response)
      this.currentEvents = JSON.parse(response.data.ReturnValue)
      this.setLoadinAtmData(true)
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async getFilters() {
    try {
      const response = await FiltersServices.getFilters()
      console.log('getFilters: ', response)
      this.monitoringFilters = response.data.ReturnValue
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }

  async getEvents() {
    try {
      const response = await EventsServices.getEvents()
      console.log('getEvents: ', response)
      this.atmEvents = response.data.ReturnValue.ATMList
    } catch (e: any) {
      console.log(e.response?.data?.ErrorText)
    }
  }
}
