
export type TAnswer = {
    config: { adapter: unknown
        data: unknown
        headers: {
            Accept: string
            }
        maxBodyLength: number
        maxContentLength: number
        method: string
        params: {
            app_id: string
            app_key: string
            category: string
            }
        timeout: 0
        transformRequest: unknown[]
        transformResponse: unknown[]
        transitional: {
            silentJSONParsing: boolean
            forcedJSONParsing: boolean
            clarifyTimeoutError: boolean
            }
        url: string
        validateStatus: unknown
        xsrfCookieName: string
        xsrfHeaderName: string
        }
    data: {
        month?: {[key:string]: string}
        histogram?: {[key:string]: string}
        __CLASS__: string
    }
    headers: {
        "content-length": string
    }
    request: {
        onabort: unknown
        onerror: unknown
        onload: null
        onloadend: unknown
        onloadstart: null
        onprogress: null
        onreadystatechange: null
        ontimeout: unknown
        readyState: number
        response: string
        responseText: string
        responseType: string
        responseURL: string
        responseXML: null
        status: number
        statusText: string
        timeout: number
        upload: {
            onabort: null
            onerror: null
            onload: null
            onloadend: null
            onloadstart: null
            onprogress: null
            ontimeout: null
            }
        withCredentials: boolean
    }
    status: number
    statusText: string
}
export type TCategory = {
    label: string
    tag: string
    __CLASS__: string
}
export type TColor = {
    backgroundColor: string[]
    borderColor: string[]
}
export type TGrid = {
    label: string
    data: unknown[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
}
