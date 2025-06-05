//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  quoteProps: 'consistent',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['mergeClass'],
  tailwindAttributes: ['classNames'],
  tailwindStylesheet: './src/styles/index.css',
}

export default config
