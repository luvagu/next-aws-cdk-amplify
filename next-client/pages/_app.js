import '../configureAmplify'
import Link from 'next/link'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav style={navStyle}>
				<Link href="/">
					<span style={linkStyle}>Home</span>
				</Link>
				<Link href="/create-post">
					<span style={linkStyle}>Create Post</span>
				</Link>
				<Link href="/profile">
					<span style={linkStyle}>Profile</span>
				</Link>
			</nav>
			<div style={bodyStyle}>
				<Component {...pageProps} />
			</div>
			<footer>
					Powered by Next.js {' '}
					<img src="/vercel.svg" alt="Vercel Logo" className="logo" />
			</footer>
		</div>
	)
}

const navStyle = { padding: 20, borderBottom: '1px solid #ddd' }
const bodyStyle = { minHeight: 'calc(100vh - 190px)', padding: '20px 40px' }
const linkStyle = { marginRight: 20, cursor: 'pointer' }

export default MyApp
