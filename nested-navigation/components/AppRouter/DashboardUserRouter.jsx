import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

export default function DashboardUserRouters({path , children}) {
    const router = useRouter()
    console.log(router.asPath.split('?')[0])
    return router.asPath == path && children ?  children : <Fragment/>
}
