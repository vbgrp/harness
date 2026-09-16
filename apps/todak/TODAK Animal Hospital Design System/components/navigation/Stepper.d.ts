/** Horizontal progress for the 예약 flow. Intentional addition — the reservation journey needs it. */
export interface StepperProps {
  /** Step labels in order. */
  steps?: string[];
  /** Zero-based index of the active step. */
  current?: number;
  style?: React.CSSProperties;
}
export function Stepper(props: StepperProps): JSX.Element;
