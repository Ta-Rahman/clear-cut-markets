# Clear Cut Markets

Vue 3 + Vite SaaS for AI-powered investment monitoring (3-9 assets). Pre-launch beta.

## Structure
```
/app                    # Main SPA (deployed to Vercel)
/app/api/*.js           # Vercel serverless functions
/app/src/composables/   # Shared state (useUser, useModuleManager, useDarkMode)
/app/src/components/    # landing/, dashboard/, shared/
/app/src/locales/       # en.json, de.json
```

## Stack
- **UI**: PrimeVue (Aura) + Tailwind (`tailwindcss-primeui`)
- **DB/Auth**: Supabase (`import { supabase } from '@/supabase'`)
- **Routing**: Hash-based (`createWebHashHistory`)
- **Dark mode**: `.app-dark` on `<html>`, stored in `localStorage['app-dark-mode']`

## Patterns

**Components**: Always `<script setup>`, i18n for all strings:
```vue
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
```
Add keys to both `en.json` and `de.json`. Scoped styles default; unscoped only for `.app-dark` selectors.

**API functions** (`/app/api/*.js`): Cache with Redis, handle 429s:
```javascript
import 'dotenv/config';
import { Redis } from '@upstash/redis';
export default async function handler(req, res) { /* validate → cache check → fetch → cache set (3600s) → respond */ }
```

**Assets**: Stocks/ETFs/Crypto. Use `src/utils/formatters.js`:
```javascript
import { getDisplaySymbol, isCryptoSymbol, formatMarketCap } from '@/utils/formatters';
```

**Auth**: Routes `/app/*` protected. Access via `useUser()` → `{ user, profile, isLoggedIn }`.

**Modules**: `user_modules` table links users to assets. Limits by `subscription_tier`: Free=3, Advanced=6, Pro=9.

## DB Schema (Supabase)
- `profiles`: id (→auth.users), subscription_tier, first_name, last_name
- `assets`: symbol, name, type (stock/etf/crypto)
- `user_modules`: user_id (→profiles), asset_id (→assets)
- RLS on all tables: `auth.uid() = user_id`

## Commands (from `/app`)
```bash
vercel dev       # Local dev with API functions (:3000)
vercel build     # Production build
npm run lint     # ESLint fix
```

## Env (`/app/.env`)
```
VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
FINNHUB_API_KEY, POLYGON_API_KEY, ALPHA_VANTAGE_API_KEY
```

## External APIs
Alpha Vantage (search, 5/min free) | Polygon (stocks/ETFs) | Finnhub (market data) | CoinGecko (crypto, free)

## Styling
Tailwind primary. Dark: `dark:` prefix. SCSS in `src/assets/layout/`. Breakpoints: sm=576, md=768, lg=992, xl=1200.

## Naming
Components: `PascalCase.vue` | Composables: `useCamelCase.js` | Utils: `camelCase.js` | i18n: `dot.notation.keys`

## TODO
- **Testing**: Vitest + Vue Test Utils + Playwright. Colocate: `*.spec.js`
- **AI Sentiment**: News aggregation, cross-correlation, LLM scoring, storage strategy
