{
  [36mmode[39m: [31m'production'[39m,
  [36mcontext[39m: [31m'E:\\workspace\\vue3-mobile-github'[39m,
  [36mdevtool[39m: [34mfalse[39m,
  [36mnode[39m: {
    [36msetImmediate[39m: [34mfalse[39m,
    [36mprocess[39m: [31m'mock'[39m,
    [36mdgram[39m: [31m'empty'[39m,
    [36mfs[39m: [31m'empty'[39m,
    [36mnet[39m: [31m'empty'[39m,
    [36mtls[39m: [31m'empty'[39m,
    [36mchild_process[39m: [31m'empty'[39m
  },
  [36moutput[39m: {
    [36mpath[39m: [31m'E:\\workspace\\vue3-mobile-github\\dist'[39m,
    [36mfilename[39m: [31m'js/[name].[contenthash:8].js'[39m,
    [36mpublicPath[39m: [31m''[39m,
    [36mchunkFilename[39m: [31m'js/[name].[contenthash:8].js'[39m
  },
  [36mresolve[39m: {
    [36malias[39m: {
      [31m'@'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src'[39m,
      [36mvue$[39m: [31m'vue/dist/vue.runtime.esm-bundler.js'[39m,
      [31m'@assets'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\assets'[39m,
      [31m'@com'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\components'[39m,
      [31m'@hooks'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\hooks'[39m,
      [31m'@js'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\js'[39m,
      [31m'@pages'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\pages'[39m,
      [31m'@router'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\router'[39m,
      [31m'@store'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\store'[39m
    },
    [36mextensions[39m: [
      [31m'.tsx'[39m,
      [31m'.ts'[39m,
      [31m'.mjs'[39m,
      [31m'.js'[39m,
      [31m'.jsx'[39m,
      [31m'.vue'[39m,
      [31m'.json'[39m,
      [31m'.wasm'[39m
    ],
    [36mmodules[39m: [
      [31m'node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\node_modules'[39m
    ],
    [36mplugins[39m: [
      [32m/* config.resolve.plugin('pnp') */[39m
      {}
    ]
  },
  [36mresolveLoader[39m: {
    [36mmodules[39m: [
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-plugin-typescript\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-plugin-babel\\node_modules'[39m,
      [31m'node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\node_modules'[39m
    ],
    [36mplugins[39m: [
      [32m/* config.resolve.plugin('pnp-loaders') */[39m
      {}
    ]
  },
  [36mmodule[39m: {
    [36mnoParse[39m: [31m/^(vue|vue-router|vuex|vuex-router-sync)$/[39m,
    rules: [
      [32m/* config.module.rule('vue') */[39m
      {
        [36mtest[39m: [31m/\.vue$/[39m,
        use: [
          [32m/* config.module.rule('vue').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'4f36e37a'[39m
            }
          },
          [32m/* config.module.rule('vue').use('vue-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-loader-v16\\dist\\index.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'4f36e37a'[39m,
              [36mbabelParserPlugins[39m: [
                [31m'jsx'[39m,
                [31m'classProperties'[39m,
                [31m'decorators-legacy'[39m
              ]
            }
          }
        ]
      },
      [32m/* config.module.rule('images') */[39m
      {
        [36mtest[39m: [31m/\.(png|jpe?g|gif|webp)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('images').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('svg') */[39m
      {
        [36mtest[39m: [31m/\.(svg)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('svg').use('file-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('media') */[39m
      {
        [36mtest[39m: [31m/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('media').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'media/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('fonts') */[39m
      {
        [36mtest[39m: [31m/\.(woff2?|eot|ttf|otf)(\?.*)?$/i[39m,
        use: [
          [32m/* config.module.rule('fonts').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'fonts/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('pug') */[39m
      {
        [36mtest[39m: [31m/\.pug$/[39m,
        oneOf: [
          [32m/* config.module.rule('pug').oneOf('pug-vue') */[39m
          {
            [36mresourceQuery[39m: [31m/vue/[39m,
            use: [
              [32m/* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          },
          [32m/* config.module.rule('pug').oneOf('pug-template') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('pug').oneOf('pug-template').use('raw') */[39m
              {
                [36mloader[39m: [31m'raw-loader'[39m
              },
              [32m/* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('css') */[39m
      {
        [36mtest[39m: [31m/\.css$/[39m,
        oneOf: [
          [32m/* config.module.rule('css').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('postcss') */[39m
      {
        [36mtest[39m: [31m/\.p(ost)?css$/[39m,
        oneOf: [
          [32m/* config.module.rule('postcss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('scss') */[39m
      {
        [36mtest[39m: [31m/\.scss$/[39m,
        oneOf: [
          [32m/* config.module.rule('scss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('sass') */[39m
      {
        [36mtest[39m: [31m/\.sass$/[39m,
        oneOf: [
          [32m/* config.module.rule('sass').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('less') */[39m
      {
        [36mtest[39m: [31m/\.less$/[39m,
        oneOf: [
          [32m/* config.module.rule('less').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('stylus') */[39m
      {
        [36mtest[39m: [31m/\.styl(us)?$/[39m,
        oneOf: [
          [32m/* config.module.rule('stylus').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'[39m,
                [36moptions[39m: {
                  [36mhmr[39m: [34mfalse[39m,
                  [36mpublicPath[39m: [31m'../'[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('js') */[39m
      {
        [36mtest[39m: [31m/\.m?jsx?$/[39m,
        exclude: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36muse[39m: [
          [32m/* config.module.rule('js').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\babel-loader'[39m,
              [36mcacheIdentifier[39m: [31m'472952ca'[39m
            }
          },
          [32m/* config.module.rule('js').use('thread-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\thread-loader\\dist\\cjs.js'[39m
          },
          [32m/* config.module.rule('js').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          }
        ]
      },
      [32m/* config.module.rule('eslint') */[39m
      {
        [36menforce[39m: [31m'pre'[39m,
        [36mtest[39m: [31m/\.(vue|(j|t)sx?)$/[39m,
        exclude: [
          [31m/node_modules/[39m,
          [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\lib'[39m
        ],
        [36muse[39m: [
          [32m/* config.module.rule('eslint').use('eslint-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\eslint-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mextensions[39m: [
                [31m'.js'[39m,
                [31m'.jsx'[39m,
                [31m'.vue'[39m,
                [31m'.ts'[39m,
                [31m'.tsx'[39m
              ],
              [36mcache[39m: [34mtrue[39m,
              [36mcacheIdentifier[39m: [31m'06986a70'[39m,
              [36memitWarning[39m: [34mtrue[39m,
              [36memitError[39m: [34mfalse[39m,
              [36meslintPath[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\eslint'[39m,
              [36mformatter[39m: [34mundefined[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('ts') */[39m
      {
        [36mtest[39m: [31m/\.ts$/[39m,
        use: [
          [32m/* config.module.rule('ts').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'7b1bc816'[39m
            }
          },
          [32m/* config.module.rule('ts').use('thread-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\thread-loader\\dist\\cjs.js'[39m
          },
          [32m/* config.module.rule('ts').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          },
          [32m/* config.module.rule('ts').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\ts-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mappendTsSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ],
              [36mhappyPackMode[39m: [34mtrue[39m,
              [36mgetCustomTransformers[39m: [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m },
              [36mcompilerOptions[39m: {
                [36mmodule[39m: [31m'es2015'[39m
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('tsx') */[39m
      {
        [36mtest[39m: [31m/\.tsx$/[39m,
        use: [
          [32m/* config.module.rule('tsx').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'7b1bc816'[39m
            }
          },
          [32m/* config.module.rule('tsx').use('thread-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\thread-loader\\dist\\cjs.js'[39m
          },
          [32m/* config.module.rule('tsx').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          },
          [32m/* config.module.rule('tsx').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\ts-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mhappyPackMode[39m: [34mtrue[39m,
              [36mappendTsxSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ]
            }
          }
        ]
      }
    ]
  },
  [36moptimization[39m: {
    [36msplitChunks[39m: {
      [36mcacheGroups[39m: {
        [36mvendors[39m: {
          [36mname[39m: [31m'chunk-vendors'[39m,
          [36mtest[39m: [31m/[\\/]node_modules[\\/]/[39m,
          priority: -[32m10[39m,
          [36mchunks[39m: [31m'initial'[39m
        },
        [36mcommon[39m: {
          [36mname[39m: [31m'chunk-common'[39m,
          [36mminChunks[39m: [32m2[39m,
          [36mpriority[39m: -[32m20[39m,
          [36mchunks[39m: [31m'initial'[39m,
          [36mreuseExistingChunk[39m: [34mtrue[39m
        }
      }
    },
    [36mminimizer[39m: [
      [32m/* config.optimization.minimizer('terser') */[39m
      [34mnew[39m TerserPlugin(
        {
          [36mterserOptions[39m: {
            [36mcompress[39m: {
              [36marrows[39m: [34mfalse[39m,
              [36mcollapse_vars[39m: [34mfalse[39m,
              [36mcomparisons[39m: [34mfalse[39m,
              [36mcomputed_props[39m: [34mfalse[39m,
              [36mhoist_funs[39m: [34mfalse[39m,
              [36mhoist_props[39m: [34mfalse[39m,
              [36mhoist_vars[39m: [34mfalse[39m,
              [36minline[39m: [34mfalse[39m,
              [36mloops[39m: [34mfalse[39m,
              [36mnegate_iife[39m: [34mfalse[39m,
              [36mproperties[39m: [34mfalse[39m,
              [36mreduce_funcs[39m: [34mfalse[39m,
              [36mreduce_vars[39m: [34mfalse[39m,
              [36mswitches[39m: [34mfalse[39m,
              [36mtoplevel[39m: [34mfalse[39m,
              [36mtypeofs[39m: [34mfalse[39m,
              [36mbooleans[39m: [34mtrue[39m,
              [36mif_return[39m: [34mtrue[39m,
              [36msequences[39m: [34mtrue[39m,
              [36munused[39m: [34mtrue[39m,
              [36mconditionals[39m: [34mtrue[39m,
              [36mdead_code[39m: [34mtrue[39m,
              [36mevaluate[39m: [34mtrue[39m
            },
            [36mmangle[39m: {
              [36msafari10[39m: [34mtrue[39m
            }
          },
          [36msourceMap[39m: [34mfalse[39m,
          [36mcache[39m: [34mtrue[39m,
          [36mparallel[39m: [34mtrue[39m,
          [36mextractComments[39m: [34mfalse[39m
        }
      )
    ]
  },
  [36mplugins[39m: [
    [32m/* config.plugin('vue-loader') */[39m
    [34mnew[39m VueLoaderPlugin(),
    [32m/* config.plugin('feature-flags') */[39m
    [34mnew[39m DefinePlugin(
      {
        [36m__VUE_OPTIONS_API__[39m: [31m'true'[39m,
        [36m__VUE_PROD_DEVTOOLS__[39m: [31m'false'[39m
      }
    ),
    [32m/* config.plugin('define') */[39m
    [34mnew[39m DefinePlugin(
      {
        [31m'process.env'[39m: {
          [36mNODE_ENV[39m: [31m'"production"'[39m,
          [36mBASE_URL[39m: [31m'""'[39m
        }
      }
    ),
    [32m/* config.plugin('case-sensitive-paths') */[39m
    [34mnew[39m CaseSensitivePathsPlugin(),
    [32m/* config.plugin('friendly-errors') */[39m
    [34mnew[39m FriendlyErrorsWebpackPlugin(
      {
        [36madditionalTransformers[39m: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36madditionalFormatters[39m: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ]
      }
    ),
    [32m/* config.plugin('extract-css') */[39m
    [34mnew[39m MiniCssExtractPlugin(
      {
        [36mfilename[39m: [31m'css/[name].[contenthash:8].css'[39m,
        [36mchunkFilename[39m: [31m'css/[name].[contenthash:8].css'[39m
      }
    ),
    [32m/* config.plugin('optimize-css') */[39m
    [34mnew[39m OptimizeCssnanoPlugin(
      {
        [36msourceMap[39m: [34mfalse[39m,
        [36mcssnanoOptions[39m: {
          [36mpreset[39m: [
            [31m'default'[39m,
            {
              [36mmergeLonghand[39m: [34mfalse[39m,
              [36mcssDeclarationSorter[39m: [34mfalse[39m
            }
          ]
        }
      }
    ),
    [32m/* config.plugin('hash-module-ids') */[39m
    [34mnew[39m HashedModuleIdsPlugin(
      {
        [36mhashDigest[39m: [31m'hex'[39m
      }
    ),
    [32m/* config.plugin('named-chunks') */[39m
    [34mnew[39m NamedChunksPlugin(
      [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
    ),
    [32m/* config.plugin('html') */[39m
    [34mnew[39m HtmlWebpackPlugin(
      {
        [36mtitle[39m: [31m'vue3-mobile'[39m,
        [36mtemplateParameters[39m: [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m },
        [36mminify[39m: {
          [36mremoveComments[39m: [34mtrue[39m,
          [36mcollapseWhitespace[39m: [34mtrue[39m,
          [36mcollapseBooleanAttributes[39m: [34mtrue[39m,
          [36mremoveScriptTypeAttributes[39m: [34mtrue[39m
        },
        [36mtemplate[39m: [31m'E:\\workspace\\vue3-mobile-github\\public\\index.html'[39m
      }
    ),
    [32m/* config.plugin('preload') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'preload'[39m,
        [36minclude[39m: [31m'initial'[39m,
        [36mfileBlacklist[39m: [
          [31m/\.map$/[39m,
          [31m/hot-update\.js$/[39m
        ]
      }
    ),
    [32m/* config.plugin('prefetch') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'prefetch'[39m,
        [36minclude[39m: [31m'asyncChunks'[39m
      }
    ),
    [32m/* config.plugin('copy') */[39m
    [34mnew[39m CopyPlugin(
      [
        {
          [36mfrom[39m: [31m'E:\\workspace\\vue3-mobile-github\\public'[39m,
          [36mto[39m: [31m'E:\\workspace\\vue3-mobile-github\\dist'[39m,
          [36mtoType[39m: [31m'dir'[39m,
          [36mignore[39m: [
            [31m'.DS_Store'[39m,
            {
              [36mglob[39m: [31m'index.html'[39m,
              [36mmatchBase[39m: [34mfalse[39m
            }
          ]
        }
      ]
    ),
    [32m/* config.plugin('fork-ts-checker') */[39m
    [34mnew[39m ForkTsCheckerWebpackPlugin(
      {
        [36mtypescript[39m: {
          [36mextensions[39m: {
            [36mvue[39m: {
              [36menabled[39m: [34mtrue[39m,
              [36mcompiler[39m: [31m'@vue/compiler-sfc'[39m
            }
          },
          [36mdiagnosticOptions[39m: {
            [36msemantic[39m: [34mtrue[39m,
            [36msyntactic[39m: [34mtrue[39m
          }
        }
      }
    ),
    {
      [36mprofile[39m: [34mfalse[39m,
      [36mhandler[39m: [33m(percent, message, ...details) =>[39m {
        [36mthis[39m.updateProgress(percent, message, details);
      },
      [36mmodulesCount[39m: [32m500[39m,
      [36mshowEntries[39m: [34mfalse[39m,
      [36mshowModules[39m: [34mtrue[39m,
      [36mshowActiveModules[39m: [34mtrue[39m,
      [36moptions[39m: {
        [36mname[39m: [31m'process'[39m,
        [36mcolor[39m: [31m'#07c160'[39m,
        [36mreporters[39m: [
          [31m'basic'[39m
        ],
        [36mreporter[39m: [34mnull[39m
      },
      [36mreporters[39m: [
        {}
      ]
    },
    {
      [36moptions[39m: {
        [36mcontext[39m: [31m'E:\\workspace\\vue3-mobile-github'[39m,
        [36mmanifest[39m: {
          [36mname[39m: [31m'vendor_67c156bee24f3ad5e800'[39m,
          [36mcontent[39m: {
            [31m'./node_modules/vue-router/dist/vue-router.esm-bundler.js'[39m: {
              [36mid[39m: [32m119[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m
              },
              [36mexports[39m: [
                [31m'NavigationFailureType'[39m,
                [31m'RouterLink'[39m,
                [31m'RouterView'[39m,
                [31m'START_LOCATION'[39m,
                [31m'createMemoryHistory'[39m,
                [31m'createRouter'[39m,
                [31m'createRouterMatcher'[39m,
                [31m'createWebHashHistory'[39m,
                [31m'createWebHistory'[39m,
                [31m'isNavigationFailure'[39m,
                [31m'matchedRouteKey'[39m,
                [31m'onBeforeRouteLeave'[39m,
                [31m'onBeforeRouteUpdate'[39m,
                [31m'parseQuery'[39m,
                [31m'routeLocationKey'[39m,
                [31m'routerKey'[39m,
                [31m'stringifyQuery'[39m,
                [31m'useLink'[39m,
                [31m'useRoute'[39m,
                [31m'useRouter'[39m,
                [31m'viewDepthKey'[39m
              ]
            },
            [31m'./node_modules/vuex/dist/vuex.mjs'[39m: {
              [36mid[39m: [32m564[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m,
                [36mstrictHarmonyModule[39m: [34mtrue[39m,
                [36msideEffectFree[39m: [34mtrue[39m
              },
              [36mexports[39m: [
                [31m'Store'[39m,
                [31m'createLogger'[39m,
                [31m'createNamespacedHelpers'[39m,
                [31m'createStore'[39m,
                [31m'default'[39m,
                [31m'install'[39m,
                [31m'mapActions'[39m,
                [31m'mapGetters'[39m,
                [31m'mapMutations'[39m,
                [31m'mapState'[39m,
                [31m'useStore'[39m,
                [31m'version'[39m
              ]
            },
            [31m'./node_modules/vue/dist/vue.runtime.esm-bundler.js'[39m: {
              [36mid[39m: [32m569[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m
              },
              [36mexports[39m: [
                [31m'BaseTransition'[39m,
                [31m'Comment'[39m,
                [31m'Fragment'[39m,
                [31m'KeepAlive'[39m,
                [31m'Static'[39m,
                [31m'Suspense'[39m,
                [31m'Teleport'[39m,
                [31m'Text'[39m,
                [31m'Transition'[39m,
                [31m'TransitionGroup'[39m,
                [31m'callWithAsyncErrorHandling'[39m,
                [31m'callWithErrorHandling'[39m,
                [31m'camelize'[39m,
                [31m'capitalize'[39m,
                [31m'cloneVNode'[39m,
                [31m'compile'[39m,
                [31m'computed'[39m,
                [31m'createApp'[39m,
                [31m'createBlock'[39m,
                [31m'createCommentVNode'[39m,
                [31m'createHydrationRenderer'[39m,
                [31m'createRenderer'[39m,
                [31m'createSSRApp'[39m,
                [31m'createSlots'[39m,
                [31m'createStaticVNode'[39m,
                [31m'createTextVNode'[39m,
                [31m'createVNode'[39m,
                [31m'customRef'[39m,
                [31m'defineAsyncComponent'[39m,
                [31m'defineComponent'[39m,
                [31m'defineEmit'[39m,
                [31m'defineProps'[39m,
                [31m'devtools'[39m,
                [31m'getCurrentInstance'[39m,
                [31m'getTransitionRawChildren'[39m,
                [31m'h'[39m,
                [31m'handleError'[39m,
                [31m'hydrate'[39m,
                [31m'initCustomFormatter'[39m,
                [31m'inject'[39m,
                [31m'isProxy'[39m,
                [31m'isReactive'[39m,
                [31m'isReadonly'[39m,
                [31m'isRef'[39m,
                [31m'isVNode'[39m,
                [31m'markRaw'[39m,
                [31m'mergeProps'[39m,
                [31m'nextTick'[39m,
                [31m'onActivated'[39m,
                [31m'onBeforeMount'[39m,
                [31m'onBeforeUnmount'[39m,
                [31m'onBeforeUpdate'[39m,
                [31m'onDeactivated'[39m,
                [31m'onErrorCaptured'[39m,
                [31m'onMounted'[39m,
                [31m'onRenderTracked'[39m,
                [31m'onRenderTriggered'[39m,
                [31m'onUnmounted'[39m,
                [31m'onUpdated'[39m,
                [31m'openBlock'[39m,
                [31m'popScopeId'[39m,
                [31m'provide'[39m,
                [31m'proxyRefs'[39m,
                [31m'pushScopeId'[39m,
                [31m'queuePostFlushCb'[39m,
                [31m'reactive'[39m,
                [31m'readonly'[39m,
                [31m'ref'[39m,
                [31m'registerRuntimeCompiler'[39m,
                [31m'render'[39m,
                [31m'renderList'[39m,
                [31m'renderSlot'[39m,
                [31m'resolveComponent'[39m,
                [31m'resolveDirective'[39m,
                [31m'resolveDynamicComponent'[39m,
                [31m'resolveTransitionHooks'[39m,
                [31m'setBlockTracking'[39m,
                [31m'setDevtoolsHook'[39m,
                [31m'setTransitionHooks'[39m,
                [31m'shallowReactive'[39m,
                [31m'shallowReadonly'[39m,
                [31m'shallowRef'[39m,
                [31m'ssrContextKey'[39m,
                [31m'ssrUtils'[39m,
                [31m'toDisplayString'[39m,
                [31m'toHandlerKey'[39m,
                [31m'toHandlers'[39m,
                [31m'toRaw'[39m,
                [31m'toRef'[39m,
                [31m'toRefs'[39m,
                [31m'transformVNodeArgs'[39m,
                [31m'triggerRef'[39m,
                [31m'unref'[39m,
                [31m'useContext'[39m,
                [31m'useCssModule'[39m,
                [31m'useCssVars'[39m,
                [31m'useSSRContext'[39m,
                [31m'useTransitionState'[39m,
                [31m'vModelCheckbox'[39m,
                [31m'vModelDynamic'[39m,
                [31m'vModelRadio'[39m,
                [31m'vModelSelect'[39m,
                [31m'vModelText'[39m,
                [31m'vShow'[39m,
                [31m'version'[39m,
                [31m'warn'[39m,
                [31m'watch'[39m,
                [31m'watchEffect'[39m,
                [31m'withCtx'[39m,
                [31m'withDirectives'[39m,
                [31m'withKeys'[39m,
                [31m'withModifiers'[39m,
                [31m'withScopeId'[39m
              ]
            },
            [31m'./node_modules/axios/index.js'[39m: {
              [36mid[39m: [32m669[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'dynamic'[39m,
                [36mdefaultObject[39m: [31m'redirect'[39m
              }
            }
          }
        }
      }
    },
    {
      [36moptions[39m: {
        [36mfiles[39m: [31m'**/*.{vue,htm,html,css,less,sass,scss}'[39m,
        [36mformatter[39m: [33m[34mfunction[39m[33m () [39m{ [native code] },
        [36mstylelintPath[39m: [31m'stylelint'[39m,
        [36mcontext[39m: [31m'src'[39m,
        [36mconfigFile[39m: [31m'E:\\workspace\\vue3-mobile-github\\stylelint.config.js'[39m,
        [36mfix[39m: [34mtrue[39m,
        [36mcache[39m: [34mtrue[39m
      }
    }
  ],
  [36mentry[39m: {
    [36mapp[39m: [
      [31m'./src/main.ts'[39m
    ]
  }
}
{
  [36mmode[39m: [31m'development'[39m,
  [36mcontext[39m: [31m'E:\\workspace\\vue3-mobile-github'[39m,
  [36mnode[39m: {
    [36msetImmediate[39m: [34mfalse[39m,
    [36mprocess[39m: [31m'mock'[39m,
    [36mdgram[39m: [31m'empty'[39m,
    [36mfs[39m: [31m'empty'[39m,
    [36mnet[39m: [31m'empty'[39m,
    [36mtls[39m: [31m'empty'[39m,
    [36mchild_process[39m: [31m'empty'[39m
  },
  [36moutput[39m: {
    [36mpath[39m: [31m'E:\\workspace\\vue3-mobile-github\\dist'[39m,
    [36mfilename[39m: [31m'js/[name].js'[39m,
    [36mpublicPath[39m: [31m''[39m,
    [36mchunkFilename[39m: [31m'js/[name].js'[39m
  },
  [36mresolve[39m: {
    [36malias[39m: {
      [31m'@'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src'[39m,
      [36mvue$[39m: [31m'vue/dist/vue.runtime.esm-bundler.js'[39m,
      [31m'@assets'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\assets'[39m,
      [31m'@com'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\components'[39m,
      [31m'@hooks'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\hooks'[39m,
      [31m'@js'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\js'[39m,
      [31m'@pages'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\pages'[39m,
      [31m'@router'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\router'[39m,
      [31m'@store'[39m: [31m'E:\\workspace\\vue3-mobile-github\\src\\store'[39m
    },
    [36mextensions[39m: [
      [31m'.tsx'[39m,
      [31m'.ts'[39m,
      [31m'.mjs'[39m,
      [31m'.js'[39m,
      [31m'.jsx'[39m,
      [31m'.vue'[39m,
      [31m'.json'[39m,
      [31m'.wasm'[39m
    ],
    [36mmodules[39m: [
      [31m'node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\node_modules'[39m
    ],
    [36mplugins[39m: [
      [32m/* config.resolve.plugin('pnp') */[39m
      {}
    ]
  },
  [36mresolveLoader[39m: {
    [36mmodules[39m: [
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-plugin-typescript\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-plugin-babel\\node_modules'[39m,
      [31m'node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules'[39m,
      [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\node_modules'[39m
    ],
    [36mplugins[39m: [
      [32m/* config.resolve.plugin('pnp-loaders') */[39m
      {}
    ]
  },
  [36mmodule[39m: {
    [36mnoParse[39m: [31m/^(vue|vue-router|vuex|vuex-router-sync)$/[39m,
    rules: [
      [32m/* config.module.rule('vue') */[39m
      {
        [36mtest[39m: [31m/\.vue$/[39m,
        use: [
          [32m/* config.module.rule('vue').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'54e962d0'[39m
            }
          },
          [32m/* config.module.rule('vue').use('vue-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-loader-v16\\dist\\index.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'54e962d0'[39m,
              [36mbabelParserPlugins[39m: [
                [31m'jsx'[39m,
                [31m'classProperties'[39m,
                [31m'decorators-legacy'[39m
              ]
            }
          }
        ]
      },
      [32m/* config.module.rule('images') */[39m
      {
        [36mtest[39m: [31m/\.(png|jpe?g|gif|webp)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('images').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('svg') */[39m
      {
        [36mtest[39m: [31m/\.(svg)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('svg').use('file-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('media') */[39m
      {
        [36mtest[39m: [31m/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/[39m,
        use: [
          [32m/* config.module.rule('media').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'media/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('fonts') */[39m
      {
        [36mtest[39m: [31m/\.(woff2?|eot|ttf|otf)(\?.*)?$/i[39m,
        use: [
          [32m/* config.module.rule('fonts').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\url-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\file-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'fonts/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('pug') */[39m
      {
        [36mtest[39m: [31m/\.pug$/[39m,
        oneOf: [
          [32m/* config.module.rule('pug').oneOf('pug-vue') */[39m
          {
            [36mresourceQuery[39m: [31m/vue/[39m,
            use: [
              [32m/* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          },
          [32m/* config.module.rule('pug').oneOf('pug-template') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('pug').oneOf('pug-template').use('raw') */[39m
              {
                [36mloader[39m: [31m'raw-loader'[39m
              },
              [32m/* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('css') */[39m
      {
        [36mtest[39m: [31m/\.css$/[39m,
        oneOf: [
          [32m/* config.module.rule('css').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('postcss') */[39m
      {
        [36mtest[39m: [31m/\.p(ost)?css$/[39m,
        oneOf: [
          [32m/* config.module.rule('postcss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('scss') */[39m
      {
        [36mtest[39m: [31m/\.scss$/[39m,
        oneOf: [
          [32m/* config.module.rule('scss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('sass-resources-loader') */[39m
              {
                [36mloader[39m: [31m'sass-resources-loader'[39m,
                [36moptions[39m: {
                  [36mresources[39m: [
                    [31m'E:\\workspace\\vue3-mobile-github\\src\\assets\\css\\_variable.scss'[39m
                  ]
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('sass') */[39m
      {
        [36mtest[39m: [31m/\.sass$/[39m,
        oneOf: [
          [32m/* config.module.rule('sass').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\sass-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimplementation[39m: {
                    [36mrender[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.29.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[39m[33m Error() [39m{ [native code] }
                    },
                    [36mNULL[39m: {
                      [36mtoString[39m: [33m[34mfunction[39m[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      }
                    },
                    [36mTRUE[39m: {
                      [36mvalue[39m: [34mtrue[39m
                    },
                    [36mFALSE[39m: {
                      [36mvalue[39m: [34mfalse[39m
                    },
                    [36mcli_pkg_main_0_[39m: [33m[34mfunction[39m[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('less') */[39m
      {
        [36mtest[39m: [31m/\.less$/[39m,
        oneOf: [
          [32m/* config.module.rule('less').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('stylus') */[39m
      {
        [36mtest[39m: [31m/\.styl(us)?$/[39m,
        oneOf: [
          [32m/* config.module.rule('stylus').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            use: [
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\vue-style-loader\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\css-loader\\dist\\cjs.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\postcss-loader\\src\\index.js'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mfalse[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('js') */[39m
      {
        [36mtest[39m: [31m/\.m?jsx?$/[39m,
        exclude: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36muse[39m: [
          [32m/* config.module.rule('js').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\babel-loader'[39m,
              [36mcacheIdentifier[39m: [31m'847044f4'[39m
            }
          },
          [32m/* config.module.rule('js').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          }
        ]
      },
      [32m/* config.module.rule('eslint') */[39m
      {
        [36menforce[39m: [31m'pre'[39m,
        [36mtest[39m: [31m/\.(vue|(j|t)sx?)$/[39m,
        exclude: [
          [31m/node_modules/[39m,
          [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\@vue\\cli-service\\lib'[39m
        ],
        [36muse[39m: [
          [32m/* config.module.rule('eslint').use('eslint-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\eslint-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mextensions[39m: [
                [31m'.js'[39m,
                [31m'.jsx'[39m,
                [31m'.vue'[39m,
                [31m'.ts'[39m,
                [31m'.tsx'[39m
              ],
              [36mcache[39m: [34mtrue[39m,
              [36mcacheIdentifier[39m: [31m'4464eab4'[39m,
              [36memitWarning[39m: [34mtrue[39m,
              [36memitError[39m: [34mfalse[39m,
              [36meslintPath[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\eslint'[39m,
              [36mformatter[39m: [34mundefined[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('ts') */[39m
      {
        [36mtest[39m: [31m/\.ts$/[39m,
        use: [
          [32m/* config.module.rule('ts').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'2e07ef36'[39m
            }
          },
          [32m/* config.module.rule('ts').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          },
          [32m/* config.module.rule('ts').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\ts-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mappendTsSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ],
              [36mhappyPackMode[39m: [34mfalse[39m,
              [36mgetCustomTransformers[39m: [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m },
              [36mcompilerOptions[39m: {
                [36mmodule[39m: [31m'es2015'[39m
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('tsx') */[39m
      {
        [36mtest[39m: [31m/\.tsx$/[39m,
        use: [
          [32m/* config.module.rule('tsx').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\cache-loader\\dist\\cjs.js'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\.cache\\ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'2e07ef36'[39m
            }
          },
          [32m/* config.module.rule('tsx').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\babel-loader\\lib\\index.js'[39m
          },
          [32m/* config.module.rule('tsx').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'E:\\workspace\\vue3-mobile-github\\node_modules\\ts-loader\\index.js'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mhappyPackMode[39m: [34mfalse[39m,
              [36mappendTsxSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ]
            }
          }
        ]
      }
    ]
  },
  [36moptimization[39m: {
    [36msplitChunks[39m: {
      [36mcacheGroups[39m: {
        [36mvendors[39m: {
          [36mname[39m: [31m'chunk-vendors'[39m,
          [36mtest[39m: [31m/[\\/]node_modules[\\/]/[39m,
          priority: -[32m10[39m,
          [36mchunks[39m: [31m'initial'[39m
        },
        [36mcommon[39m: {
          [36mname[39m: [31m'chunk-common'[39m,
          [36mminChunks[39m: [32m2[39m,
          [36mpriority[39m: -[32m20[39m,
          [36mchunks[39m: [31m'initial'[39m,
          [36mreuseExistingChunk[39m: [34mtrue[39m
        }
      }
    },
    [36mminimizer[39m: [
      [32m/* config.optimization.minimizer('terser') */[39m
      [34mnew[39m TerserPlugin(
        {
          [36mterserOptions[39m: {
            [36mcompress[39m: {
              [36marrows[39m: [34mfalse[39m,
              [36mcollapse_vars[39m: [34mfalse[39m,
              [36mcomparisons[39m: [34mfalse[39m,
              [36mcomputed_props[39m: [34mfalse[39m,
              [36mhoist_funs[39m: [34mfalse[39m,
              [36mhoist_props[39m: [34mfalse[39m,
              [36mhoist_vars[39m: [34mfalse[39m,
              [36minline[39m: [34mfalse[39m,
              [36mloops[39m: [34mfalse[39m,
              [36mnegate_iife[39m: [34mfalse[39m,
              [36mproperties[39m: [34mfalse[39m,
              [36mreduce_funcs[39m: [34mfalse[39m,
              [36mreduce_vars[39m: [34mfalse[39m,
              [36mswitches[39m: [34mfalse[39m,
              [36mtoplevel[39m: [34mfalse[39m,
              [36mtypeofs[39m: [34mfalse[39m,
              [36mbooleans[39m: [34mtrue[39m,
              [36mif_return[39m: [34mtrue[39m,
              [36msequences[39m: [34mtrue[39m,
              [36munused[39m: [34mtrue[39m,
              [36mconditionals[39m: [34mtrue[39m,
              [36mdead_code[39m: [34mtrue[39m,
              [36mevaluate[39m: [34mtrue[39m
            },
            [36mmangle[39m: {
              [36msafari10[39m: [34mtrue[39m
            }
          },
          [36msourceMap[39m: [34mfalse[39m,
          [36mcache[39m: [34mtrue[39m,
          [36mparallel[39m: [34mtrue[39m,
          [36mextractComments[39m: [34mfalse[39m
        }
      )
    ]
  },
  [36mplugins[39m: [
    [32m/* config.plugin('vue-loader') */[39m
    [34mnew[39m VueLoaderPlugin(),
    [32m/* config.plugin('feature-flags') */[39m
    [34mnew[39m DefinePlugin(
      {
        [36m__VUE_OPTIONS_API__[39m: [31m'true'[39m,
        [36m__VUE_PROD_DEVTOOLS__[39m: [31m'false'[39m
      }
    ),
    [32m/* config.plugin('define') */[39m
    [34mnew[39m DefinePlugin(
      {
        [31m'process.env'[39m: {
          [36mNODE_ENV[39m: [31m'"development"'[39m,
          [36mBASE_URL[39m: [31m'""'[39m
        }
      }
    ),
    [32m/* config.plugin('case-sensitive-paths') */[39m
    [34mnew[39m CaseSensitivePathsPlugin(),
    [32m/* config.plugin('friendly-errors') */[39m
    [34mnew[39m FriendlyErrorsWebpackPlugin(
      {
        [36madditionalTransformers[39m: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36madditionalFormatters[39m: [
          [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m }
        ]
      }
    ),
    [32m/* config.plugin('html') */[39m
    [34mnew[39m HtmlWebpackPlugin(
      {
        [36mtitle[39m: [31m'vue3-mobile'[39m,
        [36mtemplateParameters[39m: [33m[34mfunction[39m[33m () [39m{ [32m/* omitted long function */[39m },
        [36mtemplate[39m: [31m'E:\\workspace\\vue3-mobile-github\\public\\index.html'[39m
      }
    ),
    [32m/* config.plugin('preload') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'preload'[39m,
        [36minclude[39m: [31m'initial'[39m,
        [36mfileBlacklist[39m: [
          [31m/\.map$/[39m,
          [31m/hot-update\.js$/[39m
        ]
      }
    ),
    [32m/* config.plugin('prefetch') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'prefetch'[39m,
        [36minclude[39m: [31m'asyncChunks'[39m
      }
    ),
    [32m/* config.plugin('copy') */[39m
    [34mnew[39m CopyPlugin(
      [
        {
          [36mfrom[39m: [31m'E:\\workspace\\vue3-mobile-github\\public'[39m,
          [36mto[39m: [31m'E:\\workspace\\vue3-mobile-github\\dist'[39m,
          [36mtoType[39m: [31m'dir'[39m,
          [36mignore[39m: [
            [31m'.DS_Store'[39m,
            {
              [36mglob[39m: [31m'index.html'[39m,
              [36mmatchBase[39m: [34mfalse[39m
            }
          ]
        }
      ]
    ),
    [32m/* config.plugin('fork-ts-checker') */[39m
    [34mnew[39m ForkTsCheckerWebpackPlugin(
      {
        [36mtypescript[39m: {
          [36mextensions[39m: {
            [36mvue[39m: {
              [36menabled[39m: [34mtrue[39m,
              [36mcompiler[39m: [31m'@vue/compiler-sfc'[39m
            }
          },
          [36mdiagnosticOptions[39m: {
            [36msemantic[39m: [34mtrue[39m,
            [36msyntactic[39m: [34mfalse[39m
          }
        }
      }
    ),
    {
      [36mprofile[39m: [34mfalse[39m,
      [36mhandler[39m: [33m(percent, message, ...details) =>[39m {
        [36mthis[39m.updateProgress(percent, message, details);
      },
      [36mmodulesCount[39m: [32m500[39m,
      [36mshowEntries[39m: [34mfalse[39m,
      [36mshowModules[39m: [34mtrue[39m,
      [36mshowActiveModules[39m: [34mtrue[39m,
      [36moptions[39m: {
        [36mname[39m: [31m'process'[39m,
        [36mcolor[39m: [31m'#07c160'[39m,
        [36mreporters[39m: [
          [31m'basic'[39m
        ],
        [36mreporter[39m: [34mnull[39m
      },
      [36mreporters[39m: [
        {}
      ]
    },
    {
      [36moptions[39m: {
        [36mcontext[39m: [31m'E:\\workspace\\vue3-mobile-github'[39m,
        [36mmanifest[39m: {
          [36mname[39m: [31m'vendor_67c156bee24f3ad5e800'[39m,
          [36mcontent[39m: {
            [31m'./node_modules/vue-router/dist/vue-router.esm-bundler.js'[39m: {
              [36mid[39m: [32m119[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m
              },
              [36mexports[39m: [
                [31m'NavigationFailureType'[39m,
                [31m'RouterLink'[39m,
                [31m'RouterView'[39m,
                [31m'START_LOCATION'[39m,
                [31m'createMemoryHistory'[39m,
                [31m'createRouter'[39m,
                [31m'createRouterMatcher'[39m,
                [31m'createWebHashHistory'[39m,
                [31m'createWebHistory'[39m,
                [31m'isNavigationFailure'[39m,
                [31m'matchedRouteKey'[39m,
                [31m'onBeforeRouteLeave'[39m,
                [31m'onBeforeRouteUpdate'[39m,
                [31m'parseQuery'[39m,
                [31m'routeLocationKey'[39m,
                [31m'routerKey'[39m,
                [31m'stringifyQuery'[39m,
                [31m'useLink'[39m,
                [31m'useRoute'[39m,
                [31m'useRouter'[39m,
                [31m'viewDepthKey'[39m
              ]
            },
            [31m'./node_modules/vuex/dist/vuex.mjs'[39m: {
              [36mid[39m: [32m564[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m,
                [36mstrictHarmonyModule[39m: [34mtrue[39m,
                [36msideEffectFree[39m: [34mtrue[39m
              },
              [36mexports[39m: [
                [31m'Store'[39m,
                [31m'createLogger'[39m,
                [31m'createNamespacedHelpers'[39m,
                [31m'createStore'[39m,
                [31m'default'[39m,
                [31m'install'[39m,
                [31m'mapActions'[39m,
                [31m'mapGetters'[39m,
                [31m'mapMutations'[39m,
                [31m'mapState'[39m,
                [31m'useStore'[39m,
                [31m'version'[39m
              ]
            },
            [31m'./node_modules/vue/dist/vue.runtime.esm-bundler.js'[39m: {
              [36mid[39m: [32m569[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'namespace'[39m
              },
              [36mexports[39m: [
                [31m'BaseTransition'[39m,
                [31m'Comment'[39m,
                [31m'Fragment'[39m,
                [31m'KeepAlive'[39m,
                [31m'Static'[39m,
                [31m'Suspense'[39m,
                [31m'Teleport'[39m,
                [31m'Text'[39m,
                [31m'Transition'[39m,
                [31m'TransitionGroup'[39m,
                [31m'callWithAsyncErrorHandling'[39m,
                [31m'callWithErrorHandling'[39m,
                [31m'camelize'[39m,
                [31m'capitalize'[39m,
                [31m'cloneVNode'[39m,
                [31m'compile'[39m,
                [31m'computed'[39m,
                [31m'createApp'[39m,
                [31m'createBlock'[39m,
                [31m'createCommentVNode'[39m,
                [31m'createHydrationRenderer'[39m,
                [31m'createRenderer'[39m,
                [31m'createSSRApp'[39m,
                [31m'createSlots'[39m,
                [31m'createStaticVNode'[39m,
                [31m'createTextVNode'[39m,
                [31m'createVNode'[39m,
                [31m'customRef'[39m,
                [31m'defineAsyncComponent'[39m,
                [31m'defineComponent'[39m,
                [31m'defineEmit'[39m,
                [31m'defineProps'[39m,
                [31m'devtools'[39m,
                [31m'getCurrentInstance'[39m,
                [31m'getTransitionRawChildren'[39m,
                [31m'h'[39m,
                [31m'handleError'[39m,
                [31m'hydrate'[39m,
                [31m'initCustomFormatter'[39m,
                [31m'inject'[39m,
                [31m'isProxy'[39m,
                [31m'isReactive'[39m,
                [31m'isReadonly'[39m,
                [31m'isRef'[39m,
                [31m'isVNode'[39m,
                [31m'markRaw'[39m,
                [31m'mergeProps'[39m,
                [31m'nextTick'[39m,
                [31m'onActivated'[39m,
                [31m'onBeforeMount'[39m,
                [31m'onBeforeUnmount'[39m,
                [31m'onBeforeUpdate'[39m,
                [31m'onDeactivated'[39m,
                [31m'onErrorCaptured'[39m,
                [31m'onMounted'[39m,
                [31m'onRenderTracked'[39m,
                [31m'onRenderTriggered'[39m,
                [31m'onUnmounted'[39m,
                [31m'onUpdated'[39m,
                [31m'openBlock'[39m,
                [31m'popScopeId'[39m,
                [31m'provide'[39m,
                [31m'proxyRefs'[39m,
                [31m'pushScopeId'[39m,
                [31m'queuePostFlushCb'[39m,
                [31m'reactive'[39m,
                [31m'readonly'[39m,
                [31m'ref'[39m,
                [31m'registerRuntimeCompiler'[39m,
                [31m'render'[39m,
                [31m'renderList'[39m,
                [31m'renderSlot'[39m,
                [31m'resolveComponent'[39m,
                [31m'resolveDirective'[39m,
                [31m'resolveDynamicComponent'[39m,
                [31m'resolveTransitionHooks'[39m,
                [31m'setBlockTracking'[39m,
                [31m'setDevtoolsHook'[39m,
                [31m'setTransitionHooks'[39m,
                [31m'shallowReactive'[39m,
                [31m'shallowReadonly'[39m,
                [31m'shallowRef'[39m,
                [31m'ssrContextKey'[39m,
                [31m'ssrUtils'[39m,
                [31m'toDisplayString'[39m,
                [31m'toHandlerKey'[39m,
                [31m'toHandlers'[39m,
                [31m'toRaw'[39m,
                [31m'toRef'[39m,
                [31m'toRefs'[39m,
                [31m'transformVNodeArgs'[39m,
                [31m'triggerRef'[39m,
                [31m'unref'[39m,
                [31m'useContext'[39m,
                [31m'useCssModule'[39m,
                [31m'useCssVars'[39m,
                [31m'useSSRContext'[39m,
                [31m'useTransitionState'[39m,
                [31m'vModelCheckbox'[39m,
                [31m'vModelDynamic'[39m,
                [31m'vModelRadio'[39m,
                [31m'vModelSelect'[39m,
                [31m'vModelText'[39m,
                [31m'vShow'[39m,
                [31m'version'[39m,
                [31m'warn'[39m,
                [31m'watch'[39m,
                [31m'watchEffect'[39m,
                [31m'withCtx'[39m,
                [31m'withDirectives'[39m,
                [31m'withKeys'[39m,
                [31m'withModifiers'[39m,
                [31m'withScopeId'[39m
              ]
            },
            [31m'./node_modules/axios/index.js'[39m: {
              [36mid[39m: [32m669[39m,
              [36mbuildMeta[39m: {
                [36mexportsType[39m: [31m'dynamic'[39m,
                [36mdefaultObject[39m: [31m'redirect'[39m
              }
            }
          }
        }
      }
    },
    {
      [36moptions[39m: {
        [36mfiles[39m: [31m'**/*.{vue,htm,html,css,less,sass,scss}'[39m,
        [36mformatter[39m: [33m[34mfunction[39m[33m () [39m{ [native code] },
        [36mstylelintPath[39m: [31m'stylelint'[39m,
        [36mcontext[39m: [31m'src'[39m,
        [36mconfigFile[39m: [31m'E:\\workspace\\vue3-mobile-github\\stylelint.config.js'[39m,
        [36mfix[39m: [34mtrue[39m,
        [36mcache[39m: [34mtrue[39m
      }
    }
  ],
  [36mentry[39m: {
    [36mapp[39m: [
      [31m'./src/main.ts'[39m
    ]
  }
}
