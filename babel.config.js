module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'styled-components': './src/lib/styled-components',
          lib: './src/lib',
          views: './src/views',
          store: './src/store',
          components: './src/components',
        },
      },
    ],
  ],
};
