module.exports = {
  locales: ['en', 'it', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: 'translations/{locale}/messages',
      include: ['pages', 'components'],
    },
  ],
  format: 'po',
}
