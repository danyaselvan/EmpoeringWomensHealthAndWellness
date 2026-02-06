import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400 flex items-center justify-center">
                <Heart className="size-5 text-white fill-white" />
              </div>
              <span className="text-xl font-semibold">HerWellness</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering women through comprehensive health and wellness resources, community support, and personalized care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#tracker" className="hover:text-purple-400 transition-colors">Health Tracker</a></li>
              <li><a href="#community" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#resources" className="hover:text-purple-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Safety Resources</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="size-5 mt-0.5 flex-shrink-0 text-purple-400" />
                <span>support@herwellness.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 mt-0.5 flex-shrink-0 text-purple-400" />
                <span>1-800-WELLNESS</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-5 mt-0.5 flex-shrink-0 text-purple-400" />
                <span>Available globally, 24/7 support</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-800">
              <p className="text-sm text-purple-300">
                <strong>Crisis Support:</strong> If you're in crisis, please call your local emergency services or crisis hotline immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 HerWellness. All rights reserved. Built with ❤️ for women's health.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Languages</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
