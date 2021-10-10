import { ContentHeader, Deposits } from '../components'
import { HomeLayout } from '../layouts'

export default function deposits() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Admin Panel" title="More" name="admin"/>
            <Deposits />
        </HomeLayout>
    )
}
