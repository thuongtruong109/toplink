import styleMigrate from '@stylistic/eslint-plugin-migrate'
import { antfu } from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: true,
  },
  {
    files: ['**/*.{js,vue,ts}'],
    rules: {
      'perfectionist/sort-objects': 'error',
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
    plugins: {
        'style-migrate': styleMigrate,
      },
    }
)