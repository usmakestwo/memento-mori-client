const withOffline = require('next-offline')
const withManifest = require('next-manifest')
const { withPlugins } = require('next-compose-plugins')

const manifest = {
  short_name: 'memento-mori',
  name: 'memento-mori-client',
  description: 'A client application for optimizing learning',
  dir: 'ltr',
  lang: 'en',
  icons: [
    {
      src: 'favicon.ico',
      sizes: '64x64 32x32 24x24 16x16',
      type: 'image/x-icon',
    },
  ],
  start_url: '/',
  display: 'standalone',
  theme_color: '#ffffff',
  background_color: '#ffffff',
}

const nextConfig = {
  distDir: 'build',
}

module.exports = withPlugins([
  [withManifest({ manifest })],
  [withOffline, {
    workboxOpts: {
      runtimeCaching: [
        // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
          },
        },
        // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        // Cache api request will try and fetch the latest request from the network
        {
          urlPattern: /^https:\/\/us-east1-memento-mori-universitas\.cloudfunctions\.net/,
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        // Cache JavaScript and CSS
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
        },
      ],
    },
  }],
], nextConfig)
