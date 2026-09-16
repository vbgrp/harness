Confirmation and short forms (예약 확인, 취소 확인).

```jsx
<Dialog open={o} title="예약을 확정할까요?" description="9월 18일 오후 3시 · 예방접종" onClose={close}
  footer={<><Button variant="outline" onClick={close}>다시 볼게요</Button><Button onClick={confirm}>확정하기</Button></>} />
```

Scrim is `rgba(24,44,66,.38)` with 3px blur — never plain black.
