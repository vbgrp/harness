/** Soft-tint inline notice / toast. */
export interface ToastProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  tone?: 'success' | 'info' | 'warning' | 'error';
  /** Override the tone's default Lucide icon. */
  icon?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
