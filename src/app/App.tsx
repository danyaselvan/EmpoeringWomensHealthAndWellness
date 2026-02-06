import { useState } from 'react';
import { Home, Activity, Users, BookOpen, User } from 'lucide-react';
import { HomeScreen } from '@/app/components/mobile/HomeScreen';
import { TrackerScreen } from '@/app/components/mobile/TrackerScreen';
import { CommunityScreen } from '@/app/components/mobile/CommunityScreen';
import { ResourcesScreen } from '@/app/components/mobile/ResourcesScreen';
import { ProfileScreen } from '@/app/components/mobile/ProfileScreen';

type Screen = 'home' | 'tracker' | 'community' | 'resources' | 'profile';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  return (
    <div className="size-full bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'tracker' && <TrackerScreen />}
        {activeScreen === 'community' && <CommunityScreen />}
        {activeScreen === 'resources' && <ResourcesScreen />}
        {activeScreen === 'profile' && <ProfileScreen />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-2 safe-area-bottom">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveScreen('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeScreen === 'home'
                ? 'text-purple-600 bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <Home className={`size-6 ${activeScreen === 'home' ? 'fill-purple-600' : ''}`} />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => setActiveScreen('tracker')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeScreen === 'tracker'
                ? 'text-purple-600 bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <Activity className="size-6" />
            <span className="text-xs font-medium">Tracker</span>
          </button>

          <button
            onClick={() => setActiveScreen('community')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeScreen === 'community'
                ? 'text-purple-600 bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <Users className="size-6" />
            <span className="text-xs font-medium">Community</span>
          </button>

          <button
            onClick={() => setActiveScreen('resources')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeScreen === 'resources'
                ? 'text-purple-600 bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <BookOpen className="size-6" />
            <span className="text-xs font-medium">Resources</span>
          </button>

          <button
            onClick={() => setActiveScreen('profile')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeScreen === 'profile'
                ? 'text-purple-600 bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <User className="size-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
