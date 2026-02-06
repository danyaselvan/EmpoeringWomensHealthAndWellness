import { BookOpen, FileText, Video, Headphones, Download, ExternalLink } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

const resources = {
  articles: [
    {
      title: "Understanding Reproductive Health",
      category: "Health",
      readTime: "5 min read",
      icon: FileText,
    },
    {
      title: "Mental Wellness During Life Transitions",
      category: "Mental Health",
      readTime: "7 min read",
      icon: FileText,
    },
    {
      title: "Financial Planning for Women",
      category: "Finance",
      readTime: "10 min read",
      icon: FileText,
    },
    {
      title: "Workplace Rights & Harassment Prevention",
      category: "Safety",
      readTime: "6 min read",
      icon: FileText,
    },
  ],
  videos: [
    {
      title: "Yoga for Hormonal Balance",
      category: "Fitness",
      duration: "15 min",
      icon: Video,
    },
    {
      title: "Nutrition for Women's Health",
      category: "Nutrition",
      duration: "20 min",
      icon: Video,
    },
    {
      title: "Building Confidence & Self-Esteem",
      category: "Personal Growth",
      duration: "12 min",
      icon: Video,
    },
  ],
  podcasts: [
    {
      title: "Women's Health Matters",
      category: "Health",
      duration: "30 min",
      icon: Headphones,
    },
    {
      title: "Empowerment Stories",
      category: "Inspiration",
      duration: "25 min",
      icon: Headphones,
    },
    {
      title: "Career & Leadership",
      category: "Professional",
      duration: "35 min",
      icon: Headphones,
    },
  ],
};

export function ResourceLibrary() {
  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Educational Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access a comprehensive library of resources covering health, wellness, financial literacy, and empowerment
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.articles.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                        <Icon className="size-6 text-purple-600" />
                      </div>
                      <ExternalLink className="size-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-purple-600 transition-colors">{resource.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-600 font-medium">{resource.category}</span>
                      <span className="text-gray-500">{resource.readTime}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.videos.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-colors">
                        <Icon className="size-6 text-pink-600" />
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">{resource.duration}</div>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-pink-600 transition-colors">{resource.title}</h3>
                    <span className="text-pink-600 font-medium text-sm">{resource.category}</span>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="podcasts">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.podcasts.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                        <Icon className="size-6 text-indigo-600" />
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">{resource.duration}</div>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-indigo-600 transition-colors">{resource.title}</h3>
                    <span className="text-indigo-600 font-medium text-sm">{resource.category}</span>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
              <BookOpen className="size-8 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">100+ Articles</h3>
            <p className="text-sm text-gray-600">Comprehensive guides on women's health and wellness topics</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 mb-4">
              <Video className="size-8 text-pink-600" />
            </div>
            <h3 className="font-bold mb-2">Expert Videos</h3>
            <p className="text-sm text-gray-600">Learn from healthcare professionals and wellness experts</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-4">
              <Download className="size-8 text-indigo-600" />
            </div>
            <h3 className="font-bold mb-2">Downloadable Guides</h3>
            <p className="text-sm text-gray-600">Save resources for offline access and future reference</p>
          </div>
        </div>
      </div>
    </section>
  );
}
