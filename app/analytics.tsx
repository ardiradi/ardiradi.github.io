'use client';

import { useEffect } from 'react';

const PUBLIC_HOSTNAME = 'ardiradi.github.io';
const BEACON_SOURCE = 'https://static.cloudflareinsights.com/beacon.min.js';
const SCRIPT_ID = 'portfolio-cloudflare-web-analytics';
let beaconLoaded = false;

function normalizeBeaconToken(value: string | undefined): string | null {
  const raw = value?.trim() ?? '';
  if (!/^(?:[a-f0-9]{32}|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/i.test(raw)) return null;

  const token = raw.replaceAll('-', '').toLowerCase();
  // Reject nil/repeated placeholders and the starter's empty UUID.
  if (/^([a-f0-9])\1{31}$/.test(token) || token === '00000000000040008000000000000000') return null;
  return token;
}

export default function CloudflareWebAnalytics({ token }: { token?: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined' || window.location.hostname !== PUBLIC_HOSTNAME) return;

    const beaconToken = normalizeBeaconToken(token);
    if (!beaconToken || beaconLoaded || document.getElementById(SCRIPT_ID) || document.querySelector(`script[src="${BEACON_SOURCE}"]`)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = BEACON_SOURCE;
    script.type = 'module';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-cf-beacon', JSON.stringify({ token: beaconToken }));

    const onLoad = () => { beaconLoaded = true; };
    const onError = () => { script.remove(); };
    script.addEventListener('load', onLoad, { once: true });
    script.addEventListener('error', onError, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      // Only remove our pending load. An initialized page beacon stays singleton.
      if (!beaconLoaded) script.remove();
    };
  }, [token]);

  return null;
}
