
import { axiosClient } from '@/api-client'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'
import { SWRConfig } from 'swr'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<CacheProvider value={clientSideEmotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ToastContainer />

				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	)
}
