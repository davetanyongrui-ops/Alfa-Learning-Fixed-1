/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build configuration
  eslint: {
    // Only ignore during builds in development
    // In production, we want to catch actual errors
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  typescript: {
    // Enable type checking in production builds
    // Only ignore in development for faster builds
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // Image optimization
  images: { 
    unoptimized: true // Required for static exports if needed
  },
  
  // Disable dev indicators in production
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      "*.macaly.dev",
      "*.macaly.app", 
      "*.macaly-app.com",
      "*.macaly-user-data.dev",
    ],
  }),
  
  // Performance optimizations
  experimental: {
    // Optimize memory usage during builds
    webpackMemoryOptimizations: true,
    // Improve build performance
    ...(process.env.NODE_ENV === 'development' && {
      preloadEntriesOnStart: false,
    }),
  },
  
  // Custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Only apply macaly-tagger in development
    if (dev) {
      config.module.rules.unshift({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "macaly-tagger",
          },
        ],
        enforce: "pre", // Run before other loaders
      });
    }
    
    // Optimize for production builds
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
  
  // Output configuration for static hosting
  output: 'standalone', // Optimized for deployment
  
  // Compression and performance
  compress: true,
  
  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig

