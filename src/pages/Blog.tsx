import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Blog() {
  const guides = [
    {
      title: "Getting Started with Crypto Investment",
      description: "A complete beginner's guide to buying your first cryptocurrency safely and confidently.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
      category: "Beginner Guide",
      readTime: "10 min read",
      path: "/guides/getting-started"
    },
    {
      title: "Understanding Crypto Market Cycles",
      description: "Learn when to buy and sell based on market cycles - explained in simple terms without technical jargon.",
      image: "https://images.unsplash.com/photo-1642790551116-03a172f77d06?auto=format&fit=crop&q=80&w=800",
      category: "Market Education",
      readTime: "8 min read",
      path: "/guides/market-cycles"
    },
    {
      title: "How to Manage Risk in Crypto",
      description: "Simple strategies to protect your investment and avoid common mistakes that new crypto investors make.",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800",
      category: "Risk Management",
      readTime: "12 min read",
      path: "/guides/risk-management"
    },
    {
      title: "Building Your First Crypto Portfolio",
      description: "Step-by-step guide to creating a balanced cryptocurrency portfolio that matches your goals.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      category: "Portfolio Guide",
      readTime: "15 min read",
      path: "/guides/portfolio-building"
    },
    {
      title: "Technical Analysis Basics",
      description: "Learn how to read charts and identify key patterns to make better trading decisions.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800",
      category: "Trading Guide",
      readTime: "10 min read",
      path: "/guides/technical-analysis"
    }
  ];

  const categories = [
    "All Guides",
    "Beginner Guide",
    "Market Education",
    "Risk Management",
    "Portfolio Guide",
    "Trading Guide"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Crypto Investment Guides
            </h1>
            <p className="text-xl text-gray-600">
              Simple, practical guides to help you invest in crypto with confidence
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                to={guide.path}
                key={guide.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {guide.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {guide.description}
                  </p>
                  <div className="flex justify-end">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}