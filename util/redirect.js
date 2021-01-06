import { interpolateAs } from "next/dist/next-server/lib/router/router";

import Router from 'next/router'

export function redirectClient(res) {
    Router.push(res.url)
}

export function redirectPathSwitch(role){
    switch (role) {
        case "manager":
            return '/dashboard'
            break
        case "user":
            return '/player'
            break
        case "editor":
            return '/collections'
            break    
        default:
            return '/'
            break
    }
}