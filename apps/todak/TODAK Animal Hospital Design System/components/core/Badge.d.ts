/** Small status pill — 예약 확정, 접종 완료, 응급. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'brand' | 'mint' | 'accent' | 'cta' | 'calm' | 'neutral';
  icon?: string;
  /** Filled version for high-emphasis status on photos or frost panels. */
  solid?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
