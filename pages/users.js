
import React from 'react'
import { ContentHeader, RecentUsers, SearchContent } from '../components'
import { CustomerLayout, HomeLayout } from '../layouts'

export default function recentUsers() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Recent Users" title="More" name="users"/>
            <RecentUsers />
        </HomeLayout>
    )
}
