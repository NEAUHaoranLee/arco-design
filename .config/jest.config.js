// Custom Jest config

const BASE_JEST_CONFIG = {
  // Find component demos' dependencies from /site/main/node_modules
  modulePaths: ['<rootDir>/site/main/node_modules'],
  moduleNameMapper: {
    '^@arco-design/web-react/(.+)$': '<rootDir>/$1',
    '^@arco-design/web-react$': '<rootDir>',
    '^test-utils$': '<rootDir>/tests/util',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
  },
};

exports.node = (config) => {
  Object.assign(config, BASE_JEST_CONFIG);
};

exports.client = (config) => {
  Object.assign(config, BASE_JEST_CONFIG);

  config.setupFilesAfterEnv = ['<rootDir>/tests/jest-dom-setup.js'];

  config.collectCoverageFrom = [
    'components/**/*.{ts,tsx}',
    '!components/**/style/*',
    '!components/**/api/*',
  ];

  config.coveragePathIgnorePatterns = [
    '/node_modules/',
    '/lib/',
    '/es/',
    '/dist/',
    '/icon/',
    '/components/index.tsx',
    '/components/locale/',
  ];
};
