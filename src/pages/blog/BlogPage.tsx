import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../lib/constants';

export default function BlogPage() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Blog</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Latest Insights</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-indigo-600 text-sm font-semibold">Read more →</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
