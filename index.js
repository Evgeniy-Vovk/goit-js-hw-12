import{a as P,S,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const q=["tank","war","danger","military","army","battle"];async function p(e,t=1){const l="47396340-f7005e76dc1b3bde31bf703a9",a="https://pixabay.com/api/",o={key:l,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{const i=await P.get(a,{params:o}),L=i.data.hits.filter(w=>!w.tags.split(",").map(g=>g.trim().toLowerCase()).some(g=>q.includes(g)));return{...i.data,hits:L}}catch(i){throw console.error("Error fetching images:",i),new Error("Failed to fetch images from Pixabay.")}}const E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(e){const t=document.querySelector(".gallery");if(!t){console.error("Gallery container not found.");return}const l=e.map(a=>`
        <li class="gallery-item">
            <a href="${a.largeImageURL}">
                <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}">
                <div class="image-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <p>${a.likes}</p>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <p>${a.views}</p>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <p>${a.comments}</p>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <p>${a.downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",l),E.refresh()}function H(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function m(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function b(){const e=document.querySelector(".load-more-button");e&&e.classList.remove("hidden")}function c(){const e=document.querySelector(".load-more-button");e&&e.classList.add("hidden")}function R(){const e=document.querySelector(".gallery-item");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}const x=document.querySelector(".form"),f=x.elements["search-text"],C=document.querySelector(".load-more-button");let s=1,d="",u=0;const v=15;c();m();x.addEventListener("submit",async e=>{if(e.preventDefault(),d=f.value.trim(),!d){n.warning({message:"Please enter a search query.",position:"topRight",backgroundColor:"rgba(255, 193, 7, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"}),f.value="";return}s=1,u=0,H(),c(),y();try{const t=await p(d,s);u=t.totalHits,t.hits.length===0?n.error({message:"Sorry, there are no images matching your search query.<br>Please try again!",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",html:!0}):(h(t.hits),u>s*v?b():(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(76, 175, 80, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}),c()))}catch(t){n.error({title:"Error",message:t.message||"An error occurred while fetching images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{m()}});C.addEventListener("click",async()=>{s+=1,c(),y();try{const e=await p(d,s);h(e.hits),R(),u>s*v?b():(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(76, 175, 80, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px",color:"#ffffff",html:!0}),c())}catch(e){n.error({title:"Error",message:e.message||"An error occurred while loading more images. Please try again later.",position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.8)",maxWidth:"432px",minHeight:"88px",padding:"20px"})}finally{m()}});
//# sourceMappingURL=index.js.map
