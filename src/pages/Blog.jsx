import { useEffect, useState } from 'react';
import { getPosts } from '../utils/posts';
import '../styles/blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section className="blog">
      <h1>Blog</h1>

      <div className="blog-grid">
        {posts.map(post => (
          <article className="blog-card" key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Leer más
            </Link>

          </article>
        ))}
      </div>
    </section>
  );
}
