# Hasarlı Akdeniz

Akdeniz Bölgesi hasarlı araç alım platformu — lead-generation sitesi + tam CRM/SEO/ads yönetim paneli. Next.js 16 (App Router), React 19, TypeScript strict, Tailwind v4, Drizzle ORM + Neon PostgreSQL.

## Özellikler

- **Herkese açık site (TR):** ana sayfa, teklif al, hizmet sayfaları (`/arac-alimi/[slug]`), şehir/ilçe SEO sayfaları (`/hizmet-bolgeleri`), blog, rehberler, SSS, yasal sayfalar, site içi arama, RSS, sitemap, llms.txt.
- **Admin paneli (`/admin`):** lead/CRM yönetimi, alıcılar, teklifler, anlaşmalar, finans, çağrı & WhatsApp kayıtları, içerik (CMS) + medya, SEO araçları, analitik & funnel, reklam harcaması, tıklama koruması (click-fraud), kullanıcılar (RBAC), denetim kaydı, ayarlar.
- **İzleme:** GTM/GA4/Google Ads/Clarity (consent-gated), reklam tıklama takibi, tıklama koruması skorlama + cron.

## Kurulum

```bash
pnpm install
cp .env.example .env.local   # değerleri doldurun
pnpm dev
```

Veritabanı (Neon PostgreSQL) bağlamak için `.env.local` içinde `DATABASE_URL` ayarlayın, ardından:

```bash
pnpm db:migrate
pnpm db:seed          # varsayılan ayarlar + süper admin (SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD)
pnpm db:seed:content  # örnek içerik
```

`DATABASE_URL` yoksa site çalışır; formlar/panel veri kaydetmeden nazikçe düşer.

## Komutlar

- `pnpm dev` · `pnpm build` · `pnpm start`
- `pnpm lint` · `pnpm typecheck` · `pnpm test`
- `pnpm db:generate` · `pnpm db:migrate` · `pnpm db:push` · `pnpm db:studio`

## Yapılandırma

Marka, telefon (+90 552 567 71 64), WhatsApp, şehirler ve navigasyon `src/config/*` altında; canlıda Admin → Ayarlar üzerinden `site_settings` tablosu devralır. Tasarım tokenları `src/app/globals.css` (`@theme`) içinde — Akdeniz kimliği: derin deniz lacivert (primary), antrasit, sıcak kum yüzeyler, turunç-amber vurgu.
