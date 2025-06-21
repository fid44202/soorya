
import React from 'react';
import Layout from '../components/Layout';
import { ExternalLink, Calendar, Newspaper } from 'lucide-react';

const Press = () => {
  const pressArticles = [
    {
      id: 1,
      title: "Ravi Sharma: Preserving the Sacred Art of Bhajan Singing",
      publication: "The Times of India",
      date: "November 20, 2024",
      excerpt: "In an era where traditional music faces the challenge of modernization, Ravi Sharma stands as a beacon of authenticity, dedicating his life to preserving the sacred art of bhajan singing...",
      link: "https://timesofindia.com/article1",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "The Voice That Connects Hearts to the Divine",
      publication: "Indian Express",
      date: "October 15, 2024",
      excerpt: "With over 25 years of devotional music, Ravi Sharma's voice has become synonymous with spiritual awakening. His recent concert at Mumbai's Spiritual Center drew over 2000 devotees...",
      link: "https://indianexpress.com/article2",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Traditional Bhajan Singer Wins Cultural Ambassador Award",
      publication: "Hindustan Times",
      date: "September 8, 2024",
      excerpt: "The Ministry of Culture has appointed renowned bhajan singer Ravi Sharma as a cultural ambassador, recognizing his exceptional contribution to preserving India's musical heritage...",
      link: "https://hindustantimes.com/article3",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "From Varanasi to Global Stage: A Musical Journey",
      publication: "The Hindu",
      date: "August 25, 2024",
      excerpt: "Born in the holy city of Varanasi, Ravi Sharma's journey from temple gatherings to international concerts is a testament to the universal appeal of devotional music...",
      link: "https://thehindu.com/article4",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Devotional Music in Digital Age: An Interview",
      publication: "Music India Magazine",
      date: "July 12, 2024",
      excerpt: "In this exclusive interview, Ravi Sharma discusses how traditional bhajan singing can thrive in the digital age while maintaining its spiritual essence and cultural authenticity...",
      link: "https://musicindia.com/article5",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Teaching the Next Generation: Ravi Sharma's Music Workshop",
      publication: "Cultural Times",
      date: "June 30, 2024",
      excerpt: "At his recent workshop in Delhi, Ravi Sharma shared the intricacies of devotional singing with 50 aspiring musicians, emphasizing the spiritual dimension of musical practice...",
      link: "https://culturaltimes.com/article6",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Ravi Sharma's 'Divine Echoes' Album Tops Spiritual Music Charts",
      publication: "Music World Weekly",
      date: "May 18, 2024",
      excerpt: "The latest album 'Divine Echoes' featuring traditional bhajans and contemporary arrangements has resonated with listeners worldwide, topping spiritual music charts across platforms...",
      link: "https://musicworld.com/article7",
      image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "The Healing Power of Bhajans: A Medical Perspective",
      publication: "Wellness India Journal",
      date: "April 20, 2024",
      excerpt: "Recent studies on the therapeutic effects of devotional music feature Ravi Sharma's bhajans, showing significant positive impacts on mental health and emotional well-being...",
      link: "https://wellnessindia.com/article8",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Press Coverage</h1>
            <p className="text-lg text-amber-700">Media features and news articles about our musical journey</p>
          </div>

          {/* Featured Article */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
              <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-8 h-8" />
                  <span className="text-amber-100 font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{pressArticles[0].title}</h2>
                <div className="flex items-center gap-4 text-amber-100">
                  <span className="font-semibold">{pressArticles[0].publication}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{pressArticles[0].date}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:flex">
                <img 
                  src={pressArticles[0].image} 
                  alt={pressArticles[0].title}
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {pressArticles[0].excerpt}
                  </p>
                  <a 
                    href={pressArticles[0].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* All Press Articles */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">All Press Coverage</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pressArticles.slice(1).map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-amber-700 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{article.date}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm font-semibold">{article.publication}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-amber-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Media Kit */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-xl p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Media Kit</h2>
                <p className="text-amber-100 mb-6 text-lg">
                  For press inquiries, interviews, and media coverage requests
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">High-Resolution Photos</h3>
                    <p className="text-amber-100 text-sm">Professional photos for print and digital use</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Biography & Facts</h3>
                    <p className="text-amber-100 text-sm">Detailed artist information and career highlights</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Press Releases</h3>
                    <p className="text-amber-100 text-sm">Latest news and concert announcements</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                    Download Media Kit
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Contact for Interviews
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Press;
