/** Single-choice control — 반려동물 종류, 시간대. */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string, e: React.ChangeEvent) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
