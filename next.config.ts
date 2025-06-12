import type { NextConfig } from 'next';
import withSerwistInit from '@serwist/next';

// Initialize Serwist with your configuration
const withSerwist = withSerwistInit({
  // Your Serwist configuration
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production',
});

const nextConfig: NextConfig = {
  // Other Next.js config options
  turbopack: {
    // Example: adding an alias and custom file extension
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  }
};

// Wrap the nextConfig with Serwist
export default withSerwist(nextConfig);
