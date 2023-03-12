
import React from 'react'
import { Bonus, ContentHeader, History } from '../components'
import { HomeLayout } from '../layouts'

export default function airdrop() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Airdrop" title="Activity" name="airdrop"/>
            <Bonus />
        </HomeLayout>
    )
}