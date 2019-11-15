import { NextPage } from 'next';

import Layout from '../components/MyLayout';
import Link from 'next/link';

interface Post {
    id: string,
    title: string
}

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Blog: NextPage<{posts: Array<Post>}> = ({ posts })=> (
    <Layout title="Home">
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
  
          li {
            list-style: none;
            margin: 5px 0;
          }
  
          a {
            text-decoration: none;
            color: blue;
          }
  
          a:hover {
            opacity: 0.6;
          }
        `}</style>
    </Layout>
)

Blog.getInitialProps = async ({ req }) => {
    const posts = getPosts()
    return { posts };
};

export default Blog;