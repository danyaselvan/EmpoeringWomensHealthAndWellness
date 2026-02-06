import { MessageCircle, Heart, Share2, Search, Filter, Users, Plus, Bookmark } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

const posts = [
  {
    id: 1,
    author: 'Sarah M.',
    avatar: 'SM',
    time: '2h ago',
    content: 'Just completed my first 5K run! This journey started with small steps. Never give up on yourself! 💪',
    image: 'https://images.unsplash.com/photo-1723406230636-aa8c4ac1e6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBleGVyY2lzZSUyMGhlYWx0aHxlbnwxfHx8fDE3NzAwNDEwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 234,
    comments: 45,
    category: 'Fitness',
  },
  {
    id: 2,
    author: 'Maya K.',
    avatar: 'MK',
    time: '5h ago',
    content: 'Therapy has been such a game-changer. Remember, asking for help is a sign of strength, not weakness. 💜',
    likes: 189,
    comments: 32,
    category: 'Mental Health',
  },
  {
    id: 3,
    author: 'Priya S.',
    avatar: 'PS',
    time: '1d ago',
    content: 'Started tracking my cycle and it\'s helped me understand my body so much better. Knowledge is power!',
    image: 'https://images.unsplash.com/photo-1758274536471-912e9d20d4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHdlbGxuZXNzJTIwbWVkaXRhdGlvbiUyMHlvZ2F8ZW58MXx8fHwxNzcwMTA2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 312,
    comments: 67,
    category: 'Wellness',
  },
];

const groups = [
  { name: 'PCOS Support', members: '2.3K', color: 'from-purple-400 to-pink-400' },
  { name: 'New Moms', members: '5.1K', color: 'from-blue-400 to-cyan-400' },
  { name: 'Fitness Goals', members: '8.7K', color: 'from-green-400 to-emerald-400' },
  { name: 'Mental Wellness', members: '4.2K', color: 'from-indigo-400 to-purple-400' },
];

export function CommunityScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-4">Community</h1>
        
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-2">
            <Search className="size-5 text-white/70" />
            <input 
              type="text" 
              placeholder="Search posts, people..." 
              className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
            />
          </div>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Filter className="size-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* My Groups */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">My Groups</h2>
            <button className="text-sm text-purple-600 font-medium">See All</button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            {groups.map((group, index) => (
              <Card key={index} className="p-4 min-w-[160px] flex-shrink-0">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-3`}>
                  <Users className="size-6 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1">{group.name}</h3>
                <p className="text-xs text-gray-600">{group.members} members</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Post Button */}
        <Card className="p-4 flex items-center gap-3 active:scale-98 transition-transform cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <Plus className="size-5 text-white" />
          </div>
          <span className="text-gray-500">Share your story or ask a question...</span>
        </Card>

        {/* Feed */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-bold">Community Feed</h2>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.time}</div>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <Bookmark className="size-5" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-800 mb-2">{post.content}</p>
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="p-4 flex items-center justify-around border-t border-gray-100">
                  <button className="flex items-center gap-2 text-gray-600 active:scale-95 transition-transform">
                    <Heart className="size-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 active:scale-95 transition-transform">
                    <MessageCircle className="size-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 active:scale-95 transition-transform">
                    <Share2 className="size-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Community CTA */}
        <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Find Your Tribe</h3>
          <p className="text-sm mb-4 opacity-90">Join groups, share experiences, and support each other</p>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Explore More Groups
          </Button>
        </Card>
      </div>
    </div>
  );
}
