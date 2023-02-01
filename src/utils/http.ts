import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"
import { REACT_APP_API_URL } from "../config";
import IApiResult from "../interfaces/IApiResult";
import { readAuthInfo } from "./storage";
import { isNullOrWhitespace } from "./string.helper";

const getStatusMessage = (status: any) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 402:
            message = '拒绝访问(402)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错!`
    }
    return message
}

const headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
}

class Http {
    private instance: AxiosInstance | null = null;

    private get http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initHttp();
    }

    initHttp() {
        const http = axios.create({
            baseURL: REACT_APP_API_URL,
            headers
        })

        http.interceptors.request.use(config => {
            const token = readAuthInfo()
            if (token) {
                config.headers!.Authorization = `Bearer ${token.token}`;
            }
            return config
        }, (error) => Promise.reject(error));

        http.interceptors.response.use(
            (response) => response,
            (error) => {
                return Http.handleError(error);
            }
        )

        this.instance = http;
        return http;
    }

    request<RES = any>(config: AxiosRequestConfig) {
        return this.http.request<RES>(config);
    }

    get<REQ, RES = any>(url: string, params?: REQ) {
        return this.http.request<RES>({ method: 'GET', url, params })
    }

    post<REQ, RES = any>(url: string, data: REQ) {
        return this.http.request<RES>({ method: 'POST', url, data })
    }

    put<REQ, RES = any>(url: string, data: REQ) {
        return this.http.request<RES>({ method: 'PUT', url, data })
    }

    delete<REQ, RES = any>(url: string, data?: REQ) {
        return this.http.request<RES>({ method: 'DELETE', url, data })
    }
    patch<REQ, RES = any>(url: string, data: REQ) {
        return this.http.request<RES>({ method: 'PATCH', url, data })
    }

    // 处理全局应用错误
    private static handleError(error: AxiosError<any, IApiResult<any>>) {
        // 将错误统一抛出为Error
        const { response } = error;
        const data = response?.data as IApiResult<any>
        let errMsg = getStatusMessage(response?.status)
        if (data && !isNullOrWhitespace(data.message)) {
            errMsg = data.message
        }
        return Promise.reject(new Error(errMsg));
    }
}

export const http = new Http();