import React from 'react'
import { ContentHeader, Deposit } from '../components'
import { HomeLayout } from '../layouts'

export default function deposit() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Deposit" title="Finance" name="deposit"/>

            <Deposit />
        </HomeLayout>
    )
}
