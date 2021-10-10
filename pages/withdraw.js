
import React from 'react'
import { ContentHeader, Withdraw } from '../components'
import { HomeLayout } from '../layouts'

export default function withdraw() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Withdraw" title="Finance" name="withdraw"/>
            <Withdraw />
        </HomeLayout>
    )
}
