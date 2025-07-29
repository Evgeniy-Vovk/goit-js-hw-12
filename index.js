import{a as S,S as q,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const E=["tank","war","danger","military","army","battle"];async function b(e,r=1){const c="47396340-f7005e76dc1b3bde31bf703a9",a="https://pixabay.com/api/",o={key:c,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{const i=await S.get(a,{params:o}),g=i.data.hits.filter(m=>!m.tags.split(",").map(f=>f.trim().toLowerCase()).some(f=>E.includes(f)));return{...i.data,hits:g}}catch(i){throw console.error("Error fetching images:",i),new Error("Failed to fetch images from Pixabay.")}}const H=new q(".gallery a",{captionsData:"alt",captionDelay:250});function x(e){const r=document.querySelector(".gallery");if(!r){console.error("Gallery container not found.");return}const c=e.map(({largeImageURL:a,webformatURL:t,tags:o,likes:i,views:g,comments:m,downloads:h})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img class="gallery-image" src="${t}" alt="${o}">
        <div class="image-info">
          <div class="info-item">
            <b>Likes</b>
            <p>${i}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${g}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${m}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${h}</p>
          </div>
        </div>
      </a>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",c),H.refresh()}function C(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function v(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function p(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function L(){const e=document.querySelector(".load-more-button");e&&e.classList.remove("hidden")}function l(){const e=document.querySelector(".load-more-button");e&&e.classList.add("hidden")}function A(){const e=document.querySelector(".gallery-item");if(e){const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}const w=document.querySelector(".form"),y=w.elements["search-text"],R=document.querySelector(".load-more-button");let s=1,d="",u=0;const P=15;l();p();w.addEventListener("submit",async e=>{if(e.preventDefault(),d=y.value.trim(),!d){n.warning({message:"Please enter a search query.",position:"topRight",backgroundColor:"rgba(255, 193, 7, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"}),y.value="";return}s=1,u=0,C(),l(),v();try{const r=await b(d,s);u=r.totalHits,r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query.<br>Please try again!",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",html:!0}):(x(r.hits),u>s*P?L():(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(76, 175, 80, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}),l()))}catch(r){n.error({title:"Error",message:r.message||"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{p()}});R.addEventListener("click",async()=>{s+=1,l(),v();try{const e=await b(d,s);x(e.hits),A(),u>s*P?L():(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(76, 175, 80, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}),l())}catch(e){n.error({title:"Error",message:e.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{p()}});
//# sourceMappingURL=index.js.map
