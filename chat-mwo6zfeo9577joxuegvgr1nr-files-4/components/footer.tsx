import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent" data-macaly="footer-logo">
                ALFA LEARNING
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed" data-macaly="footer-description">
              Preparing students for the future with comprehensive online education. 
              From basic foundations to advanced GCE levels, we bridge the gap between 
              traditional learning and tomorrow's digital world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="bg-indigo-600/20 p-2 rounded-lg group-hover:bg-indigo-600/30 transition-colors">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <span className="text-gray-300">Enrol.AlfaLearning@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-300">WhatsApp: +6281371352788</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-300">International Online Platform</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Our Classes</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Join Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Courses</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>English Classes</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Chinese Classes</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Mathematics</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>LCCI Courses</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>GCE O-Level</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>GCE A-Level</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ALFA LEARNING by SRP (Sinar Rimba Persada). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

