const Promise = require('promise')
const request = require('superagent-promise')(require('superagent'), Promise)
import { getAccessToken } from '../util/token_util'

interface Resp {
    readonly text: string
    readonly status: number
    readonly statusText: string
}

// interface HandledResp {
//     readonly items: {}
//     readonly status: number
//     readonly statusText: string
// }

const handleResp = (resp: Resp)  => {
    const items: {}  =  resp.text ? JSON.parse(resp.text) : []
    return ({
        items,
        status: resp.status,
        statusText: resp.statusText,
    })
}

export class Client  {
    rootUrl = 'https://api.mixcloud.com/'
    buildUrl = (pieceOfUrl: string) => `${this.rootUrl}${pieceOfUrl}`
    authHeader = () => {
        return {'Authorization': 'Bearer ' + getAccessToken()}
    }

    getFavorites = () => {
        return request
        .get(this.buildUrl('/jwalz/favorites'))
        .accept('application/json')
            .then((res: Resp) => handleResp(res))
            .catch((res: Resp) => handleResp(res))
    }
}