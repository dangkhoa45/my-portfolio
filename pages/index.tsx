import { HeroSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>My portfolio | Code With Khoai ~ </title>
			</Head>
			<main>
				<Link href="/blog">Blog</Link>
				<Link href="/work">Work</Link>

				<HeroSection />
			</main>
		</>
	)
}

Home.Layout = MainLayout

export default Home
