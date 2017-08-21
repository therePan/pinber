// 清酒稻香
module.exports = {
  plugins: {
    'autoprefixer': {
      'browserslist': [
        '> 1%',
        'last 5 versions',
      ],
    },
    'postcss-pxtorem': {
      rootValue: 100,
      propWhiteList: [],
    },
  }
}