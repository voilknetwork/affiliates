
import React from 'react'
import { ContentHeader, Statistics } from '../components'
import { HomeLayout } from '../layouts'

export default function stats() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Statistics" title="More" name="stats"/>
            <Statistics />
        </HomeLayout>
    )
}
