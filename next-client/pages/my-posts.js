import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { postsByUsername } from '../graphql'

export default function MyPosts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetchPosts()
	}, [])

	async function fetchPosts() {
		const postData = await API.graphql({
			query: postsByUsername,
			authMode: 'AMAZON_COGNITO_USER_POOLS',
		})
		setPosts(postData.data.postsByUsername)
	}

	return (
		<div>
			<h1>My Posts</h1>
			{posts.map((post, index) => (
				<Link key={index} href={`/posts/${post.id}`}>
					<div style={linkStyle}>
						<h2>{post.title}</h2>
						<p style={authorStyle}>Author: {post.owner}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

const linkStyle = {
	cursor: 'pointer',
	borderBottom: '1px solid rgba(0, 0, 0 ,.1)',
	padding: '20px 0px',
}

const authorStyle = { color: 'rgba(0, 0, 0, .55)', fontWeight: '600' }
