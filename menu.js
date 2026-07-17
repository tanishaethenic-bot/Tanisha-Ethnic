(function(){
  'use strict';
  function init(){
    const button=document.getElementById('menuBtn');
    const drawer=document.getElementById('mainNav');
    const closeButton=document.getElementById('closeMenu');
    const backdrop=document.getElementById('menuBackdrop');
    if(!button||!drawer||!backdrop)return;
    let open=false;
    const sync=()=>{
      drawer.classList.toggle('open',open);
      backdrop.classList.toggle('open',open);
      drawer.setAttribute('aria-hidden',open?'false':'true');
      button.setAttribute('aria-expanded',open?'true':'false');
      document.body.classList.toggle('noScroll',open);
    };
    const show=()=>{open=true;sync();};
    const hide=()=>{open=false;sync();};
    const toggle=()=>{open=!open;sync();};
    button.type='button';
    button.setAttribute('aria-controls','mainNav');
    button.setAttribute('aria-expanded','false');
    button.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();toggle();},{passive:false});
    if(closeButton){closeButton.type='button';closeButton.addEventListener('click',function(e){e.preventDefault();hide();});}
    backdrop.addEventListener('click',hide);
    drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',hide));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});
    window.addEventListener('pageshow',()=>{open=false;sync();});
    window.TanishaMenu={open:show,close:hide,toggle};
    sync();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
