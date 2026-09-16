/**
 * The TODAK logo. Assets are raster PNGs extracted from the supplied brand sheet (no SVG was provided).
 * Set window.__TODAK_ASSETS__ to the relative path of the assets folder before rendering.
 * @startingPoint section="Brand" subtitle="Logo lockup, symbol and wordmark" viewport="700x220"
 */
export interface LogoProps {
  /** lockup = symbol + KR/EN wordmark, symbol = sprout+pets only, wordmark = type only. */
  variant?: 'lockup' | 'symbol' | 'wordmark';
  /** frost for light grounds, white for Frost panels and photos. */
  tone?: 'frost' | 'white';
  height?: number;
  alt?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
