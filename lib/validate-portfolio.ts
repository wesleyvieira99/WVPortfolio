export function validatePortfolio(d:any){
  const fail=(s:string):never=>{throw Error(s)};
  if(!d||typeof d!=='object'||Array.isArray(d))fail('A portfolio object is required.');
  for(const k of ['roles','tech','articles','education','courses','recommendations','press','photos','awards','languages','credentials','article_groups','award_captions'])if(!Array.isArray(d[k]))fail('Missing list: '+k);
  if(typeof d.profile!=='string'||d.profile.length>20000||!d.brands?.issuers||!d.brands?.files)fail('Missing profile or brand configuration.');
  if(d.courses.length>10000||d.articles.length>1000||d.education.length>500||d.roles.length>200)fail('Record limit exceeded.');
  const fields=(entry:any,keys:string[],label:string)=>{if(!entry||keys.some(k=>typeof entry[k]!=='string'))fail('Invalid '+label+' entry.');};
  for(const c of d.courses){fields(c,['title','issuer','category'],'course');if(c.links&&(!Array.isArray(c.links)||c.links.some((x:any)=>typeof x!=='string')))fail('Invalid course links.');}
  for(const a of d.articles){fields(a,['title','summary','tags','image','url'],'article');if(!/^https:\/\//.test(a.url))fail('Articles require HTTPS source URLs.');if(a.blocks){if(!Array.isArray(a.blocks)||a.blocks.length>10000)fail('Invalid article blocks.');for(const b of a.blocks){if(b.type==='image'){if(typeof b.url!=='string'&&typeof b.local!=='string')fail('Image URL required.');}else fields(b,['type','text'],'article block');if(b.links&&(!Array.isArray(b.links)||b.links.some((l:any)=>typeof l.url!=='string'||typeof l.text!=='string')))fail('Invalid article references.');}}}
  for(const e of d.education)fields(e,['institution','title','summary'],'education');
  for(const r of d.roles){fields(r,['title','employer_date'],'role');if(!Array.isArray(r.bullets)||r.bullets.some((x:any)=>typeof x!=='string'))fail('Role bullets must be text.');}
  for(const t of d.tech)fields(t,['title','body'],'expertise');
  for(const r of d.recommendations)fields(r,['name','context','quote'],'recommendation');
  for(const p of d.press)fields(p,['meta','title','url'],'press');
  for(const a of d.article_groups){fields(a,['title','intro'],'article group');if(!Array.isArray(a.ids))fail('Article group IDs required.');}
  for(const k of ['photos','awards','award_captions'])if(d[k].some((x:any)=>typeof x!=='string'))fail(k+' must contain text.');
  for(const k of ['languages','credentials'])if(d[k].some((x:any)=>!Array.isArray(x)||x.length<2||x.some((v:any)=>typeof v!=='string')))fail('Invalid '+k+' entries.');
  if(d.presentation){const p=d.presentation;for(const k of ['hero_summary','location','organization','portrait','headline'])if(p[k]!==undefined&&typeof p[k]!=='string')fail('Invalid presentation text.');for(const [key,size] of [['metrics',2],['impact',4]] as const)if(p[key]&&(!Array.isArray(p[key])||p[key].some((a:any)=>!Array.isArray(a)||a.length!==size||a.some((s:any)=>typeof s!=='string'))))fail('Invalid presentation '+key);}
  if(d.education.some((e:any)=>/est[aá]cio/i.test(e.institution)))fail('Estácio remains excluded by the owner’s preference.');
  return d;
}
