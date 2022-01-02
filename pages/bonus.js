
import React from 'react'
import { Bonus, ContentHeader, History } from '../components'
import { HomeLayout } from '../layouts'

export default function board() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Bonus" title="Activity" name="bonus"/>
            <Bonus />
        </HomeLayout>
    )
}