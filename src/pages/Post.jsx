import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { getPosts } from '../utils/posts';
import '../styles/post.css'
import ShareButtons from '../components/ShareButtons';
import '../styles/share.css';


export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPosts().then(posts => {
      setPost(posts.find(p => p.slug === slug));
    });
  }, [slug]);

  if (!post) return null;

  return (
    <article className="post">
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.body}</ReactMarkdown>
      <ShareButtons title={post.title} />

    </article>
  );
}
