document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll(".wp-block-masterblocks-copy-block .wp-element-button");navigator.clipboard?t.forEach((t=>{t.addEventListener("click",(function(t){let e=t.target.getAttribute("data-json"),o=this.textContent.trim(),r="Copied!";navigator.clipboard.writeText(e).then((()=>{this.textContent=r,this.setAttribute("aria-label",r),setTimeout((()=>{this.textContent=o,this.setAttribute("aria-label",o)}),1e3)}),(()=>{console.error("Error copying JSON to clipboard")}))}))})):console.error("Clipboard API not available in this browser.")}));