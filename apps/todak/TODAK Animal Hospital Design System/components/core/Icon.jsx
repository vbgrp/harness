import React from 'react';
const cache={};
const BASE='https://unpkg.com/lucide-static@0.544.0/icons/';
/* Lucide (2px stroke, round caps) stands in for the brand's icon_medical_set — see readme ICONOGRAPHY. */
export function Icon({name='paw-print',size=20,strokeWidth,color='currentColor',title,style={},...rest}){
  const [svg,setSvg]=React.useState(cache[name]||'');
  React.useEffect(()=>{let live=true;
    if(cache[name]){setSvg(cache[name]);return}
    fetch(BASE+name+'.svg').then(r=>r.ok?r.text():'').then(t=>{cache[name]=t;if(live)setSvg(t)}).catch(()=>{});
    return()=>{live=false}},[name]);
  const markup=svg?svg.replace('<svg','<svg style="display:block;width:100%;height:100%"').replace(/stroke-width="[^"]*"/,'stroke-width="'+(strokeWidth??2)+'"'):'';
  return React.createElement('span',{role:'img','aria-label':title||name,title,style:{display:'inline-flex',width:size,height:size,flex:'0 0 auto',color,...style},...rest,dangerouslySetInnerHTML:{__html:markup}});
}
