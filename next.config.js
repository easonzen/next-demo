const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')],
    },
    webpack: config => {
        config.resolve.alias['@'] = path.resolve(__dirname, './src');
        config.resolve.alias['components'] = path.resolve(__dirname, './src/components');
        config.resolve.alias['pages'] = path.resolve(__dirname, './src/pages');
        config.resolve.alias['styles'] = path.resolve(__dirname, './src/styles');
        config.resolve.alias['utils'] = path.resolve(__dirname, './src/utils');

        return config;
    }
}