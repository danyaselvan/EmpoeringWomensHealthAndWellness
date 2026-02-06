import { BookOpen, Video, Headphones, FileText, Search, TrendingUp, Clock, Download, Play, Star } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

const featuredArticles = [
  {
    title: 'Understanding PCOS: A Complete Guide',
    category: 'Health',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvciUyMHRlbGVtZWRpY2luZSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwMTA2NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
  {
    title: 'Mental Wellness in Modern Life',
    category: 'Mental Health',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1758273241090-b7d744465ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRhbCUyMGhlYWx0aCUyMHRoZXJhcHklMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc3MDEwNjQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
];

const articles = [
  { title: 'Reproductive Health Basics', category: 'Health', time: '5 min' },
  { title: 'Nutrition for Every Phase', category: 'Nutrition', time: '7 min' },
  { title: 'Financial Planning Guide', category: 'Finance', time: '10 min' },
  { title: 'Workplace Rights 101', category: 'Safety', time: '6 min' },
];

const videos = [
  { title: 'Yoga for Hormonal Balance', duration: '15 min', views: '12K' },
  { title: 'Nutrition Tips', duration: '20 min', views: '8K' },
  { title: 'Mental Health Talk', duration: '25 min', views: '15K' },
];

const podcasts = [
  { title: "Women's Health Matters", duration: '30 min', episode: 'Ep. 24' },
  { title: 'Empowerment Stories', duration: '25 min', episode: 'Ep. 18' },
  { title: 'Career & Leadership', duration: '35 min', episode: 'Ep. 32' },
];

export function ResourcesScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-4">Resources</h1>
        
        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-2">
          <Search className="size-5 text-white/70" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
          />
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Featured Content */}
        <div>
          <h2 className="text-lg font-bold mb-3">Featured Content</h2>
          <div className="space-y-3">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden active:scale-98 transition-transform">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="size-4 fill-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">{article.rating}</span>
                    </div>
                    <button className="text-purple-600 text-sm font-medium">Read Now →</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Browse by Category */}
        <div>
          <h2 className="text-lg font-bold mb-3">Browse Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Health', icon: '💊', color: 'from-pink-100 to-rose-100', textColor: 'text-pink-700' },
              { name: 'Fitness', icon: '🏃‍♀️', color: 'from-green-100 to-emerald-100', textColor: 'text-green-700' },
              { name: 'Mental Health', icon: '🧠', color: 'from-purple-100 to-violet-100', textColor: 'text-purple-700' },
              { name: 'Nutrition', icon: '🥗', color: 'from-orange-100 to-amber-100', textColor: 'text-orange-700' },
              { name: 'Finance', icon: '💰', color: 'from-blue-100 to-cyan-100', textColor: 'text-blue-700' },
              { name: 'Safety', icon: '🛡️', color: 'from-red-100 to-pink-100', textColor: 'text-red-700' },
            ].map((category, index) => (
              <Card key={index} className={`p-4 bg-gradient-to-br ${category.color} border-none active:scale-95 transition-transform`}>
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className={`font-bold ${category.textColor}`}>{category.name}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div>
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-3">
              {articles.map((article, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 active:scale-98 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="size-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">{article.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="text-purple-600">{article.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {article.time}
                      </span>
                    </div>
                  </div>
                  <Download className="size-5 text-gray-400" />
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="videos" className="space-y-3">
              {videos.map((video, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 active:scale-98 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center flex-shrink-0">
                    <Video className="size-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">{video.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="size-3" />
                        {video.views} views
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                    <Play className="size-5 text-white fill-white ml-0.5" />
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="podcasts" className="space-y-3">
              {podcasts.map((podcast, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 active:scale-98 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                    <Headphones className="size-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">{podcast.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span>{podcast.episode}</span>
                      <span>•</span>
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Play className="size-5 text-white fill-white ml-0.5" />
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Stats */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
          <h3 className="font-bold mb-4 text-center">Resource Library</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">100+</div>
              <div className="text-xs text-gray-600 mt-1">Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">50+</div>
              <div className="text-xs text-gray-600 mt-1">Videos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-600">30+</div>
              <div className="text-xs text-gray-600 mt-1">Podcasts</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
