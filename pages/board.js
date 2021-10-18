
import React from 'react'
import { Board, ContentHeader, History } from '../components'
import { HomeLayout } from '../layouts'

export default function board() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Board" title="More" name="board"/>
            <Board />
        </HomeLayout>
    )
}