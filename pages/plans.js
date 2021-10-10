import React from 'react'
import { ContentHeader, Packages } from '../components'
import {HomeLayout} from '../layouts'

export default function plans() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Packages" title="Activity" name="plans"/>

            <Packages />
        </HomeLayout>
    )
}
