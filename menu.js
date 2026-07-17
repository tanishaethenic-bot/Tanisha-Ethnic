(function(){
  'use strict';
  function initMenu(){
    const btn=document.getElementById('menuBtn');
    const drawer=document.getElementById('mainNav');
    const close=document.getElementById('closeMenu');
    const backdrop=document.getElementById('menuBackdrop');
    if(!btn||!drawer||!backdrop){console.warn('Tanisha menu elements missing');return;}
    let opened=false;
    function render(){
      drawer.classList.toggle('open',opened);
      backdrop.classList.toggle('open',opened);
      drawer.setAttribute('aria-hidden',String(!opened));
      btn.setAttribute('aria-expanded',String(opened));
      document.documentElement.classList.toggle('menuOpen',opened);
      document.body.classList.toggle('noScroll',opened);
    }
    function setOpen(value){opened=Boolean(value);render();}
    btn.setAttribute('type','button');
    btn.setAttribute('aria-controls','mainNav');
    btn.addEventListener('pointerup',function(e){e.preventDefault();e.stopPropagation();setOpen(!opened);});
    btn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();});
    if(close){close.setAttribute('type','button');close.addEventListener('click',e=>{e.preventDefault();setOpen(false);});}
    backdrop.addEventListener('click',()=>setOpen(false));
    drawer.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false);});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});
    window.addEventListener('pageshow',()=>setOpen(false));
    window.TanishaMenu={open:()=>setOpen(true),close:()=>setOpen(false),toggle:()=>setOpen(!opened)};
    render();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initMenu,{once:true});else initMenu();
})();
