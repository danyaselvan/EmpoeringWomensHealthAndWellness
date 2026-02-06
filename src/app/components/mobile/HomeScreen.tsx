import { Bell, Search, Heart, TrendingUp, Calendar, Droplets, Moon, Activity, ChevronRight, Sparkles, Shield, Video } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function HomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-purple-100 text-sm">Welcome back,</p>
            <h1 className="text-white text-2xl font-bold">Sarah! 👋</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Search className="size-5 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative">
              <Bell className="size-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-400 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Today's Wellness Score</span>
            <span className="text-white text-2xl font-bold">92</span>
          </div>
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <TrendingUp className="size-3 text-green-300" />
            <span className="text-white/90 text-xs">+5% from yesterday</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Sparkles className="size-5 text-purple-600" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: 'Cycle', color: 'from-pink-400 to-rose-400' },
              { icon: Activity, label: 'Fitness', color: 'from-green-400 to-emerald-400' },
              { icon: Moon, label: 'Sleep', color: 'from-indigo-400 to-purple-400' },
              { icon: Droplets, label: 'Hydration', color: 'from-cyan-400 to-blue-400' },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button key={index} className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg active:scale-95 transition-transform`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Insights */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Daily Insights</h2>
            <button className="text-sm text-purple-600 font-medium">View All</button>
          </div>
          
          <Card className="p-4 mb-3 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                <Calendar className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Cycle Day 12</h3>
                <p className="text-sm text-gray-600 mb-2">You're in your follicular phase. Great time for high-intensity workouts!</p>
                <button className="text-sm text-purple-600 font-medium">Learn More →</button>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                <Activity className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Almost There!</h3>
                <p className="text-sm text-gray-600 mb-2">You've completed 8,432 steps today. Just 1,568 more to reach your goal!</p>
                <div className="flex gap-2">
                  <button className="text-sm text-green-600 font-medium">Track Now →</button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Health Metrics */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Health Metrics</h2>
            <button className="text-sm text-purple-600 font-medium">See All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <Heart className="size-4 text-red-500" />
                </div>
                <span className="text-sm text-gray-600">Heart Rate</span>
              </div>
              <div className="text-2xl font-bold">72 <span className="text-sm text-gray-500">bpm</span></div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="size-3" />
                Normal
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <Moon className="size-4 text-indigo-500" />
                </div>
                <span className="text-sm text-gray-600">Sleep</span>
              </div>
              <div className="text-2xl font-bold">7.5 <span className="text-sm text-gray-500">hrs</span></div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="size-3" />
                Good
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Droplets className="size-4 text-cyan-500" />
                </div>
                <span className="text-sm text-gray-600">Hydration</span>
              </div>
              <div className="text-2xl font-bold">2.1 <span className="text-sm text-gray-500">L</span></div>
              <div className="flex items-center gap-1 text-xs text-orange-600 mt-1">
                <TrendingUp className="size-3" />
                68% Goal
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <Activity className="size-4 text-green-500" />
                </div>
                <span className="text-sm text-gray-600">Steps</span>
              </div>
              <div className="text-2xl font-bold">8.4 <span className="text-sm text-gray-500">K</span></div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="size-3" />
                84% Goal
              </div>
            </Card>
          </div>
        </div>

        {/* Featured Services */}
        <div>
          <h2 className="text-lg font-bold mb-3">Featured Services</h2>
          
          <div className="space-y-3">
            <Card className="p-4 flex items-center gap-3 active:scale-98 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <Video className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Telehealth Consultation</h3>
                <p className="text-sm text-gray-600">Connect with healthcare professionals</p>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </Card>

            <Card className="p-4 flex items-center gap-3 active:scale-98 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-400 flex items-center justify-center flex-shrink-0">
                <Shield className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Safety Support</h3>
                <p className="text-sm text-gray-600">24/7 crisis and support resources</p>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </Card>
          </div>
        </div>

        {/* Motivational Quote */}
        <Card className="p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white text-center">
          <p className="text-lg font-semibold mb-2">"You are stronger than you know"</p>
          <p className="text-sm opacity-90">Keep up the great work on your wellness journey!</p>
        </Card>
      </div>
    </div>
  );
}
