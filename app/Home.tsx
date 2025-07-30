"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { featuresGridList } from "./utils/data";
import { SparklesCore } from "./components/ui/sparkles";
import dynamic from "next/dynamic";

// Client-side only component for dotlottie-player
const ClientOnlyDotLottie = dynamic(
  () =>
    Promise.resolve(({ src, autoplay, loop, style }: any) => {
      useEffect(() => {
        // Import the component only on client side
        import("@dotlottie/player-component");
      }, []);

      return (
        <dotlottie-player
          src={src}
          autoplay={autoplay}
          loop={loop}
          style={style}
        />
      );
    }),
  { ssr: false }
);

// Type declaration for dotlottie-player custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": {
        src: string;
        autoplay?: string;
        loop?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can adjust the loading duration as needed
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <ClientOnlyDotLottie
          src="https://lottie.host/703f827f-e896-4f21-b4c5-0436d64cb912/Us6WO8e7Ee.lottie"
          autoplay=""
          loop=""
          style={{ width: 550, height: 550 }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#EE82EE"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 text-center">
          {/* Welcome Text */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl tracking-tight text-gray-300 mb-4 sm:mb-6">
            Welcome to
          </p>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-5xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight sm:leading-tight md:leading-tight">
            <span className="inline-block">
              RAPID
              <span className="relative whitespace-nowrap text-white block sm:inline-block mt-2 sm:mt-0 sm:ml-4">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70 hidden sm:block"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">FRAME</span>
              </span>
            </span>
          </h1>

          {/* Description */}
          <div className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-3xl">
            <p className="text-base sm:text-lg lg:text-xl tracking-tight text-gray-300 leading-relaxed">
              <span className="block sm:inline">
                Edit your videos from your PC or phone no downloads, no
                registration, no watermarks.
              </span>
              <span className="block sm:inline mt-2 sm:mt-0 sm:ml-1">
                <span className="font-semibold text-yellow-300">
                  Online, Free and Open Source
                </span>
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Secondary Button */}
            <Link
              href="https://github.com/mohyware/clip.js"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium text-white bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-full transition-all duration-300 hover:bg-gray-700/60 hover:border-gray-500/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.04 1.53 7.43 2.81l5.48-5.48C33.36 3.58 28.98 1.5 24 1.5 14.84 1.5 7.38 7.94 5.08 16.53l6.76 5.25C13.03 15.49 17.91 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 46.5c6.48 0 11.91-2.13 15.88-5.79l-7.32-5.98c-2.03 1.42-4.61 2.27-8.56 2.27-6.02 0-11.14-4.06-12.97-9.54l-7.42 5.72C8.88 41.26 15.91 46.5 24 46.5z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M45.11 24.5c0-1.65-.15-2.85-.47-4.11H24v7.8h11.98c-.24 2.02-1.52 5.04-4.41 7.03l7.31 5.98C43.47 37.66 45.11 31.89 45.11 24.5z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M11.03 27.46C10.59 26.16 10.32 24.69 10.32 23.12c0-1.57.27-3.04.71-4.34l-6.76-5.25C2.37 17.31 1.5 20.56 1.5 24s.87 6.69 2.77 10.47l6.76-5.72z"
                  />
                </svg>
                Google Sign In
              </span>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  Lightning Fast
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Process videos instantly with our optimized web-based engine
                </p>
              </div>

              <div className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  100% Private
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Your videos never leave your browser. Complete privacy
                  guaranteed
                </p>
              </div>

              <div className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  Always Free
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  No subscriptions, no hidden fees. Professional editing for
                  everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
}
