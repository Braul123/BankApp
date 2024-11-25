module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|react-native-date-picker)/)',
  ],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  // },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-native/extend-expect'],
};