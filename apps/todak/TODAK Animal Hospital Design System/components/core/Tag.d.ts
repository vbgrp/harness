/** Selectable / removable filter chip — 진료 항목, 반려동물 종류. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
