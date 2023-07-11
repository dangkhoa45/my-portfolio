import { Work } from '@/models'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { WorkList } from '../work'


export function FeatureWorks() {
	const workList: Work[] = [
		{
			id: 1,
			title: 'Designing Dashboards',
			createdAt: '1689064149165',
			updatedAt: '1689064149165',
			tagList: ['Dashboard'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnaiUrl: 'https://plus.unsplash.com/premium_photo-1675848495392-6b9a3b962df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=250&q=60&h=180',
		},
		{
			id: 2,
			title: 'Vibrant Portraits of 2020',
			createdAt: '1689064149165',
			updatedAt: '1689064149165',
			tagList: ['Illustration'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnaiUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80&h=180',
		},
		{
			id: 3,
			title: '36 Days of Malayalam type',
			createdAt: '1689064149165',
			updatedAt: '1689064149165',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnaiUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=250&q=60&h=180',
		},
	]

	return (
		<Box component="section" pt={2} pb={4}>
			<Container>
				<Typography variant="h5" pb={4}>Featured Works</Typography>
				<WorkList workList={workList}/>
			</Container>
		</Box>
	)
}
