export async function getPosts() {
  const posts = import.meta.glob('../posts/*.md', { as: 'raw' });

  const result = [];

  for (const path in posts) {
    const content = await posts[path]();
    const slug = path.split('/').pop().replace('.md', '');

    result.push({
      slug,
      title: content.match(/title:\s*(.*)/)?.[1] || slug,
      excerpt: content.match(/excerpt:\s*(.*)/)?.[1] || '',
      body: content.replace(/---[\s\S]*?---/, ''),
    });
  }

  return result;
}
