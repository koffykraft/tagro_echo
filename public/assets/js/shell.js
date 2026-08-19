(()=>{
  const page=document.body.dataset.page||'';
  const icons={
    equipment:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20H4Z"/><path d="M9 20v-6h6v6"/></svg>',
    support:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 0 5 22Z"/><path d="M5 4.5V22"/></svg>',
    parts:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
    ai:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9Z"/></svg>',
    search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M9 8.5c.3 2.8 2.1 4.7 5 5.4"/></svg>',
    mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
  };
  const nav=[['equipment','index.html','Equipment'],['support','service.html','Support'],['parts','parts.html','Parts'],['ai','assistant.html','Ask AI']];
  const gate=(url,label,source,model='')=>`resources.html?url=${encodeURIComponent(url)}&label=${encodeURIComponent(label)}&source=${encodeURIComponent(source)}${model?`&model=${encodeURIComponent(model)}`:''}`;
  const header=document.querySelector('[data-shell="header"]');
  if(header){
    header.outerHTML=`<header class="site-header"><div class="header-inner"><a class="brand-lock" href="index.html" aria-label="TAGRO ECHO home"><img class="tagro-mark" src="assets/brand/tagro-logo.png" alt="TAGRO"><span class="brand-cross" aria-hidden="true">×</span><img class="echo-mark" src="assets/brand/echo-logo-dark.svg" alt="ECHO"></a><nav class="primary-nav" aria-label="Primary navigation">${nav.map(([k,u,l])=>`<a href="${u}" class="${page===k?'active':''}">${icons[k]}<span>${l}</span></a>`).join('')}</nav></div></header>`;
  }
  const footer=document.querySelector('[data-shell="footer"]');
  if(footer){
    footer.outerHTML=`<footer class="site-footer"><div class="footer-inner"><div class="contact-actions"><a class="icon-action" href="https://wa.me/918921773291" aria-label="WhatsApp TAGRO" title="WhatsApp">${icons.whatsapp}</a><a class="icon-action" href="mailto:info@tagro.in" aria-label="Email TAGRO" title="Email">${icons.mail}</a></div><div class="external-links"><a href="${gate('https://www.tagro.in/','TAGRO website','TAGRO')}">Visit TAGRO website</a><a href="${gate('https://www.echo-india.com/en_us/','ECHO India website','ECHO India')}">Visit ECHO India website</a></div></div></footer>`;
  }
  window.TAGRO_UI={icons,gate};
})();