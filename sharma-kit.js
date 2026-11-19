/*! Sharma design kit v1.3 · small helpers for the shared look.
   <script src="https://sharma-kit.sharma-crew.workers.dev/sharma-kit.js" defer></script>
   Adds the icon set, tab highlighting, bottom sheets, toast, offline banner, search clear,
   the shared lock screen and (v1.2) the native feel: screen stack with push/pop and edge swipe,
   draggable sheets, pull to refresh, instant press, last-data-first loading.
   Holds no data and no secrets; SK.data only fetches the URLs the app asks for. */
(function(){
  "use strict";
  var SPRITE = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><symbol id=\"i-home\" viewBox=\"0 0 24 24\"><path d=\"M3.5 10.5 12 3.8l8.5 6.7\"/><path d=\"M5.5 9v10.5h4.5v-6h4v6h4.5V9\"/></symbol><symbol id=\"i-list\" viewBox=\"0 0 24 24\"><path d=\"M9 6.5h11M9 12h11M9 17.5h11\"/><circle cx=\"4.75\" cy=\"6.5\" r=\".9\"/><circle cx=\"4.75\" cy=\"12\" r=\".9\"/><circle cx=\"4.75\" cy=\"17.5\" r=\".9\"/></symbol><symbol id=\"i-doc\" viewBox=\"0 0 24 24\"><path d=\"M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z\"/><path d=\"M14 3.5V8h4.5M9 12.5h6M9 16h6\"/></symbol><symbol id=\"i-folder\" viewBox=\"0 0 24 24\"><path d=\"M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z\"/></symbol><symbol id=\"i-search\" viewBox=\"0 0 24 24\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6\"/><path d=\"m15 15 5.5 5.5\"/></symbol><symbol id=\"i-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 5v14M5 12h14\"/></symbol><symbol id=\"i-minus\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\"/></symbol><symbol id=\"i-close\" viewBox=\"0 0 24 24\"><path d=\"M6 6l12 12M18 6 6 18\"/></symbol><symbol id=\"i-check\" viewBox=\"0 0 24 24\"><path d=\"m5 12.5 4.5 4.5L19 7.5\"/></symbol><symbol id=\"i-chevron-right\" viewBox=\"0 0 24 24\"><path d=\"m9.5 5.5 6.5 6.5-6.5 6.5\"/></symbol><symbol id=\"i-chevron-left\" viewBox=\"0 0 24 24\"><path d=\"M14.5 5.5 8 12l6.5 6.5\"/></symbol><symbol id=\"i-chevron-down\" viewBox=\"0 0 24 24\"><path d=\"m5.5 9.5 6.5 6.5 6.5-6.5\"/></symbol><symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><path d=\"M12 4 2.8 19.5h18.4z\"/><path d=\"M12 10v4.5\"/><circle cx=\"12\" cy=\"17\" r=\".6\"/></symbol><symbol id=\"i-info\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 11v5.5\"/><circle cx=\"12\" cy=\"7.8\" r=\".6\"/></symbol><symbol id=\"i-bell\" viewBox=\"0 0 24 24\"><path d=\"M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2H4.5z\"/><path d=\"M10 20.5a2 2 0 0 0 4 0\"/></symbol><symbol id=\"i-calendar\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"1.5\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/></symbol><symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/></symbol><symbol id=\"i-user\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"8\" r=\"3.75\"/><path d=\"M4.5 20.5c.8-4 3.8-6 7.5-6s6.7 2 7.5 6\"/></symbol><symbol id=\"i-users\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"8.5\" r=\"3.25\"/><path d=\"M2.75 19.5c.6-3.4 3-5.2 6.25-5.2s5.65 1.8 6.25 5.2\"/><path d=\"M15.5 5.6a3.25 3.25 0 0 1 0 6M17.5 14.6c2 .6 3.3 2.2 3.75 4.9\"/></symbol><symbol id=\"i-building\" viewBox=\"0 0 24 24\"><path d=\"M4.5 20.5V4.5h10v16M14.5 9.5h5v11M3 20.5h18\"/><path d=\"M8 8h3M8 11.5h3M8 15h3\"/></symbol><symbol id=\"i-house\" viewBox=\"0 0 24 24\"><path d=\"M4 11 12 4.5l8 6.5M6 9.5v10.5h12V9.5\"/><path d=\"M10 20v-5h4v5\"/></symbol><symbol id=\"i-briefcase\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"7.5\" width=\"17\" height=\"12\" rx=\"1.5\"/><path d=\"M9 7.5V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3.5 12.5h17\"/></symbol><symbol id=\"i-upload\" viewBox=\"0 0 24 24\"><path d=\"M12 15.5V4M7.5 8.5 12 4l4.5 4.5M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15\"/></symbol><symbol id=\"i-download\" viewBox=\"0 0 24 24\"><path d=\"M12 4v11.5M7.5 11 12 15.5l4.5-4.5M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15\"/></symbol><symbol id=\"i-share\" viewBox=\"0 0 24 24\"><path d=\"M12 14.5V3.5M8 7.5l4-4 4 4M7.5 10.5H6A1.5 1.5 0 0 0 4.5 12v7A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1.5\"/></symbol><symbol id=\"i-phone\" viewBox=\"0 0 24 24\"><path d=\"M5.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2z\"/></symbol><symbol id=\"i-mail\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"5.5\" width=\"17\" height=\"13\" rx=\"1.5\"/><path d=\"m4 6.5 8 6.5 8-6.5\"/></symbol><symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.25\"/></symbol><symbol id=\"i-camera\" viewBox=\"0 0 24 24\"><path d=\"M3.5 8.5A1.5 1.5 0 0 1 5 7h2.5L9 4.5h6L16.5 7H19a1.5 1.5 0 0 1 1.5 1.5v9.5A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/></symbol><symbol id=\"i-settings\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7\"/></symbol><symbol id=\"i-more\" viewBox=\"0 0 24 24\"><circle cx=\"5.5\" cy=\"12\" r=\"1.1\"/><circle cx=\"12\" cy=\"12\" r=\"1.1\"/><circle cx=\"18.5\" cy=\"12\" r=\"1.1\"/></symbol><symbol id=\"i-lock\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10.5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M8 10.5V7.5a4 4 0 0 1 8 0v3\"/></symbol><symbol id=\"i-filter\" viewBox=\"0 0 24 24\"><path d=\"M4 5.5h16M7 12h10M10 18.5h4\"/></symbol><symbol id=\"i-trash\" viewBox=\"0 0 24 24\"><path d=\"M4.5 6.5h15M9.5 6.5V4.5h5v2M6.5 6.5l1 13.5h9l1-13.5M10 10.5v6M14 10.5v6\"/></symbol><symbol id=\"i-edit\" viewBox=\"0 0 24 24\"><path d=\"M15.5 4.5l4 4L8.5 19.5H4.5v-4z\"/><path d=\"M13 7l4 4\"/></symbol><symbol id=\"i-link\" viewBox=\"0 0 24 24\"><path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2\"/></symbol><symbol id=\"i-bolt\" viewBox=\"0 0 24 24\"><path d=\"M13 3 5.5 13.5H12L11 21l7.5-10.5H12z\"/></symbol><symbol id=\"i-fan\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"1.75\"/><path d=\"M12 10.25C11 6.5 12 3.5 14.5 3.5c2.5 0 2.5 3.5-.75 7.25M13.75 12c3.75-1 6.75 0 6.75 2.5 0 2.5-3.5 2.5-7.25-.75M12 13.75c1 3.75 0 6.75-2.5 6.75-2.5 0-2.5-3.5.75-7.25M10.25 12C6.5 13 3.5 12 3.5 9.5c0-2.5 3.5-2.5 7.25.75\"/></symbol><symbol id=\"i-wifi-off\" viewBox=\"0 0 24 24\"><path d=\"M3.5 3.5l17 17M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 4.5-2.6M14.5 10.4A10 10 0 0 1 19 13M2 9.5a15 15 0 0 1 4.3-2.9M10 5.6A15 15 0 0 1 22 9.5\"/><circle cx=\"12\" cy=\"19.5\" r=\".6\"/></symbol><symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><path d=\"M4 20.5h16M7 17V11M12 17V6.5M17 17v-8\"/></symbol><symbol id=\"i-dollar\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5v17M16 7.5c-.6-1.3-2-2-4-2-2.4 0-4 1.2-4 3s1.6 2.6 4 3.2 4.2 1.4 4.2 3.3-1.8 3.2-4.2 3.2c-2.2 0-3.8-.9-4.4-2.4\"/></symbol><symbol id=\"i-note\" viewBox=\"0 0 24 24\"><path d=\"M5 3.5h14v12.5l-4.5 4.5H5z\"/><path d=\"M14.5 20.5V16H19M8.5 8h7M8.5 11.5h5\"/></symbol><symbol id=\"i-star\" viewBox=\"0 0 24 24\"><path d=\"m12 3.8 2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.4l-5.1 2.8 1.1-5.6-4.2-3.9 5.7-.7z\"/></symbol><symbol id=\"i-trophy\" viewBox=\"0 0 24 24\"><path d=\"M8 4.5h8v5a4 4 0 0 1-8 0zM8 6.5H4.5c0 3 1.5 4.5 3.7 4.8M16 6.5h3.5c0 3-1.5 4.5-3.7 4.8M12 13.5v3.5M8.5 20h7M9.5 17h5v3h-5z\"/></symbol><symbol id=\"i-send\" viewBox=\"0 0 24 24\"><path d=\"M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z\"/></symbol><symbol id=\"i-refresh\" viewBox=\"0 0 24 24\"><path d=\"M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4h-4\"/></symbol><symbol id=\"i-logout\" viewBox=\"0 0 24 24\"><path d=\"M14 4.5H6A1.5 1.5 0 0 0 4.5 6v12A1.5 1.5 0 0 0 6 19.5h8M10 12h10.5M17 8.5l3.5 3.5-3.5 3.5\"/></symbol><symbol id=\"i-globe\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5S9.6 5.9 12 3.5z\"/></symbol><symbol id=\"i-tools\" viewBox=\"0 0 24 24\"><path d=\"M14.7 6.3a4 4 0 0 0-5.2 5.2L4 17l3 3 5.5-5.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-.6-.6-2.4z\"/></symbol><symbol id=\"i-clipboard\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"4.5\" width=\"14\" height=\"16\" rx=\"1.5\"/><path d=\"M9 4.5V3.5h6v1M9 4.5v1.5h6V4.5M8.5 11l2 2 4-4M8.5 16.5h7\"/></symbol><symbol id=\"i-tv\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"1.5\"/><path d=\"M8.5 20.5h7\"/></symbol><symbol id=\"i-backspace\" viewBox=\"0 0 24 24\"><path d=\"M8.5 5.5H20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8.5L3 12z\"/><path d=\"m11.5 9.5 5 5M16.5 9.5l-5 5\"/></symbol><symbol id=\"i-face-id\" viewBox=\"0 0 24 24\"><path d=\"M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5M9 9.5v1M15 9.5v1M12 9.5v3.5h-1M9.5 16a3.5 3.5 0 0 0 5 0\"/></symbol></svg>";
  var STATUS = {"Not started":"idle","In progress":"prog","Needs you":"need","Done":"done","Problem":"prob"};
  var doc = document;
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
  function injectSprite(){
    if (doc.getElementById("sk-sprite")) return;
    var d = doc.createElement("div"); d.id="sk-sprite"; d.setAttribute("aria-hidden","true");
    d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
    d.innerHTML = SPRITE; doc.body.insertBefore(d, doc.body.firstChild);
  }
  function icon(name, cls){ return '<svg class="sk-icon'+(cls?" "+cls:"")+'" aria-hidden="true" focusable="false"><use href="#i-'+esc(name)+'"/></svg>'; }
  function pill(word){
    var k = STATUS[word]; if(!k) { console.warn("[sharma-kit] status word not in kit:", word); k="idle"; }
    return '<span class="sk-pill sk-pill--'+k+'">'+esc(word)+'</span>';
  }

  /* dates. fmtDate("2026-11-19") -> "Nov 19, 2026".
     late("2026-11-14") -> {days:5, text:"5 days late"} when the date is before today (Eastern), else null.
     lateHtml(date) -> '<span class="sk-late">5 days late</span>' or "". Red is only ever used for late. */
  function todayET(){ return new Date().toLocaleDateString("en-CA",{timeZone:"America/New_York"}); }
  function fmtDate(d){ if(!d) return ""; var p=String(d).slice(0,10).split("-").map(Number); if(p.length<3||!p[0]) return ""; return new Date(Date.UTC(p[0],p[1]-1,p[2])).toLocaleDateString("en-US",{timeZone:"UTC",month:"short",day:"numeric",year:"numeric"}); }
  function late(d, today){
    if(!d) return null; today = today || todayET(); d = String(d).slice(0,10); if (d >= today) return null;
    var a=d.split("-").map(Number), b=today.split("-").map(Number);
    var days = Math.round((Date.UTC(b[0],b[1]-1,b[2]) - Date.UTC(a[0],a[1]-1,a[2]))/864e5);
    return { days: days, text: days + (days===1?" day late":" days late") };
  }
  function lateHtml(d, today){ var l = late(d, today); return l ? '<span class="sk-late">'+l.text+'</span>' : ""; }

  /* date field: <label class="sk-field sk-field--row sk-date"><span class="sk-field__label">Sent on</span>
       <span class="sk-date__text"></span><input class="sk-date__input" type="date" id="bidDate" value="2026-11-19"></label>
     Shows "Nov 19, 2026", tap opens the phone's own date picker, the input keeps the plain value for saving. */
  function dateField(id, label, value, opts){
    opts = opts || {};
    return '<label class="sk-field sk-field--row sk-date" for="'+esc(id)+'"><span class="sk-field__label">'+esc(label)+'</span>'
      + '<span class="sk-date__text"></span><input class="sk-date__input" type="date" id="'+esc(id)+'" value="'+esc(value||"")+'" data-empty="'+esc(opts.empty||"Not set")+'" aria-label="'+esc(label)+'"></label>';
  }
  function syncDate(input){
    var t = input.parentNode.querySelector(".sk-date__text"); if(!t) return;
    var v = fmtDate(input.value); t.textContent = v || input.getAttribute("data-empty") || "Not set"; t.classList.toggle("is-empty", !v);
  }
  function syncDates(root){ (root||doc).querySelectorAll(".sk-date__input").forEach(syncDate); }
  doc.addEventListener("input", function(e){ if (e.target.classList && e.target.classList.contains("sk-date__input")) syncDate(e.target); });
  doc.addEventListener("change", function(e){ if (e.target.classList && e.target.classList.contains("sk-date__input")) syncDate(e.target); });
  doc.addEventListener("click", function(e){ var i = e.target.closest && e.target.closest(".sk-date"); if(!i) return; var inp = i.querySelector(".sk-date__input"); if (inp && inp.showPicker) { try { inp.showPicker(); } catch(err){} } });

  /* tabs: <a class="sk-tab" data-match="^#/bids"> highlights when location matches */
  function syncTabs(){
    var here = location.hash || "#/";
    doc.querySelectorAll(".sk-tab[data-match]").forEach(function(t){
      if (t.hasAttribute("data-tab") && doc.documentElement.classList.contains("sk-app")) return; /* the stack lights these */
      var on = new RegExp(t.getAttribute("data-match")).test(here) || new RegExp(t.getAttribute("data-match")).test(location.pathname);
      if (on) t.setAttribute("aria-current","page"); else t.removeAttribute("aria-current");
    });
  }

  /* sheets */
  var lastFocus = null;
  function sheetEl(s){ return typeof s==="string" ? doc.getElementById(s) : s; }
  function openSheet(s){
    var el = sheetEl(s); if(!el) return;
    lastFocus = doc.activeElement;
    var scrim = el.nextElementSibling;
    if (!scrim || !scrim.classList.contains("sk-sheet-scrim")) { scrim = doc.createElement("div"); scrim.className="sk-sheet-scrim"; el.after(scrim); }
    scrim.onclick = function(){ closeSheet(el); };
    el.setAttribute("role","dialog"); el.setAttribute("aria-modal","true");
    requestAnimationFrame(function(){ el.classList.add("is-open"); });
    doc.documentElement.classList.add("sk-noscroll");
    setTimeout(function(){ var f = el.querySelector("[autofocus],input,select,textarea,button"); if (f && matchMedia("(min-width:900px)").matches) f.focus(); }, 320);
  }
  function closeSheet(s){
    var el = s ? sheetEl(s) : doc.querySelector(".sk-sheet.is-open"); if(!el) return;
    el.classList.remove("is-open"); doc.documentElement.classList.remove("sk-noscroll");
    if (lastFocus && lastFocus.focus) try{ lastFocus.focus(); }catch(e){}
    el.dispatchEvent(new CustomEvent("sk:close"));
  }
  doc.addEventListener("keydown", function(e){ if (e.key==="Escape") closeSheet(); });
  doc.addEventListener("click", function(e){
    var o = e.target.closest("[data-sheet-open]"); if (o){ e.preventDefault(); openSheet(o.getAttribute("data-sheet-open")); return; }
    var c = e.target.closest("[data-sheet-close]"); if (c){ e.preventDefault(); closeSheet(c.closest(".sk-sheet")); return; }
    var x = e.target.closest(".sk-search__clear"); if (x){ var i = x.parentNode.querySelector("input"); i.value=""; i.dispatchEvent(new Event("input",{bubbles:true})); i.focus(); }
  });
  doc.addEventListener("input", function(e){ var s = e.target.closest && e.target.closest(".sk-search"); if (s) s.classList.toggle("has-value", !!e.target.value); });

  /* toast */
  var tt;
  function toast(msg, opts){
    var t = doc.querySelector(".sk-toast");
    if (!t){ t = doc.createElement("div"); t.className="sk-toast"; t.setAttribute("role","status"); t.setAttribute("aria-live","polite"); doc.body.appendChild(t); }
    t.innerHTML = ((opts&&opts.icon===false)?"":icon((opts&&opts.icon)||"check")) + "<span>"+esc(msg)+"</span>";
    t.classList.add("is-shown"); clearTimeout(tt); tt = setTimeout(function(){ t.classList.remove("is-shown"); }, (opts&&opts.ms)||2200);
  }

  /* offline banner: put <div class="sk-offline"></div> under the header, or one is added */
  function offline(){
    var off = navigator.onLine === false;
    doc.documentElement.classList.toggle("sk-is-offline", off);
    var b = doc.querySelector(".sk-offline");
    if (!b && off){ b = doc.createElement("div"); b.className="sk-offline"; var h = doc.querySelector(".sk-header"); if (h) h.after(b); else doc.body.prepend(b); }
    if (b && !b.innerHTML.trim()) b.innerHTML = icon("wifi-off") + "<span>No signal. Showing last saved.</span>";
  }
  addEventListener("online", offline); addEventListener("offline", offline);

  /* shared lock screen.
     SK.lock(container, {app:"Bid Tracker", logo:"/logo-white.png", mode:"pad"|"text", length:6,
       action:"/login", field:"passcode", remember:true, error:false, footer:"..."})
     mode "pad" = number pad (auto-submits at length). mode "text" = keyboard field for codes with letters.
     Posts a normal form to `action` with `field`; never stores the code. */
  function lock(container, o){
    o = o || {}; var el = typeof container==="string" ? doc.querySelector(container) : container;
    var mode = o.mode || "pad", len = o.length || 6;
    var dots = ""; for (var i=0;i<len;i++) dots += "<i></i>";
    var keys = ["1","2","3","4","5","6","7","8","9"].map(function(k){return '<button type="button" data-k="'+k+'">'+k+'</button>';}).join("")
      + (o.altLabel!==false ? '<button type="button" class="is-plain" data-alt>'+esc(o.altLabel||"Letters")+'</button>' : "<span></span>")
      + '<button type="button" data-k="0">0</button><button type="button" class="is-plain" data-del aria-label="Delete">'+icon("backspace")+'</button>';
    el.innerHTML = '<form class="sk-lock'+(o.error?" is-shake":"")+'" method="post" action="'+esc(o.action||"/login")+'" autocomplete="off">'
      + (o.logo ? '<img class="sk-lock__logo" src="'+esc(o.logo)+'" alt="Sharma Electric &amp; HVAC">' : "")
      + '<h1 class="sk-lock__app">'+esc(o.app||"Sharma")+'</h1>'
      + '<p class="sk-lock__hint">'+esc(o.hint || (mode==="pad" ? "Enter your passcode" : "Enter your passcode"))+'</p>'
      + '<input type="hidden" name="'+esc(o.field||"passcode")+'" data-code>'
      + '<div data-pad'+(mode==="pad"?"":" hidden")+'><div class="sk-lock__dots" aria-hidden="true">'+dots+'</div>'
      + '<p class="sk-lock__err" role="alert">'+(o.error?esc(o.errorText||"Wrong passcode. Try again."):"")+'</p>'
      + '<div class="sk-pad">'+keys+'</div></div>'
      + '<div class="sk-lock__field" data-text'+(mode==="text"?"":" hidden")+'>'
      + '<input type="password" data-text-input aria-label="Passcode" placeholder="Passcode" value="" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go">'
      + (mode==="text" && o.error ? '<p class="sk-lock__err" role="alert" style="margin:0">'+esc(o.errorText||"Wrong passcode. Try again.")+'</p>' : "")
      + '<button class="sk-btn" type="submit">'+esc(o.button||"Unlock")+'</button>'
      + (o.padSwitch ? '<button type="button" class="sk-lock__switch" data-to-pad>Use number pad</button>' : "")
      + '</div>'
      + (o.remember!==false ? '<label class="sk-lock__remember"><span>Remember this phone</span><input class="sk-switch" type="checkbox" name="remember" value="1" checked></label>' : "")
      + (o.footer ? '<p class="sk-lock__foot">'+esc(o.footer)+'</p>' : "")
      + '</form>';
    var form = el.querySelector("form"), code = form.querySelector("[data-code]"), txt = form.querySelector("[data-text-input]");
    var buf = "";
    function paint(){ form.querySelectorAll(".sk-lock__dots i").forEach(function(d,i){ d.classList.toggle("is-on", i<buf.length); }); }
    form.addEventListener("click", function(e){
      var k = e.target.closest("[data-k]"), d = e.target.closest("[data-del]"), a = e.target.closest("[data-alt]"), p = e.target.closest("[data-to-pad]");
      if (k && buf.length < len){ buf += k.getAttribute("data-k"); paint(); if (buf.length===len){ code.value=buf; setTimeout(function(){ form.submit(); }, 120); } }
      if (d){ buf = buf.slice(0,-1); paint(); }
      if (a){ form.querySelector("[data-pad]").hidden = true; form.querySelector("[data-text]").hidden = false; txt.focus(); }
      if (p){ form.querySelector("[data-pad]").hidden = false; form.querySelector("[data-text]").hidden = true; }
    });
    form.addEventListener("submit", function(){ if (!form.querySelector("[data-text]").hidden) code.value = txt.value; });
    if (mode==="text" && o.autofocus!==false) setTimeout(function(){ txt.focus(); }, 50);
    return form;
  }


  /* =====================================================================
     v1.2 NATIVE FEEL. Every app gets these by loading the kit:
     instant press feedback, screen stack with push/pop + edge swipe back,
     tab cross-fade with scroll kept per tab, large title that collapses into
     the header, draggable sheets, pull to refresh, last-data-first loading,
     and the service worker hook. No framework. Honors reduced motion.
     ===================================================================== */
  var RM = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : { matches:false };
  var PUSH_MS = 340;
  function dur(ms){ return RM.matches ? 0 : ms; }
  function after(el, ms, fn){
    if (!ms) { fn(); return; }
    var done = false;
    function f(){ if (done) return; done = true; el.removeEventListener("transitionend", te); fn(); }
    function te(e){ if (e.target === el && e.propertyName === "transform") f(); }
    el.addEventListener("transitionend", te); setTimeout(f, ms + 80);
  }
  var KIT_BASE = (function(){ var s = doc.currentScript && doc.currentScript.src; return s ? s.replace(/sharma-kit(\.src)?\.js.*$/, "") : ""; })();

  /* ---- instant press: class goes on at pointerdown (no 300ms wait, no scroll delay) ---- */
  var PRESS = ".sk-segmented button,.sk-btn,.sk-card,a.sk-row,button.sk-row,.sk-tab,.sk-iconbtn,.sk-header__btn,.sk-header__logo,.sk-tile,.sk-seg button,.sk-seg a,.sk-pad button,.sk-section-title a,[data-press]";
  var pressed = null, px = 0, py = 0;
  function unpress(){ if (pressed) { pressed.classList.remove("is-pressed"); pressed = null; } }
  doc.addEventListener("pointerdown", function(e){
    if (e.button) return; var t = e.target.closest && e.target.closest(PRESS);
    if (!t || t.disabled) return; unpress(); pressed = t; px = e.clientX; py = e.clientY; t.classList.add("is-pressed");
  }, { passive:true, capture:true });
  doc.addEventListener("pointermove", function(e){ if (pressed && (Math.abs(e.clientX-px) > 10 || Math.abs(e.clientY-py) > 10)) unpress(); }, { passive:true, capture:true });
  ["pointerup","pointercancel","dragstart"].forEach(function(n){ doc.addEventListener(n, function(){ setTimeout(unpress, 90); }, { passive:true, capture:true }); });
  doc.addEventListener("scroll", unpress, { passive:true, capture:true });
  doc.addEventListener("touchstart", function(){}, { passive:true }); /* lets :active fire on iOS */

  /* ---- screen stack ----
     var nav = SK.stack("#app", { lead: '<a class="sk-header__logo" ...>', title: "Bid Tracker" });
     nav.root("bids", function(page){ ... })   switch tab (cross-fade, scroll kept per tab)
     nav.push("bid:12", function(page){ ... }) slide in from the right
     nav.pop() / nav.popTo(i) / nav.back()     slide out; back() also walks browser history
     page.html(str)  page.setHeader({lead, title, trail, backHref})  page.refreshable(fn -> Promise)
     A left-edge drag pops the top screen; the browser back button pops it too (the app's
     hashchange router calls popTo). Links with data-back go back instead of forward. */
  function Page(S, key){
    var el = doc.createElement("section"); el.className = "sk-page"; el.setAttribute("data-key", key);
    el.innerHTML = '<div class="sk-ptr" aria-hidden="true"><span class="sk-ptr__spin"></span></div><div class="sk-main sk-page__body"></div>';
    this.S = S; this.key = key; this.el = el; this.ptr = el.firstChild; this.body = el.lastChild;
    this.hd = {}; this.collapsed = false; this.largeTitle = ""; this.viaNav = false;
    var P = this, ticking = false;
    el.addEventListener("scroll", function(){ if (ticking) return; ticking = true; requestAnimationFrame(function(){ ticking = false; P.onScroll(); }); }, { passive:true });
  }
  Page.prototype.html = function(h){ this.body.innerHTML = h; syncDates(this.body); this.onScroll(); return this; };
  Page.prototype.setHeader = function(h){ this.hd = h || {}; if (this.S.top() === this) this.S.paintHeader(this, false); return this; };
  Page.prototype.isTop = function(){ return this.S.top() === this; };
  Page.prototype.onScroll = function(){
    var t = this.body.querySelector("[data-large-title],.sk-title");
    this.largeTitle = t ? t.textContent.trim() : "";
    var was = this.collapsed;
    this.collapsed = !!t && t.getBoundingClientRect().bottom < this.el.getBoundingClientRect().top + 6;
    if (was !== this.collapsed && this.isTop()) this.S.paintTitle(this, false);
  };
  Page.prototype.refreshable = function(fn){ this.onRefresh = fn; if (!this._ptr) { this._ptr = true; pullToRefresh(this); } return this; };

  function Stack(container, o){
    var S = this; S.o = o || {};
    S.el = typeof container === "string" ? doc.querySelector(container) : container;
    S.el.classList.add("sk-stackview"); S.el.classList.remove("sk-main"); S.el.innerHTML = "";
    S.dim = doc.createElement("div"); S.dim.className = "sk-stackdim"; S.el.appendChild(S.dim);
    S.roots = {}; S.stack = [];
    S.header = doc.querySelector(".sk-header");
    doc.documentElement.classList.add("sk-app");
    fitTop(); edgeSwipe(S);
    doc.addEventListener("click", function(e){
      var b = e.target.closest && e.target.closest("[data-back]"); if (!b) return;
      e.preventDefault(); S.back(b.getAttribute("href"));
    });
    /* tapping the tab you are already on: back to its first screen, or scroll to the top */
    doc.addEventListener("click", function(e){
      var t = e.target.closest && e.target.closest(".sk-tab[aria-current=page]"); if (!t || t.getAttribute("href") !== (location.hash || "#/")) return;
      var P = S.top(); if (!P) return;
      if (S.stack.length > 1) { e.preventDefault(); S.popTo(0); }
      else { e.preventDefault(); P.el.scrollTo({ top:0, behavior: RM.matches ? "auto" : "smooth" }); }
    });
  }
  Stack.prototype.top = function(){ return this.stack[this.stack.length-1]; };
  Stack.prototype.depth = function(){ return this.stack.length; };
  Stack.prototype.find = function(key){ for (var i = 0; i < this.stack.length; i++) if (this.stack[i].key === key) return i; return -1; };
  Stack.prototype.under = function(){ return this.stack[this.stack.length-2]; };
  Stack.prototype.paintHeader = function(P, animate){
    var h = this.header; if (!h) return;
    var lead = h.querySelector(".sk-header__lead"), trail = h.querySelector(".sk-header__trail");
    var L = P.hd.lead != null ? P.hd.lead : (this.o.lead || ""), T = P.hd.trail || "";
    if (lead && lead._sk !== L) { lead.innerHTML = L; lead._sk = L; }
    if (trail && trail._sk !== T) { trail.innerHTML = T; trail._sk = T; }
    this.paintTitle(P, true);
    /* tab bar follows the stack's first screen (a bid opened from Today keeps Today lit) */
    var rk = this.stack[0] && this.stack[0].key;
    doc.querySelectorAll(".sk-tab[data-tab]").forEach(function(t){ if (t.getAttribute("data-tab") === rk) t.setAttribute("aria-current","page"); else t.removeAttribute("aria-current"); });
    var bar = h.querySelector(".sk-header__bar");
    if (animate && bar && !RM.matches) { bar.classList.remove("sk-hfade"); void bar.offsetWidth; bar.classList.add("sk-hfade"); }
  };
  Stack.prototype.paintTitle = function(P, quiet){
    var el = this.header && this.header.querySelector(".sk-header__title"); if (!el) return;
    var txt = P.collapsed && P.largeTitle ? P.largeTitle : (P.hd.title != null ? P.hd.title : (this.o.title || ""));
    if (el.textContent === txt) return;
    el.textContent = txt;
    if (!quiet && !RM.matches) { el.classList.remove("sk-tfade"); void el.offsetWidth; el.classList.add("sk-tfade"); }
  };
  Stack.prototype._z = function(){ var S = this; S.stack.forEach(function(p, i){ p.el.style.zIndex = String(2 + i * 2); }); S.dim.style.zIndex = String(S.stack.length * 2); };

  /* switch to a tab's root screen; build(page) runs only the first time */
  Stack.prototype.root = function(key, build){
    var S = this, cur = S.top(), P = S.roots[key], isNew = !P;
    if (cur === P && S.stack.length === 1) return P;
    if (isNew) { P = S.roots[key] = new Page(S, key); S.el.appendChild(P.el); }
    var old = S.stack.slice();
    S.stack = [P]; S._z(); P.el.style.zIndex = "5";
    P.el.classList.remove("is-hidden"); P.el.style.transform = ""; P.el.style.transition = "";
    if (isNew && build) build(P, true);
    if (P._scroll != null) P.el.scrollTop = P._scroll;
    S.paintHeader(P, !!cur);
    S.dim.style.opacity = "0";
    function hideOld(){ old.forEach(function(p){ if (p === P) return; if (S.roots[p.key] === p) { p._scroll = p.el.scrollTop; p.el.classList.add("is-hidden"); } else p.el.remove(); }); P.el.style.zIndex = "2"; P.onScroll(); }
    if (cur && dur(200)) {
      P.el.classList.remove("is-fade"); void P.el.offsetWidth; P.el.classList.add("is-fade");
      setTimeout(function(){ P.el.classList.remove("is-fade"); if (S.top() === P) hideOld(); }, 210);
    } else hideOld();
    if (!isNew && P.onReveal) P.onReveal();
    return P;
  };

  /* slide a new screen in from the right */
  Stack.prototype.push = function(key, build, opts){
    opts = opts || {};
    var S = this, U = S.top(), P = new Page(S, key);
    P.viaNav = !opts.initial;
    S.stack.push(P); S._z(); S.el.appendChild(P.el); P.el.classList.add("sk-page--pushed");
    if (build) build(P, true);
    S.paintHeader(P, !!U);
    var d = opts.instant ? 0 : dur(PUSH_MS);
    if (!U) return P;
    if (!d) { U.el.classList.add("is-hidden"); U._scroll = U.el.scrollTop; S.dim.style.opacity = "1"; return P; }
    P.el.style.transition = "none"; P.el.style.transform = "translate3d(100%,0,0)";
    S.dim.style.transition = "none"; S.dim.style.opacity = "0";
    void P.el.offsetWidth;
    P.el.style.transition = ""; S.dim.style.transition = "";
    P.el.style.transform = "translate3d(0,0,0)"; U.el.style.transform = "translate3d(-28%,0,0)"; S.dim.style.opacity = "1";
    after(P.el, d, function(){ if (S.top() === P) { U._scroll = U.el.scrollTop; U.el.classList.add("is-hidden"); } P.onScroll(); });
    return P;
  };

  /* slide the top screen out (already dragged off by a swipe? then just drop it) */
  Stack.prototype.pop = function(){
    var S = this; if (S.stack.length < 2) return;
    var P = S.stack.pop(), U = S.top();
    U.el.classList.remove("is-hidden"); if (U._scroll != null) U.el.scrollTop = U._scroll;
    S.paintHeader(U, true);
    var d = P._gone ? 0 : dur(PUSH_MS);
    function finish(){ P.el.remove(); U.el.style.transform = ""; S._z(); S.dim.style.opacity = S.stack.length > 1 ? "1" : "0"; U.onScroll(); if (U.onReveal) U.onReveal(); }
    if (!d) { U.el.style.transform = ""; finish(); return; }
    P.el.style.transform = "translate3d(100%,0,0)"; U.el.style.transform = "translate3d(0,0,0)"; S.dim.style.opacity = "0";
    after(P.el, d, finish);
  };
  Stack.prototype.popTo = function(i){
    var S = this;
    while (S.stack.length - 1 > i + 1) { var p = S.stack.splice(S.stack.length - 2, 1)[0]; p.el.remove(); }
    S._z(); if (S.stack.length - 1 > i) S.pop();
  };
  /* go back: browser history when we came here by navigating, else to the parent link */
  Stack.prototype.back = function(href){
    var P = this.top(); href = href || (P && P.hd.backHref);
    if (this.stack.length > 1 && P.viaNav) history.back();
    else if (href) location.replace(href);
    else this.pop();
  };

  function fitTop(){
    var root = doc.documentElement;
    function f(){
      var h = doc.querySelector(".sk-header"), off = doc.querySelector(".sk-offline");
      var hb = h ? Math.round(h.getBoundingClientRect().bottom) : 0;
      root.style.setProperty("--sk-hd", hb + "px");
      root.style.setProperty("--sk-top", (hb + (off && off.offsetHeight ? off.offsetHeight : 0)) + "px");
    }
    f(); requestAnimationFrame(f);
    if (window.ResizeObserver) { var ro = new ResizeObserver(f); [".sk-header",".sk-offline"].forEach(function(s){ var e = doc.querySelector(s); if (e) ro.observe(e); }); }
    addEventListener("resize", f); addEventListener("online", function(){ setTimeout(f, 0); }); addEventListener("offline", function(){ setTimeout(f, 0); });
  }

  /* left-edge drag pops the screen, finger-tracked, with velocity */
  function edgeSwipe(S){
    var g = null, EDGE = 28;
    S.el.addEventListener("touchstart", function(e){
      g = null;
      if (S.stack.length < 2 || e.touches.length > 1 || doc.querySelector(".sk-sheet.is-open")) return;
      var t = e.touches[0]; if (t.clientX > EDGE) return;
      g = { x:t.clientX, y:t.clientY, dx:0, on:false, P:S.top(), U:S.under(), w:S.el.clientWidth, lx:t.clientX, lt:e.timeStamp, v:0 };
    }, { passive:true });
    S.el.addEventListener("touchmove", function(e){
      if (!g) return;
      var t = e.touches[0], dx = t.clientX - g.x, dy = t.clientY - g.y;
      if (!g.on) {
        if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) { g = null; return; }
        if (dx < 6) return;
        g.on = true; g.P.el.style.transition = "none"; g.U.el.style.transition = "none"; S.dim.style.transition = "none";
        g.U.el.classList.remove("is-hidden"); if (g.U._scroll != null) g.U.el.scrollTop = g.U._scroll;
      }
      if (e.cancelable) e.preventDefault();
      var dt = Math.max(1, e.timeStamp - g.lt); g.v = 0.6 * g.v + 0.4 * ((t.clientX - g.lx) / dt); g.lx = t.clientX; g.lt = e.timeStamp;
      g.dx = Math.max(0, dx); var p = g.dx / g.w;
      g.P.el.style.transform = "translate3d(" + g.dx + "px,0,0)";
      g.U.el.style.transform = "translate3d(" + (-28 * (1 - p)) + "%,0,0)";
      S.dim.style.opacity = String(1 - p);
    }, { passive:false });
    function end(){
      if (!g) return; var G = g; g = null; if (!G.on) return;
      G.P.el.style.transition = ""; G.U.el.style.transition = ""; S.dim.style.transition = "";
      var go = G.dx > G.w * 0.4 || (G.v > 0.35 && G.dx > 20);
      if (go) {
        G.P.el.style.transform = "translate3d(100%,0,0)"; G.U.el.style.transform = "translate3d(0,0,0)"; S.dim.style.opacity = "0";
        G.P._gone = true;
        after(G.P.el, dur(260), function(){ if (S.top() === G.P) S.back(); });
      } else {
        G.P.el.style.transform = "translate3d(0,0,0)"; G.U.el.style.transform = "translate3d(-28%,0,0)"; S.dim.style.opacity = "1";
        after(G.P.el, dur(260), function(){ if (S.top() === G.P) G.U.el.classList.add("is-hidden"); });
      }
    }
    S.el.addEventListener("touchend", end, { passive:true }); S.el.addEventListener("touchcancel", end, { passive:true });
  }

  /* pull to refresh on a page: page.refreshable(function(){ return loadAgain(); }) */
  function pullToRefresh(P){
    var el = P.el, g = null, H = 64, busy = false;
    function paint(d){
      P.body.style.transform = d ? "translate3d(0," + d + "px,0)" : "";
      P.ptr.style.transform = "translate3d(0," + (Math.min(d, H) - H + (d > H ? (d - H) / 2 : 0)) + "px,0)";
      P.ptr.style.opacity = String(Math.min(1, d / (H * 0.7)));
      P.ptr.firstChild.style.transform = busy ? "" : "rotate(" + Math.round(Math.min(1, d / H) * 300) + "deg)";
      el.classList.toggle("is-armed", d >= H);
    }
    function settle(to, then){
      P.body.classList.add("is-settle"); P.ptr.classList.add("is-settle");
      paint(to); setTimeout(function(){ P.body.classList.remove("is-settle"); P.ptr.classList.remove("is-settle"); if (then) then(); }, dur(300));
    }
    el.addEventListener("touchstart", function(e){
      g = null; if (busy || el.scrollTop > 0 || e.touches.length > 1 || e.touches[0].clientX <= 28 || doc.querySelector(".sk-sheet.is-open")) return;
      g = { y:e.touches[0].clientY, x:e.touches[0].clientX, d:0, on:false };
    }, { passive:true });
    el.addEventListener("touchmove", function(e){
      if (!g) return; var t = e.touches[0], dy = t.clientY - g.y, dx = t.clientX - g.x;
      if (!g.on) {
        if (dy < 0 || Math.abs(dx) > Math.abs(dy) || el.scrollTop > 0) { if (Math.abs(dy) > 6 || Math.abs(dx) > 6) g = null; return; }
        if (dy < 6) return; g.on = true;
      }
      if (e.cancelable) e.preventDefault();
      g.d = Math.max(0, dy < H * 1.4 ? dy * 0.6 : H * 0.84 + (dy - H * 1.4) * 0.3); g.d = Math.min(g.d, 150); paint(g.d);
    }, { passive:false });
    function end(){
      if (!g) return; var G = g; g = null; if (!G.on) return;
      if (G.d >= H && P.onRefresh) {
        busy = true; el.classList.add("is-busy"); settle(H * 0.86);
        var t0 = Date.now();
        Promise.resolve().then(P.onRefresh).catch(function(err){ toast((err && err.message) || "Could not refresh", { icon:"alert" }); }).then(function(){
          setTimeout(function(){ busy = false; el.classList.remove("is-busy"); settle(0); }, Math.max(0, 450 - (Date.now() - t0)));
        });
      } else settle(0);
    }
    el.addEventListener("touchend", end, { passive:true }); el.addEventListener("touchcancel", end, { passive:true });
  }

  /* drag sheets: grab handle / title bar anytime, or the body when it is scrolled to the top */
  (function(){
    var g = null;
    doc.addEventListener("touchstart", function(e){
      g = null; var sh = e.target.closest && e.target.closest(".sk-sheet.is-open"); if (!sh || matchMedia("(min-width:900px)").matches) return;
      var t = e.target, grab = t.closest(".sk-sheet__grab"), head = t.closest(".sk-sheet__head"), body = t.closest(".sk-sheet__body");
      if (head && t.closest("button,a,input,select")) head = null;
      if (body && t.closest("input,select,textarea")) body = null;
      head = grab || head;
      if (!head && !(body && body.scrollTop <= 0)) return;
      g = { sh:sh, y:e.touches[0].clientY, d:0, on:false, from: head ? "head" : "body", body: body, h: sh.offsetHeight, scrim: sh.nextElementSibling, ly:e.touches[0].clientY, lt:e.timeStamp, v:0 };
    }, { passive:true });
    doc.addEventListener("touchmove", function(e){
      if (!g) return; var y = e.touches[0].clientY, dy = y - g.y;
      if (!g.on) {
        if (g.from === "body" && (dy < 0 || g.body.scrollTop > 0)) { if (Math.abs(dy) > 6) g = null; return; }
        if (Math.abs(dy) < 6) return;
        g.on = true; g.sh.style.transition = "none"; if (g.scrim) g.scrim.style.transition = "none";
      }
      if (e.cancelable) e.preventDefault();
      var dt = Math.max(1, e.timeStamp - g.lt); g.v = 0.6 * g.v + 0.4 * ((y - g.ly) / dt); g.ly = y; g.lt = e.timeStamp;
      g.d = dy > 0 ? dy : -Math.sqrt(-dy) * 2;
      g.sh.style.transform = "translate3d(0," + g.d + "px,0)";
      if (g.scrim) g.scrim.style.opacity = String(Math.max(0, 1 - Math.max(0, g.d) / g.h));
    }, { passive:false });
    function end(){
      if (!g) return; var G = g; g = null; if (!G.on) return;
      G.sh.style.transition = ""; if (G.scrim) G.scrim.style.transition = "";
      G.sh.style.transform = ""; if (G.scrim) G.scrim.style.opacity = "";
      if (G.d > Math.min(150, G.h * 0.28) || (G.v > 0.5 && G.d > 24)) closeSheet(G.sh);
    }
    doc.addEventListener("touchend", end, { passive:true }); doc.addEventListener("touchcancel", end, { passive:true });
  })();

  /* last data first: SK.data(url, render) draws the saved copy at once, then the fresh one.
     Saved copies live only on this phone, only after unlock, and are wiped on lock or a 401. */
  var DATA_CACHE = "sk-data-v1";
  function dataClear(){ try { return window.caches ? caches.delete(DATA_CACHE).catch(function(){}) : Promise.resolve(); } catch (e) { return Promise.resolve(); } }
  function data(url, render, opts){
    opts = opts || {};
    var key = new URL(url, location.href).href, cachedText = null, fresh = false;
    var fromCache = !window.caches ? Promise.resolve() : caches.open(DATA_CACHE).then(function(c){ return c.match(key); })
      .then(function(r){ return r ? r.text() : null; })
      .then(function(t){ if (t && !fresh) { cachedText = t; try { render(JSON.parse(t), { cached:true }); } catch (e) { console.error(e); } } })
      .catch(function(){});
    var net = fetch(key, { credentials:"same-origin", headers:{ "Accept":"application/json" }, cache:"no-store" }).then(function(r){
      if (r.status === 401) { dataClear(); location.href = opts.login || "/login"; throw new Error("Please unlock again"); }
      return r.text().then(function(t){
        if (!r.ok) { var m = ""; try { m = JSON.parse(t).error; } catch (e) {} throw new Error(m || "Something went wrong. Try again."); }
        fresh = true;
        if (window.caches) caches.open(DATA_CACHE).then(function(c){ return c.put(key, new Response(t, { headers:{ "Content-Type":"application/json" } })); }).catch(function(){});
        return fromCache.then(function(){ if (t !== cachedText) render(JSON.parse(t), { fresh:true }); });
      });
    });
    return net.catch(function(err){ return fromCache.then(function(){ if (cachedText) { offline(); return; } throw err; }); });
  }
  /* "Lock" links (href="/logout" or data-lock) wipe saved data first */
  doc.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest('a[href="/logout"],[data-lock]'); if (!a) return;
    e.preventDefault(); var href = a.getAttribute("href") || "/logout";
    dataClear().then(function(){ location.href = href; });
  });

  /* service worker: SK.registerSW("/sw.js") (copy sharma-sw.js to the app's /sw.js) */
  function registerSW(path){
    if (!("serviceWorker" in navigator) || !(location.protocol === "https:" || location.hostname === "localhost")) return;
    var u = (path || "/sw.js") + "?kit=" + encodeURIComponent(KIT_BASE.replace(/\/$/, ""));
    addEventListener("load", function(){ navigator.serviceWorker.register(u, { scope:"/" }).catch(function(e){ console.warn("[sharma-kit] service worker", e); }); });
  }


  /* =====================================================================
     v1.3 APPEARANCE. Light is the default on every phone. Dark only when the
     person picks it: SK.scheme.set("dark"). Saved per app (localStorage "sk-scheme").
     Head snippet (paste right after the theme-color meta, before the kit CSS) applies
     it before first paint so there is no flash:
     <script>(function(){try{if(localStorage.getItem("sk-scheme")==="dark"){var d=document.documentElement;d.setAttribute("data-scheme","dark");var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=d.getAttribute("data-theme")==="track"?"#1C1C1E":"#1a2f61"}}catch(e){}})()</script>
     ===================================================================== */
  var SCHEME_KEY = "sk-scheme";
  var SCHEME_COLORS = { navy:{ light:"#264387", dark:"#1a2f61" }, track:{ light:"#ffffff", dark:"#1C1C1E" } };
  function schemeGet(){ try { return localStorage.getItem(SCHEME_KEY) === "dark" ? "dark" : "light"; } catch (e) { return "light"; } }
  function schemeApply(v){
    var r = doc.documentElement, track = r.getAttribute("data-theme") === "track";
    r.setAttribute("data-scheme", v);
    var m = doc.querySelector('meta[name="theme-color"]');
    if (!m) { m = doc.createElement("meta"); m.name = "theme-color"; doc.head.appendChild(m); }
    m.setAttribute("content", SCHEME_COLORS[track ? "track" : "navy"][v]);
    /* status bar text: white on the navy header; Track's white header needs dark text in light */
    var sb = doc.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (sb && track) sb.setAttribute("content", v === "dark" ? "black-translucent" : "default");
    doc.querySelectorAll("[data-scheme-set]").forEach(function(b){ b.setAttribute("aria-checked", String(b.getAttribute("data-scheme-set") === v)); });
  }
  function schemeSet(v){
    v = v === "dark" ? "dark" : "light";
    try { localStorage.setItem(SCHEME_KEY, v); } catch (e) {}
    schemeApply(v);
    try { doc.dispatchEvent(new CustomEvent("sk:scheme", { detail:{ scheme:v } })); } catch (e) {}
    return v;
  }
  /* ready-made Settings row: "Appearance  [ Light | Dark ]". el = a .sk-list (or any box; a list is added) */
  function mountToggle(el){
    el = typeof el === "string" ? doc.querySelector(el) : el; if (!el) return null;
    var cur = schemeGet();
    var row = '<div class="sk-row sk-appearance"><div class="sk-row__body"><div class="sk-row__title" id="sk-appearance-label">Appearance</div></div>'
      + '<div class="sk-segmented" role="radiogroup" aria-labelledby="sk-appearance-label">'
      + '<button type="button" role="radio" data-scheme-set="light" aria-checked="' + (cur === "light") + '">Light</button>'
      + '<button type="button" role="radio" data-scheme-set="dark" aria-checked="' + (cur === "dark") + '">Dark</button></div></div>';
    if (el.classList.contains("sk-list")) el.innerHTML = row; else el.innerHTML = '<div class="sk-list">' + row + '</div>';
    return el;
  }
  doc.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-scheme-set]"); if (b) schemeSet(b.getAttribute("data-scheme-set")); });
  /* another tab of the same app changed it */
  addEventListener("storage", function(e){ if (e.key === SCHEME_KEY) schemeApply(schemeGet()); });
  schemeApply(schemeGet());

  function init(){
    injectSprite(); syncTabs(); offline(); syncDates();
    doc.querySelectorAll(".sk-search input").forEach(function(i){ i.parentNode.classList.toggle("has-value", !!i.value); });
  }
  addEventListener("hashchange", syncTabs);
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init); else init();

  window.SK = { scheme:{ get:schemeGet, set:schemeSet, mountToggle:mountToggle, apply:function(){ schemeApply(schemeGet()); } }, stack:function(c,o){ return new Stack(c,o); }, data:data, dataClear:dataClear, registerSW:registerSW, reducedMotion:function(){ return RM.matches; }, kitBase:KIT_BASE, icon:icon, pill:pill, fmtDate:fmtDate, late:late, lateHtml:lateHtml, dateField:dateField, syncDates:syncDates, todayET:todayET, STATUS:Object.keys(STATUS), openSheet:openSheet, closeSheet:closeSheet, toast:toast, lock:lock, syncTabs:syncTabs, esc:esc, version:"1.3" };
})();
