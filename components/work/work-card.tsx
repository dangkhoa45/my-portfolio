import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'

export interface WorkCardProps {
	work: Work
}

export function WorkCard({ work }: WorkCardProps) {
	return (
		<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
			<Box width={{ xs: '100%', md: '246px' }} flexShrink={0} sx={{borderRadius: '30%'}}>
				<Image
					src={work.thumbnaiUrl}
					width={250}
					height={180}
					layout="responsive"
					alt="work thumbnail"
				/>
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold">
					{work.title}
				</Typography>

				<Stack direction="row" my={2}>
					<Chip
						color="secondary"
						label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
						size="small"
					/>
					<Typography ml={3} color={'GrayText'}>
						{work.tagList.join(', ')}
					</Typography>
				</Stack>

				<Typography>{work.shortDescription}</Typography>
			</Box>
		</Stack>
	)
}
