// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel',
//       '@babel/plugin-proposal-export-namespace-from',
//         'react-native-reanimated/plugin'],
//     },
//   },
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};