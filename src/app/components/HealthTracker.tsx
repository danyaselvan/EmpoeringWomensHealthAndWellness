import { Activity, Heart, Moon, Droplets, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

const metrics = [
  {
    icon: Heart,
    label: "Heart Rate",
    value: "72 bpm",
    trend: "+2%",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Activity,
    label: "Daily Steps",
    value: "8,432",
    trend: "+15%",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Moon,
    label: "Sleep Quality",
    value: "7.5 hrs",
    trend: "+5%",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Droplets,
    label: "Hydration",
    value: "2.1 L",
    trend: "+8%",
    color: "from-cyan-400 to-blue-500",
  },
];

export function HealthTracker() {
  return (
    <section id="tracker" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Track Your Health
              </span>
              <br />
              <span className="text-gray-900">All in One Place</span>
            </h2>

            <p className="text-xl text-gray-600">
              Monitor your menstrual cycle, track fitness goals, manage your health metrics, 
              and get personalized insights to support your wellness journey.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} mb-3`}>
                      <Icon className="size-5 text-white" />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <TrendingUp className="size-3" />
                        {metric.trend}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-700">Menstrual cycle tracking & predictions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                <span className="text-gray-700">Personalized health insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span className="text-gray-700">Integration with wearable devices</span>
              </div>
            </div>
          </div>

          {/* Right Image/Dashboard */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1723406230636-aa8c4ac1e6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBleGVyY2lzZSUyMGhlYWx0aHxlbnwxfHx8fDE3NzAwNDEwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Women fitness and exercise"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              
              {/* Overlay Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-700">This Week's Progress</div>
                  <div className="text-xs text-green-600 font-semibold">+12%</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Fitness Goals</span>
                      <span className="text-gray-900 font-semibold">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Wellness Score</span>
                      <span className="text-gray-900 font-semibold">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
