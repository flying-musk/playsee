/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // viewBox is required to resize SVGs with CSS.
                      // @see https://github.com/svg/svgo/issues/1128
                      removeViewBox: false,

                      // prevent id removal or minify to a duplicate id
                      cleanupIds: false
                    }
                  }
                }
              ]
            }
          }
        },
        'url-loader'
      ]
    })

    return config
  }
}

module.exports = nextConfig
