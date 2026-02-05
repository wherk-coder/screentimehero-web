"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Star, 
  CheckCircle,
  ArrowLeft,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3A7BFA] via-[#2563EB] to-[#1d4ed8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC300] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to home</span>
          </Link>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 gap-12">
          {/* Left: Message */}
          <motion.div 
            className="max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-[#FFC300] fill-[#FFC300]" />
              <span>7-Day Free Trial • No Credit Card Required</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              You're Moments Away From Solving Families' Biggest Pain Point
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Download Screen Time Hero and transform screen time battles into motivation. 
              Your first week is completely free.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {[
                { icon: CheckCircle, text: "COPPA Compliant" },
                { icon: Shield, text: "Bank-Level Security" },
                { icon: Zap, text: "Setup in 5 Minutes" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center space-x-2 text-blue-200">
                  <badge.icon className="w-5 h-5" />
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* App Store Button */}
              <motion.a
                href="#"
                className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="#"
                className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl opacity-50 cursor-not-allowed"
                whileHover={{ scale: 1 }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </motion.a>
            </div>

            <p className="text-sm text-blue-200 mt-4">
              Google Play version coming soon
            </p>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-[#1C1F26] rounded-[3rem] p-3 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 bg-[#F4F5F7] flex items-center justify-center">
                  <div className="w-20 h-4 bg-black rounded-full" />
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Good morning,</p>
                      <p className="font-bold text-sm">Emma's Tasks</p>
                    </div>
                    <div className="w-8 h-8 bg-[#FFC300] rounded-full flex items-center justify-center text-sm">
                      👧
                    </div>
                  </div>

                  {/* Points Card */}
                  <div className="bg-gradient-to-br from-[#3A7BFA] to-[#2563EB] rounded-2xl p-4 text-white">
                    <p className="text-xs opacity-80">Available Points</p>
                    <p className="text-3xl font-bold">245</p>
                    <p className="text-xs opacity-80 mt-1">= 245 min screen time</p>
                  </div>

                  {/* Tasks */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">Today's Tasks</p>
                    {[
                      { task: "Clean bedroom", points: 15, status: "done" },
                      { task: "Math homework", points: 20, status: "pending" },
                      { task: "Walk the dog", points: 10, status: "pending" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2">
                        <div className="flex items-center space-x-2">
                          {item.status === "done" ? (
                            <CheckCircle className="w-5 h-5 text-[#4CCB6E]" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-400" />
                          )}
                          <span className={`text-sm ${item.status === "done" ? "line-through text-gray-400" : ""}`}>
                            {item.task}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-[#FFC300]">+{item.points}</span>
                      </div>
                    ))}
                  </div>

                  {/* Redeem Button */}
                  <button className="w-full py-3 bg-[#FFC300] text-[#1C1F26] font-semibold rounded-xl text-sm">
                    Redeem Rewards
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#4CCB6E] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Task Approved!</p>
                  <p className="text-xs text-gray-500">+20 points</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#FFC300] rounded-full flex items-center justify-center text-lg">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-semibold">Achievement!</p>
                  <p className="text-xs text-gray-500">Super Helper</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: Stats */}
        <motion.div 
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center text-white">
            {[
              { value: "10K+", label: "Happy Families" },
              { value: "4.8★", label: "App Store Rating" },
              { value: "2M+", label: "Tasks Completed" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
