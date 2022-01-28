import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

export default function DashboardRouters({path , children , exact = false}) {
    const router = useRouter()
    console.log(router.asPath.split('?')[0])
    if(exact ) return router.asPath === (path) && children ?  children : <Fragment/>
    return router.asPath.includes(path) && children ?  children : <Fragment/>
}
