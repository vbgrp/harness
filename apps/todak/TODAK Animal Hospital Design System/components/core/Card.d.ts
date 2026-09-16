/**
 * Content container: 16px radius, hairline border, soft warm shadow. Never a coloured left border.
 * @startingPoint section="Core" subtitle="Card surfaces, icon heads, frost panel" viewport="700x300"
 */
export interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Lucide icon rendered in a round tinted chip above the title. */
  icon?: string;
  footer?: React.ReactNode;
  surface?: 'white' | 'sunken' | 'brandSoft' | 'calm' | 'mint' | 'brand';
  /** Lifts 2px with a deeper shadow on hover. */
  interactive?: boolean;
  padding?: number;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
