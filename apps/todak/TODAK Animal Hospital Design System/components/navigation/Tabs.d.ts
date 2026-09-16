/**
 * Section switcher — pill group (in-card) or underline (page level).
 * @startingPoint section="Navigation" subtitle="Pill and underline tab groups" viewport="700x180"
 */
export interface TabsProps {
  items?: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'pill' | 'underline';
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
