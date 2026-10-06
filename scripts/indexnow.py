#!/usr/bin/env python3
"""
Submits shipailab.com URLs to IndexNow (Bing, Yandex, Seznam, Naver share submissions). Same setup as ElixRank, TikoNote and YoFluent.
The key file is public/<KEY>.txt, served at https://shipailab.com/<KEY>.txt, so deploy it BEFORE submitting.

    python3 scripts/indexnow.py https://shipailab.com/a https://shipailab.com/b   # these URLs
    python3 scripts/indexnow.py --all https://shipailab.com/sitemap.xml            # every URL in the live sitemap
    python3 scripts/indexnow.py --diff old-sitemap.xml new-sitemap.xml             # only new or updated URLs

Submit only new or changed pages, never the whole site on every deploy.
"""
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

HOST = 'shipailab.com'
KEY = '6ea6f48c1b6e58c587ac484f85a0da81'
KEY_LOCATION = f'https://{HOST}/{KEY}.txt'
ENDPOINT = 'https://api.indexnow.org/indexnow'
MAX_URLS = 10_000  # IndexNow limit per request


def sitemap_entries(path: str) -> dict[str, str]:
    """{url: lastmod or ''} from a sitemap file (missing or empty file → {})."""
    if path.startswith('http'):
        text = urllib.request.urlopen(path, timeout=30).read().decode()
    else:
        p = Path(path)
        if not p.exists() or p.stat().st_size == 0:
            return {}
        text = p.read_text()
    out = {}
    for block in re.findall(r'<url>(.*?)</url>', text, re.S):
        loc = re.search(r'<loc>(.*?)</loc>', block)
        if loc:
            mod = re.search(r'<lastmod>(.*?)</lastmod>', block)
            out[loc.group(1).strip()] = mod.group(1).strip() if mod else ''
    return out


def changed_urls(old_path: str, new_path: str) -> list[str]:
    old, new = sitemap_entries(old_path), sitemap_entries(new_path)
    return [u for u, mod in new.items() if u not in old or old[u] != mod]


def submit(urls: list[str]) -> bool:
    urls = [u for u in dict.fromkeys(urls) if u.startswith(f'https://{HOST}/')]
    if not urls:
        print('IndexNow: nothing to submit')
        return True
    if len(urls) > MAX_URLS:
        raise SystemExit(f'IndexNow: {len(urls)} URLs is over the {MAX_URLS} limit per request')
    body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': KEY_LOCATION, 'urlList': urls}).encode()
    req = urllib.request.Request(ENDPOINT, data=body, method='POST', headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            status = res.status
    except urllib.error.HTTPError as err:
        # 400 bad request, 403 key not valid / not found, 422 URLs don't match the host, 429 too many requests
        print(f'IndexNow: HTTP {err.code} {err.reason}: {err.read()[:200]!r}')
        return False
    # 200 = submitted, 202 = accepted (key validation pending)
    print(f'IndexNow: HTTP {status}, submitted {len(urls)} URL(s)')
    for u in urls:
        print(f'  {u}')
    return status in (200, 202)


def main() -> None:
    args = sys.argv[1:]
    if not args:
        raise SystemExit(__doc__)
    if args[0] == '--all':
        urls = list(sitemap_entries(args[1]))
    elif args[0] == '--diff':
        urls = changed_urls(args[1], args[2])
    else:
        urls = args
    sys.exit(0 if submit(urls) else 1)


if __name__ == '__main__':
    main()
