console.log("Hello world!");const t=document.querySelector(".card-chart"),e=(new Date).getDay();[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}].forEach((function(a,o){const n=document.createElement("div");n.classList.add("chart-bar"),n.title=`${a.amount}`;const c=document.createElement("div");c.classList.add("chart-name"),c.innerHTML=`${a.day}`;const d=document.createElement("div");d.classList.add("chart-tooltip"),d.innerHTML=`$${a.amount}`,n.appendChild(c),n.appendChild(d),o+1==e&&n.classList.add("chart-bar--active"),n.style.height=3*a.amount+"px",t.appendChild(n),n.addEventListener("mouseover",(function(t){const e=n.querySelector(".chart-tooltip");e.classList.add("chart-tooltip--visable"),setTimeout((function(){e.classList.add("chart-tooltip--open")}),20)})),n.addEventListener("mouseout",(function(t){const e=n.querySelector(".chart-tooltip");e.classList.remove("chart-tooltip--visable"),setTimeout((function(){e.classList.remove("chart-tooltip--open")}),20)}))}));document.querySelector(".chart-tooltip"),document.querySelector(".chart-bar");
//# sourceMappingURL=index.cea1de62.js.map
