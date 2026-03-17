import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../../lib/constants';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Post not found.</p>
        <Link to="/blog" className="text-indigo-600 font-semibold hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:underline">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-3xl mb-8" />

        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{post.category}</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-8">{post.date}</p>

        <div className="space-y-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
