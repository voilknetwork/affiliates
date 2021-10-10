import { ContentHeader, Withdrawals } from '../components'
import { HomeLayout } from '../layouts'

export default function withdrawals() {
    return (
        <HomeLayout>
            <ContentHeader fullname="Admin Panel" title="More" name="admin"/>
            <Withdrawals />
        </HomeLayout>
    )
}
