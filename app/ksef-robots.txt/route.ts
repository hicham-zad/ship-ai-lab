import { ksefUrl } from '@/data/ksef/config';

// ksef.shipailab.com/robots.txt (proxy.ts rewrites it here); public/robots.txt serves shipailab.com.
export function GET() {
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];
  const rules = ['User-agent: *\nAllow: /', ...bots.map((b) => `User-agent: ${b}\nAllow: /`)].join('\n\n');
  return new Response(`${rules}\n\nSitemap: ${ksefUrl('/sitemap.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
