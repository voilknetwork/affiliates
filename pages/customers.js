
import React from 'react'
import { ContentHeader, SearchContent } from '../components'
import { CustomerLayout, HomeLayout } from '../layouts'

export default function customers() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Customers" title="More" name="customers"/>
            <SearchContent />
        </HomeLayout>
    )
}
