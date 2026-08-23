# AI Agent Prompt: Pre-Launch SEO, Security & QA Audit — Standard Catering Website

Copy everything below into your coding agent (Claude Code, Cursor, etc.) with access to the project repo.

---

## ROLE

You are acting as a senior technical SEO consultant, security auditor, and QA engineer preparing the **Standard Catering** website (React + Vite, pages: Home, Menu, About, Contact, New Order) for public launch. Standard Catering is an Egyptian event catering and food truck company. Your job is to audit the current codebase against the checklist below, fix what's missing, and produce a report of what you changed and what still needs manual action (e.g. account creation, DNS, third-party signups) that you cannot do yourself.

Work through the categories in order. For each item: check if it exists, implement it if missing, and note anything that needs my manual input (API keys, business info, account logins).

---

## CATEGORY 1 — Trust & Legal
1. **Privacy Policy page** — create if missing, tailored to a business that collects order/contact form data (name, phone, email, address for delivery).
2. **Terms & Conditions page** — covering orders, cancellations, and event booking terms.
3. **Cookie consent banner** — required if using GA4/Meta Pixel; simple accept/dismiss banner, no need for full GDPR complexity unless targeting EU customers.
4. **FAQ section** — pull common catering questions (minimum order size, delivery areas, advance notice needed, dietary options, payment methods).

## CATEGORY 2 — Conversion & UX
5. **Clear, consistent CTA** — verify every page (especially Home and Menu) has an obvious path to the New Order page or WhatsApp/call.
6. **Custom 404 page** — on-brand, with navigation back to Home/Menu.
7. **Click-to-call and WhatsApp Business link** — high priority for the Egyptian market; add as a persistent button/floating action.
8. **Google Maps embed on Contact page** — with consistent Name/Address/Phone (NAP) matching Google Business Profile exactly.
9. **Form validation** on New Order / Contact forms (required fields, phone format, email format) with clear error states.
10. **Spam protection** on forms — honeypot field at minimum, reCAPTCHA if form abuse becomes an issue.

## CATEGORY 3 — Technical SEO (foundation)
11. **robots.txt** — allow crawling of all public pages, disallow any admin/test routes.
12. **sitemap.xml** — auto-generated, listing Home/Menu/About/Contact/New Order with correct priorities and lastmod dates.
13. **Canonical URLs** — one canonical tag per page, resolving www vs non-www and http vs https to a single version.
14. **Meta titles** — unique per page, under 60 characters, including brand name + primary keyword (e.g. "Menu | Standard Catering — Event Catering & Food Trucks Egypt").
15. **Meta descriptions** — unique per page, under 155 characters, written to earn clicks (include a benefit + CTA).
16. **HTTPS enforced** — all HTTP traffic redirects to HTTPS; check hosting/CDN config.
17. **Proper heading hierarchy** — one H1 per page (the main headline), H2s for sections, no skipped levels.
18. **Clean URL structure** — human-readable slugs (/menu, /about, /contact, /new-order), no query-string routing if avoidable.

## CATEGORY 4 — Technical SEO (rich results & sharing)
19. **Open Graph tags** — og:title, og:description, og:image, og:url on every page so links look correct when shared on WhatsApp, Instagram, Facebook.
20. **Twitter Card tags** — summary_large_image type, for consistency across platforms.
21. **Schema.org structured data** — implement LocalBusiness + Menu schema (JSON-LD) so Google can show rich results (hours, menu items, ratings once you have them).
22. **Favicon set** — full set (16x16, 32x32, apple-touch-icon, android chrome icons) + web manifest, not just a single favicon.ico.

## CATEGORY 5 — Content & Accessibility
23. **Alt text on all images** — descriptive, keyword-relevant where natural (e.g. "grilled chicken skewers catering tray — Standard Catering").
24. **Accessibility pass** — sufficient color contrast (check navy/gold/cream combinations), keyboard navigation works, form inputs have associated labels, images have alt text, buttons have accessible names.
25. **Mobile responsiveness** — test all 5 pages at 375px, 768px, 1024px, 1440px widths; no horizontal scroll, tap targets large enough.

## CATEGORY 6 — Performance
26. **Image optimization** — compress and convert brand photography to WebP with fallback, implement lazy loading below the fold.
27. **Bundle size check** — run a production build and check for unused dependencies, code-split routes if the bundle is large.
28. **Core Web Vitals** — run Lighthouse; target LCP < 2.5s, CLS < 0.1, INP < 200ms. Fix whatever's flagged.
29. **CDN/caching headers** — verify static assets are cached appropriately by the hosting provider.

## CATEGORY 7 — QA & Testing
30. **Broken link check** — crawl all internal links and verify none 404.
31. **Cross-browser check** — Chrome, Safari, Firefox at minimum (Safari matters for iOS-heavy Egyptian mobile traffic).
32. **Form submission end-to-end test** — confirm New Order and Contact forms actually deliver data where they're supposed to (email, backend, or CRM).
33. **Analytics verification** — confirm GA4 fires on page load and on key events (form submit, WhatsApp click, phone click), not just pageviews.

## CATEGORY 8 — Security
34. **Security headers** — Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy — set at the hosting/CDN level.
35. **Dependency audit** — run `npm audit` and resolve high/critical vulnerabilities before launch.
36. **Environment variables** — confirm no API keys or secrets are committed to the repo or exposed client-side.

## CATEGORY 9 — Post-Launch Discoverability (do these AFTER deploy)
37. **Submit sitemap to Google Search Console** — this is the actual step that gets you indexed; having a sitemap.xml file alone does nothing until submitted.
38. **Submit sitemap to Bing Webmaster Tools.**
39. **Set up/verify Google Business Profile** — critical for "appearing first" on local + brand searches; needs matching NAP, photos, categories (Catering, Food Truck).
40. **Set up Meta Pixel** if planning Instagram/Facebook ads.

---

## DELIVERABLE

After completing the audit:
1. Fix everything you can directly in the codebase.
2. Output a **markdown report** titled `launch-audit-report.md` listing every item above as ✅ Done / ⚠️ Needs my input / ❌ Not applicable, with a one-line note on what was changed for each ✅.
3. Flag clearly which items require accounts, credentials, or business information only I can provide (Google Business Profile, Search Console verification, WhatsApp Business number, actual privacy policy legal review).
4. Do not mark anything ✅ without having actually verified it in the running app or build output — no assumptions.
