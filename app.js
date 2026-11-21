async function start(){
 const d=await fetch('catalog.json').then(r=>{if(!r.ok)throw new Error('Catalog request failed');return r.json()});
 const shared=document.querySelector('#shared-mod-list'),requiredClient=document.querySelector('#required-client-mod-list'),client=document.querySelector('#client-mod-list'),q=document.querySelector('#search'),cat=document.querySelector('#category'),count=document.querySelector('#count');
 function card(m){
  let tag='CLIENT ONLY · OPTIONAL';
  if(m.required) tag='CLIENT ONLY · REQUIRED FOR PACK VISUALS';
  else if(m.side==='Both sides') tag='BOTH SIDES · PLAYER DOWNLOAD REQUIRED WHEN USED';
  else if(m.side==='Server only') tag='SERVER ONLY · NO PLAYER DOWNLOAD';
  else if(m.side==='Client and server optional') tag='OPTIONAL · CLIENT OR SERVER';
  const link=m.playerDownload!==false&&m.url?'<a href="'+m.url+'" target="_blank" rel="noopener">Open CurseForge project page ↗</a>':'';
  return '<article class="mod"><div class="tag">'+tag+' · '+m.category+'</div><h3>'+m.name+'</h3><p>'+m.note+'</p>'+link+'</article>';
 }
 function render(){
  const term=q.value.toLowerCase(),c=cat.value;
  const rows=d.mods.filter(m=>(c==='all'||m.category===c)&&[m.name,m.category,m.side,m.note].join(' ').toLowerCase().includes(term));
  const sharedRows=rows.filter(m=>m.side==='Both sides');
  const serverOnlyRows=rows.filter(m=>m.side==='Server only');
  const requiredClientRows=rows.filter(m=>m.side==='Client only'&&m.required===true);
  const clientRows=rows.filter(m=>m.side!=='Both sides'&&m.side!=='Server only'&&m.required!==true);
  shared.innerHTML=sharedRows.map(card).join('');
  document.querySelector('#server-only-mod-list').innerHTML=serverOnlyRows.map(card).join('');
  requiredClient.innerHTML=requiredClientRows.map(card).join('');
  client.innerHTML=clientRows.map(card).join('');
  count.textContent=rows.length+' mods · '+sharedRows.length+' both-side candidates · '+serverOnlyRows.length+' server-only · '+requiredClientRows.length+' required client support · '+clientRows.length+' optional client/dual-side';
 }
 q.addEventListener('input',render);cat.addEventListener('change',render);render();
 function links(items,id){document.querySelector(id).innerHTML=items.map(x=>'<div class="link-list"><div><a href="'+x.url+'" target="_blank" rel="noopener">'+x.name+' ↗</a><p>'+x.note+'</p></div></div>').join('')}
 links(d.resourcePacks,'#packs');links(d.shaders,'#shader-list');
}
start().catch(()=>{document.querySelector('#shared-mod-list').textContent='Catalog could not load.';});
