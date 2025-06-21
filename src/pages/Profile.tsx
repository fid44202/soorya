
import React from 'react';
import Layout from '../components/Layout';
import { Award, Star, Music } from 'lucide-react';

const Profile = () => {
  const achievements = [
    {
      year: '2023',
      title: 'Best Devotional Singer',
      organization: 'Indian Music Awards',
      description: 'Recognized for exceptional contribution to devotional music'
    },
    {
      year: '2022',
      title: 'Cultural Ambassador',
      organization: 'Ministry of Culture',
      description: 'Appointed as cultural ambassador for traditional music'
    },
    {
      year: '2021',
      title: 'Lifetime Achievement',
      organization: 'Bhajan Sammelan Society',
      description: 'Honored for 25 years of devotional music service'
    },
    {
      year: '2020',
      title: 'Best Album - Divine Echoes',
      organization: 'Spiritual Music Awards',
      description: 'Album featuring traditional bhajans and devotional songs'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Biography Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
              <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-8">
                <h1 className="text-4xl font-bold mb-4">About Ravi Sharma</h1>
                <p className="text-amber-100 text-lg">Traditional Bhajan Singer & Spiritual Guide</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="prose prose-amber max-w-none">
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Ravi Sharma is a renowned traditional bhajan singer who has dedicated his life to 
                        preserving and promoting the rich heritage of Indian devotional music. With over 
                        25 years of experience, he has touched countless hearts through his soulful renditions 
                        of ancient bhajans and spiritual songs.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Born into a family of musicians in Varanasi, Ravi was exposed to spiritual music from 
                        a very young age. He began his formal training under the guidance of renowned guru 
                        Pandit Vishnu Sharma, learning the intricate nuances of classical and devotional music. 
                        His deep understanding of Sanskrit texts and their meanings adds profound depth to his performances.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Over the years, Ravi has performed at numerous temples, ashrams, and cultural centers 
                        across India and internationally. His mission is to spread the divine message of love, 
                        peace, and devotion through the power of music. He believes that music is the universal 
                        language that connects all souls to the divine.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        Today, Ravi continues to inspire audiences through his concerts, recordings, and spiritual 
                        workshops. He also mentors young musicians, ensuring that the sacred tradition of 
                        devotional music continues to flourish for future generations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Born:</strong> Varanasi, India</li>
                      <li><strong>Training:</strong> Classical & Devotional</li>
                      <li><strong>Experience:</strong> 25+ Years</li>
                      <li><strong>Albums:</strong> 12 Released</li>
                      <li><strong>Concerts:</strong> 500+ Performed</li>
                      <li><strong>Languages:</strong> Hindi, Sanskrit, Gujarati</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awards and Achievements */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Awards & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 border-b border-amber-200">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-800 text-white p-3 rounded-full">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900">{achievement.title}</h3>
                        <p className="text-amber-700">{achievement.organization}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Musical Style */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Musical Style & Philosophy</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Music className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Traditional Roots</h3>
                  <p className="text-amber-100">
                    Deeply rooted in classical Indian music traditions, maintaining the authenticity of ancient ragas and compositions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Spiritual Connection</h3>
                  <p className="text-amber-100">
                    Every performance is a spiritual journey, connecting the audience with divine consciousness through devotional music.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
                  <p className="text-amber-100">
                    Committed to preserving and promoting traditional bhajan singing for future generations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
