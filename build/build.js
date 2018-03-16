'use strict';
require('./check-versions')();

process.env.NODE_ENV = 'production';
//打包开始提示---cli进行输出一个带spinner的文案，告诉用户正在打包中
const ora = require('ora');
//这个模块是用来清除之前的打的包，因为在vue-cli中每次打包会生成不同的hash,每次打包都会生成新的文件，那就不对了，我们要复盖原先的文件，因为hash不同复盖不了，所以要清除
//rm(path.resolve(__dirname, '../dist/js'), (err) => {}
//记住rm()里面的路径一定要是绝对路径。相对路径不会册除成功的
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

//可以对spinner的色彩和文案进行配置，然后再调用start()方法进行开始
//记住在打包结束回调里我们要再次进行关闭 spinner.stop(),不然会一直spinner着，不传的转啊转
const spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
        //以下就是一些配置化，如果打包的时候有错误我们就抛出错误
        //process.stdout.write跟console.log一个意思因为在node环境里console.log也是用process封装的就是向cli里打印输出
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,//让打包的时候有颜色
            modules: false,//去掉内置模块信息
            children: false,//去掉子模块
            chunks: false,//增加包信息（设置为 false 能允许较少的冗长输出）
            chunkModules: false//去除包里内置模块的信息
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
});
