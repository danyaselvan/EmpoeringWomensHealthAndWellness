import { Heart, Users, BookOpen, Activity, Shield, Video, DollarSign, Star } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Heart,
    title: "Women's Health Hub",
    description: "Comprehensive information and resources for women's health needs",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Library of resources covering women's rights, health, and financial literacy",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Activity,
    title: "Health & Fitness",
    description: "Track your health metrics, menstrual cycles, and fitness goals",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other women, share stories, and find support",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Video,
    title: "Telehealth Services",
    description: "Access healthcare professionals from the comfort of your home",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Shield,
    title: "Safety & Support",
    description: "Resources for gender-based violence and workplace harassment",
    color: "from-rose-400 to-red-500",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy",
    description: "Tools and resources for financial empowerment",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Star,
    title: "Inspirational Stories",
    description: "Read success stories of women who overcame challenges",
    color: "from-pink-400 to-purple-500",
  },
];

export function FeatureOrbit() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform with features designed specifically for women's health and wellness
          </p>
        </div>

        {/* Orbit Design - Desktop */}
        <div className="hidden lg:block relative h-[600px] mb-20">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm">Features</div>
              </div>
            </div>
          </div>

          {/* Orbiting Features */}
          {features.map((feature, index) => {
            const angle = (index * 360) / features.length;
            const radius = 250;
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                onClick={() => setSelectedFeature(index)}
              >
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg ${
                  selectedFeature === index ? 'ring-4 ring-purple-300 scale-110' : ''
                }`}>
                  <Icon className="size-10 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Feature Details - Desktop */}
        <div className="hidden lg:block">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
            {(() => {
              const feature = features[selectedFeature];
              const Icon = feature.icon;
              return (
                <>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </>
              );
            })()}
          </div>
        </div>

        {/* Grid Layout - Mobile */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
