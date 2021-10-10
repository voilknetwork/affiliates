import React from 'react'
import { ContentHeader, Faq } from '../components'
import { HomeLayout } from '../layouts'

export default function faq() {
    return (
        <HomeLayout>
            
            <ContentHeader fullname="FAQs" title="Activity" name="faq"/>

            <Faq />
        </HomeLayout>
    )
}
