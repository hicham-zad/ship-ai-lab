import { APP_STORE_URL, PLAY_STORE_URL } from '@/data/sobergirl/config';

/** Google Play link plus an App Store button that stays disabled ("coming soon") until APP_STORE_URL is set. */
export default function StoreButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="sga-stores">
      <a href={PLAY_STORE_URL} className={`sga-btn${light ? ' sga-btn-light' : ''}`} target="_blank" rel="noopener noreferrer">
        ▶ Get it on Google Play
      </a>
      {APP_STORE_URL ? (
        <a href={APP_STORE_URL} className={`sga-btn${light ? ' sga-btn-light' : ''}`} target="_blank" rel="noopener noreferrer">
          Download on the App Store
        </a>
      ) : (
        <span className={`sga-soon${light ? ' on-dark' : ''}`} aria-disabled="true">
          App Store · Coming soon
        </span>
      )}
    </div>
  );
}
