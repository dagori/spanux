import Vue from 'vue'
import ImageminWebpackPlugin from 'imagemin-webpack-plugin'

Vue.use(ImageminWebpackPlugin)

plugins: [
  new ImageminPlugin({
      //disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '85-90'
      }
  })
}
