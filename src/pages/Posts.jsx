
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch(\`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=\${page}\`)
      .then(res => res.json())
      .then(data => {
        if (data.length < 10) setHasMore(false);
        setPosts(prev => [...prev, ...data]);
      });
  }, [page]);

  const filtered = posts.filter(post => post.title.includes(query));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="grid gap-4">
        {filtered.map(post => (
          <li key={post.id} className="p-4 border rounded bg-white dark:bg-gray-800">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button onClick={() => setPage(p => p + 1)} className="mt-4 px-4 py-2 bg-blue-600 text-white">
          Load More
        </button>
      )}
    </div>
  );
}
