
import React from 'react'
import { ContentHeader, SearchContent } from '../components'
import { CustomerLayout, HomeLayout } from '../layouts'

export default function referrals() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Referrals" title="More" name="referrals"/>
            <SearchContent />
        </HomeLayout>
    )
}
