import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'
import { TOKEN_ICO_PROVIDER } from '../context/index'
import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
	getDefaultConfig,
	RainbowKitProvider,
	darkTheme,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import {
	mainnet,
	polygon,
	optimism,
	arbitrum,
	base,
	holesky,
} from 'viem/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
require('dotenv').config()

const projectID = process.env.WALLETCONNECT_API

const config = getDefaultConfig({
	appName: 'Token ICO Platform',
	projectId: '95d70ee9728ece5b44c6d6d24c5e6857',
	chains: [holesky],
	ssr: true,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
	return (
		<>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider
						theme={darkTheme({
							accentColor: '#3C13D4',
							accentColorForeground: 'white',
							borderRadius: 'small',
							fontStack: 'system',
							overlayBlur: 'small',
						})}
					>
						<TOKEN_ICO_PROVIDER>
							<Component {...pageProps} />
							<Toaster />
						</TOKEN_ICO_PROVIDER>
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>

			<script src='assets/js/jquery-3.5.1.min.js'></script>
			<script src='assets/js/bootstrap.bundle.min.js'></script>
			<script src='assets/js/wow.min.js'></script>
			<script src='assets/js/appear.js'></script>
			<script src='assets/js/jquery.magnific-popup.min.js'></script>
			<script src='assets/js/metisMenu.min.js'></script>
			<script src='assets/js/jquery.marquee.min.js'></script>
			<script src='assets/js/parallax-scroll.js'></script>
			<script src='assets/js/countdown.js'></script>
			<script src='assets/js/easing.min.js'></script>
			<script src='assets/js/scrollspy.js'></script>
			<script src='assets/js/main.js'></script>
		</>
	)
}
