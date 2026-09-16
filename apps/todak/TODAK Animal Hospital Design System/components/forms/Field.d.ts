/** Label + hint/error wrapper around any form control. */
export interface FieldProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Replaces the hint and turns the message red. */
  error?: React.ReactNode;
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
