import { Calendar, Heart, Activity, Moon, Droplets, Plus, TrendingUp, ChevronRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export function TrackerScreen() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-2">Health Tracker</h1>
        <p className="text-purple-100 text-sm">Monitor your wellness journey</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Cycle Tracker - Featured */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <h2 className="font-bold">Menstrual Cycle</h2>
              </div>
              <button className="text-sm font-medium">Details →</button>
            </div>
            <div className="text-3xl font-bold mb-1">Day 12</div>
            <p className="text-sm text-pink-100">Follicular Phase - 16 days until next period</p>
          </div>
          <div className="p-4 bg-pink-50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Predicted Start Date</span>
              <span className="font-bold text-gray-900">Feb 19, 2026</span>
            </div>
          </div>
        </Card>

        {/* Quick Add */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Log</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-3 p-4 border-2 border-dashed border-purple-200 rounded-2xl hover:border-purple-400 active:scale-95 transition-all">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Plus className="size-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Add Symptom</div>
                <div className="text-xs text-gray-600">Log how you feel</div>
              </div>
            </button>

            <button className="flex items-center gap-3 p-4 border-2 border-dashed border-pink-200 rounded-2xl hover:border-pink-400 active:scale-95 transition-all">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Plus className="size-5 text-pink-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Add Mood</div>
                <div className="text-xs text-gray-600">Track emotions</div>
              </div>
            </button>
          </div>
        </div>

        {/* Today's Metrics */}
        <div>
          <h2 className="text-lg font-bold mb-3">Today's Tracking</h2>
          
          <div className="space-y-3">
            {/* Heart Rate */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                    <Heart className="size-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Heart Rate</h3>
                    <p className="text-sm text-gray-600">Average today</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">72</div>
                  <div className="text-xs text-gray-500">bpm</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-400 to-pink-400 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <TrendingUp className="size-3" />
                  Normal
                </span>
              </div>
            </Card>

            {/* Activity */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Activity className="size-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Daily Steps</h3>
                    <p className="text-sm text-gray-600">Goal: 10,000 steps</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">8,432</div>
                  <div className="text-xs text-gray-500">84%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" style={{ width: '84%' }}></div>
                </div>
                <button className="text-xs text-purple-600 font-medium">
                  Log +
                </button>
              </div>
            </Card>

            {/* Sleep */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <Moon className="size-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sleep Quality</h3>
                    <p className="text-sm text-gray-600">Last night</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">7.5</div>
                  <div className="text-xs text-gray-500">hours</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <TrendingUp className="size-3" />
                  Good
                </span>
              </div>
            </Card>

            {/* Hydration */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <Droplets className="size-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Hydration</h3>
                    <p className="text-sm text-gray-600">Goal: 3.0 L</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">2.1</div>
                  <div className="text-xs text-gray-500">liters</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <button className="text-xs text-purple-600 font-medium">
                  Add +
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Weekly Summary */}
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Weekly Summary</h3>
            <button className="text-sm text-purple-600 font-medium flex items-center gap-1">
              View All
              <ChevronRight className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <div className="text-xs text-gray-600 mt-1">Wellness Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">5</div>
              <div className="text-xs text-gray-600 mt-1">Goals Met</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-600">7.2</div>
              <div className="text-xs text-gray-600 mt-1">Avg Sleep (hrs)</div>
            </div>
          </div>
        </Card>

        {/* Add More Button */}
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Plus className="size-5 mr-2" />
          Add Custom Tracker
        </Button>
      </div>
    </div>
  );
}
