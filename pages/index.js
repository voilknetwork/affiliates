import Head from 'next/head'
import Image from 'next/image'
import { ContentBody, ContentHeader } from '../components'
import HomeLayout from '../layouts/HomeLayout/HomeLayout'

export default function Home() {
  return (
    <HomeLayout >
      <ContentHeader fullname="Dashboard" title="Home" name="Dashboard"/>
      <ContentBody />
    </HomeLayout>

  )
}
