import React from 'react';
export function Logo({variant='lockup',tone='frost',height=64,alt='토닥 동물병원',style={},...rest}){
  const base=(typeof window!=='undefined'&&window.__TODAK_ASSETS__)||'assets/';
  const file={lockup:tone==='white'?'logo-todak-white.png':'logo-todak-primary.png',
    symbol:tone==='white'?'symbol-todak-white.png':'symbol-todak.png',
    wordmark:'wordmark-todak.png'}[variant];
  return React.createElement('img',{...rest,src:base+file,alt,style:{height,width:'auto',display:'block',...style}});
}
