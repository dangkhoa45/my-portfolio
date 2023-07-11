import avatar from '@/images/avatar.png'
import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

export function HeroSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 8 }}>
			<Container>
				<Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={8}>
					<Box>
						<Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
							Hi, I am John,
							<br />
							Creative Technologist
						</Typography>
						<Typography mb={{ xs: 3.5, md: 5 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button variant="contained" size="large">
							Download Resume
						</Button>
					</Box>
					<Box
						sx={{
							minWidth: '330px',
							color: 'secondary.light',
							boxShadow: '-5px 13px',
							borderRadius: '50%',
						}}
					>
						<Image src={avatar} layout="responsive" alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
