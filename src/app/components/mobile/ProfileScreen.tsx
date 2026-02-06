import { Settings, ChevronRight, Bell, Lock, HelpCircle, FileText, Heart, Users, BookOpen, LogOut, Edit, Award, Target, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Profile */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center text-white text-2xl font-bold border-4 border-white">
              SM
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Edit className="size-4 text-purple-600" />
            </button>
          </div>
          <div className="flex-1 text-white">
            <h1 className="text-2xl font-bold mb-1">Sarah Martinez</h1>
            <p className="text-purple-100 text-sm">Member since Jan 2026</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Settings className="size-5 text-white" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30">
            <div className="text-2xl font-bold text-white mb-1">42</div>
            <div className="text-xs text-purple-100">Days Active</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30">
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-xs text-purple-100">Goals Met</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/30">
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-xs text-purple-100">Badges</div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Achievements */}
        <div>
          <h2 className="text-lg font-bold mb-3">Recent Achievements</h2>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                <Award className="size-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">7-Day Streak!</h3>
                <p className="text-sm text-gray-600">Logged health data for 7 days in a row</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: '🏆', name: 'Beginner' },
                { icon: '💪', name: 'Strong' },
                { icon: '🎯', name: 'Focused' },
                { icon: '⭐', name: 'Star' },
              ].map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-gray-600">{badge.name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div>
          <h2 className="text-lg font-bold mb-3">This Month</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Target className="size-4 text-purple-600" />
                </div>
                <span className="text-sm text-gray-600">Goals</span>
              </div>
              <div className="text-2xl font-bold">5/7</div>
              <div className="text-xs text-gray-500">Completed</div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <TrendingUp className="size-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Wellness</span>
              </div>
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs text-gray-500">Avg Score</div>
            </Card>
          </div>
        </div>

        {/* My Activity */}
        <div>
          <h2 className="text-lg font-bold mb-3">My Activity</h2>
          <Card className="divide-y divide-gray-100">
            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Heart className="size-5 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">Saved Resources</div>
                <div className="text-sm text-gray-600">24 items</div>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Users className="size-5 text-pink-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">My Groups</div>
                <div className="text-sm text-gray-600">5 groups joined</div>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <BookOpen className="size-5 text-indigo-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">Reading History</div>
                <div className="text-sm text-gray-600">18 articles read</div>
              </div>
              <ChevronRight className="size-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-lg font-bold mb-3">Settings</h2>
          <Card className="divide-y divide-gray-100">
            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <Bell className="size-5 text-gray-600" />
              <span className="flex-1 text-left font-medium">Notifications</span>
              <ChevronRight className="size-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <Lock className="size-5 text-gray-600" />
              <span className="flex-1 text-left font-medium">Privacy & Security</span>
              <ChevronRight className="size-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <HelpCircle className="size-5 text-gray-600" />
              <span className="flex-1 text-left font-medium">Help & Support</span>
              <ChevronRight className="size-5 text-gray-400" />
            </button>

            <button className="w-full p-4 flex items-center gap-3 active:bg-gray-50 transition-colors">
              <FileText className="size-5 text-gray-600" />
              <span className="flex-1 text-left font-medium">Terms & Privacy</span>
              <ChevronRight className="size-5 text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Crisis Support */}
        <Card className="p-4 bg-red-50 border-red-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <Heart className="size-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-red-900 mb-1">Need Immediate Help?</h3>
              <p className="text-sm text-red-700 mb-3">
                If you're in crisis, please reach out to emergency services or a crisis hotline.
              </p>
              <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
                Access Crisis Resources
              </Button>
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
          <LogOut className="size-5 mr-2" />
          Log Out
        </Button>

        {/* App Info */}
        <div className="text-center text-sm text-gray-500 pb-4">
          <p>HerWellness App v1.0.0</p>
          <p className="text-xs mt-1">Made with ❤️ for women's health</p>
        </div>
      </div>
    </div>
  );
}
