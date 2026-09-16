/** Multi-line text field for 증상 메모 / 요청사항. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
