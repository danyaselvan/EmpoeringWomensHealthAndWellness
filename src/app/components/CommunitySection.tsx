import { MessageCircle, Users, Heart, Share2 } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

const stories = [
  {
    name: "Sarah M.",
    role: "Fitness Enthusiast",
    story: "This platform helped me track my health journey and connect with amazing women who share similar goals.",
    image: "https://images.unsplash.com/photo-1671895317466-274de1e6be41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXB8ZW58MXx8fHwxNzcwMTA2NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 234,
    comments: 45,
  },
  {
    name: "Maya K.",
    role: "Mental Health Advocate",
    story: "Finding a supportive community that understands women's mental health challenges has been life-changing.",
    image: "https://images.unsplash.com/photo-1758273241090-b7d744465ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRhbCUyMGhlYWx0aCUyMHRoZXJhcHklMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc3MDEwNjQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 189,
    comments: 32,
  },
  {
    name: "Priya S.",
    role: "Wellness Coach",
    story: "I love sharing my knowledge and learning from other women's experiences. This community is truly empowering.",
    image: "https://images.unsplash.com/photo-1640745690924-b82edc886b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MDEwNjQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 312,
    comments: 67,
  },
];

const communityFeatures = [
  {
    icon: Users,
    title: "Support Groups",
    description: "Join topic-based groups and connect with women facing similar challenges",
  },
  {
    icon: MessageCircle,
    title: "Forums & Discussions",
    description: "Engage in meaningful conversations about health, wellness, and empowerment",
  },
  {
    icon: Share2,
    title: "Share Your Story",
    description: "Inspire others by sharing your journey and experiences",
  },
  {
    icon: Heart,
    title: "Peer Support",
    description: "Get encouragement and advice from a caring community",
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with thousands of women, share experiences, and support each other on the wellness journey
          </p>
        </div>

        {/* Community Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                  <Icon className="size-7 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Community Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Heart className="size-4 text-pink-500" />
                      {story.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="size-4 text-purple-500" />
                      {story.comments}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
          <p className="text-lg mb-6 opacity-90">
            Be part of a supportive community that celebrates women's health and wellness
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
}
