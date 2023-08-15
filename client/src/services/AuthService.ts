import { AxiosResponse } from 'axios'
import $api from '../shared/api'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('Account/Login', { username, password })
  }

  static async logout(): Promise<void> {
    return $api.get('Account/Logout')
  }

  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get('Capabilities/List')
  }
}
