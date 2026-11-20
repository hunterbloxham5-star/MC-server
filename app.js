async function start(){
 const d=await fetch('catalog.json').then(r=>{if(!r.ok)throw new Error('Catalog request failed');return r.json()});
 const shared=document.querySelector('#shared-mod-list'),client=document.querySelector('#client-mod-list'),q=document.querySelector('#search'),cat=document.querySelector('#category'),count=document.querySelector('#count');
 function card(m,kind){
  const tag=kind==='shared'?'SERVER + CLIENT · VERIFY FIRST':'CLIENT ONLY · OPTIONAL';
  return '<article class="mod"><div class="tag">'+tag+' · '+m.category+'</div><h3>'+m.name+'</h3><p>'+m.note+'</p><a href="'+m.url+'" target="_blank" rel="noopener">Open CurseForge project page ↗</a></article>';
 }
 function render(){
  const term=q.value.toLowerCase(),c=cat.value;
  const rows=d.mods.filter(m=>(c==='all'||m.category===c)&&[m.name,m.category,m.side,m.note].join(' ').toLowerCase().includes(term));
  const sharedRows=rows.filter(m=>/server/i.test(m.side));
  const clientRows=rows.filter(m=>/client only/i.test(m.side));
  shared.innerHTML=sharedRows.map(m=>card(m,'shared')).join('');
  client.innerHTML=clientRows.map(m=>card(m,'client')).join('');
  count.textContent=rows.length+' mods · '+sharedRows.length+' shared candidates · '+clientRows.length+' optional client';
 }
 q.addEventListener('input',render);cat.addEventListener('change',render);render();
 function links(items,id){document.querySelector(id).innerHTML=items.map(x=>'<div class="link-list"><div><a href="'+x.url+'" target="_blank" rel="noopener">'+x.name+' ↗</a><p>'+x.note+'</p></div></div>').join('')}
 links(d.resourcePacks,'#packs');links(d.shaders,'#shader-list');
}
start().catch(()=>{document.querySelector('#shared-mod-list').textContent='Catalog could not load.';});
