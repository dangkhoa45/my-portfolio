import { HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Head>
				<title>My portfolio | Code With Khoai ~ </title>
			</Head>
			<main>
				<HeroSection />
				<RecentPosts/>
			</main>
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
