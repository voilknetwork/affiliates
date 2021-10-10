
import React from 'react'
import { ContentHeader, History } from '../components'
import { HomeLayout } from '../layouts'

export default function history() {
    return (
        <HomeLayout>
            <ContentHeader fullname="History" title="More" name="history"/>
            <History />
        </HomeLayout>
    )
}
