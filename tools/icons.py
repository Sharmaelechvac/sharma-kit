# Sharma line icons: 24x24 grid, 1.75px stroke, round caps/joins, no fill. Drawn in-house.
ICONS = {
 "home": '<path d="M3.5 10.5 12 3.8l8.5 6.7"/><path d="M5.5 9v10.5h4.5v-6h4v6h4.5V9"/>',
 "list": '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.75" cy="6.5" r=".9"/><circle cx="4.75" cy="12" r=".9"/><circle cx="4.75" cy="17.5" r=".9"/>',
 "doc": '<path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3.5V8h4.5M9 12.5h6M9 16h6"/>',
 "folder": '<path d="M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z"/>',
 "search": '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5.5 5.5"/>',
 "plus": '<path d="M12 5v14M5 12h14"/>',
 "minus": '<path d="M5 12h14"/>',
 "close": '<path d="M6 6l12 12M18 6 6 18"/>',
 "check": '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 "chevron-right": '<path d="m9.5 5.5 6.5 6.5-6.5 6.5"/>',
 "chevron-left": '<path d="M14.5 5.5 8 12l6.5 6.5"/>',
 "chevron-down": '<path d="m5.5 9.5 6.5 6.5 6.5-6.5"/>',
 "alert": '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5"/><circle cx="12" cy="17" r=".6"/>',
 "info": '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6"/>',
 "bell": '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2H4.5z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
 "calendar": '<rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 "clock": '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
 "user": '<circle cx="12" cy="8" r="3.75"/><path d="M4.5 20.5c.8-4 3.8-6 7.5-6s6.7 2 7.5 6"/>',
 "users": '<circle cx="9" cy="8.5" r="3.25"/><path d="M2.75 19.5c.6-3.4 3-5.2 6.25-5.2s5.65 1.8 6.25 5.2"/><path d="M15.5 5.6a3.25 3.25 0 0 1 0 6M17.5 14.6c2 .6 3.3 2.2 3.75 4.9"/>',
 "building": '<path d="M4.5 20.5V4.5h10v16M14.5 9.5h5v11M3 20.5h18"/><path d="M8 8h3M8 11.5h3M8 15h3"/>',
 "house": '<path d="M4 11 12 4.5l8 6.5M6 9.5v10.5h12V9.5"/><path d="M10 20v-5h4v5"/>',
 "briefcase": '<rect x="3.5" y="7.5" width="17" height="12" rx="1.5"/><path d="M9 7.5V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3.5 12.5h17"/>',
 "upload": '<path d="M12 15.5V4M7.5 8.5 12 4l4.5 4.5M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/>',
 "download": '<path d="M12 4v11.5M7.5 11 12 15.5l4.5-4.5M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/>',
 "share": '<path d="M12 14.5V3.5M8 7.5l4-4 4 4M7.5 10.5H6A1.5 1.5 0 0 0 4.5 12v7A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1.5"/>',
 "phone": '<path d="M5.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2z"/>',
 "mail": '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 6.5 8 6.5 8-6.5"/>',
 "pin": '<path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.25"/>',
 "camera": '<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.5L9 4.5h6L16.5 7H19a1.5 1.5 0 0 1 1.5 1.5v9.5A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18z"/><circle cx="12" cy="13" r="3.5"/>',
 "settings": '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
 "more": '<circle cx="5.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="18.5" cy="12" r="1.1"/>',
 "lock": '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
 "filter": '<path d="M4 5.5h16M7 12h10M10 18.5h4"/>',
 "trash": '<path d="M4.5 6.5h15M9.5 6.5V4.5h5v2M6.5 6.5l1 13.5h9l1-13.5M10 10.5v6M14 10.5v6"/>',
 "edit": '<path d="M15.5 4.5l4 4L8.5 19.5H4.5v-4z"/><path d="M13 7l4 4"/>',
 "link": '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2"/>',
 "bolt": '<path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z"/>',
 "fan": '<circle cx="12" cy="12" r="1.75"/><path d="M12 10.25C11 6.5 12 3.5 14.5 3.5c2.5 0 2.5 3.5-.75 7.25M13.75 12c3.75-1 6.75 0 6.75 2.5 0 2.5-3.5 2.5-7.25-.75M12 13.75c1 3.75 0 6.75-2.5 6.75-2.5 0-2.5-3.5.75-7.25M10.25 12C6.5 13 3.5 12 3.5 9.5c0-2.5 3.5-2.5 7.25.75"/>',
 "wifi-off": '<path d="M3.5 3.5l17 17M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 4.5-2.6M14.5 10.4A10 10 0 0 1 19 13M2 9.5a15 15 0 0 1 4.3-2.9M10 5.6A15 15 0 0 1 22 9.5"/><circle cx="12" cy="19.5" r=".6"/>',
 "chart": '<path d="M4 20.5h16M7 17V11M12 17V6.5M17 17v-8"/>',
 "dollar": '<path d="M12 3.5v17M16 7.5c-.6-1.3-2-2-4-2-2.4 0-4 1.2-4 3s1.6 2.6 4 3.2 4.2 1.4 4.2 3.3-1.8 3.2-4.2 3.2c-2.2 0-3.8-.9-4.4-2.4"/>',
 "note": '<path d="M5 3.5h14v12.5l-4.5 4.5H5z"/><path d="M14.5 20.5V16H19M8.5 8h7M8.5 11.5h5"/>',
 "star": '<path d="m12 3.8 2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.4l-5.1 2.8 1.1-5.6-4.2-3.9 5.7-.7z"/>',
 "trophy": '<path d="M8 4.5h8v5a4 4 0 0 1-8 0zM8 6.5H4.5c0 3 1.5 4.5 3.7 4.8M16 6.5h3.5c0 3-1.5 4.5-3.7 4.8M12 13.5v3.5M8.5 20h7M9.5 17h5v3h-5z"/>',
 "send": '<path d="M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z"/>',
 "refresh": '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4h-4"/>',
 "logout": '<path d="M14 4.5H6A1.5 1.5 0 0 0 4.5 6v12A1.5 1.5 0 0 0 6 19.5h8M10 12h10.5M17 8.5l3.5 3.5-3.5 3.5"/>',
 "globe": '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5S9.6 5.9 12 3.5z"/>',
 "tools": '<path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L4 17l3 3 5.5-5.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 "clipboard": '<rect x="5" y="4.5" width="14" height="16" rx="1.5"/><path d="M9 4.5V3.5h6v1M9 4.5v1.5h6V4.5M8.5 11l2 2 4-4M8.5 16.5h7"/>',
 "tv": '<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M8.5 20.5h7"/>',
 "backspace": '<path d="M8.5 5.5H20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8.5L3 12z"/><path d="m11.5 9.5 5 5M16.5 9.5l-5 5"/>',
 "face-id": '<path d="M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5M9 9.5v1M15 9.5v1M12 9.5v3.5h-1M9.5 16a3.5 3.5 0 0 0 5 0"/>',
}
import os, json
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
ATTR = 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"'
for n, p in ICONS.items():
    open(f"{root}/icons/{n}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" {ATTR}>{p}</svg>\n')
syms = "".join(f'<symbol id="i-{n}" viewBox="0 0 24 24">{p}</symbol>' for n,p in ICONS.items())
sprite = f'<svg xmlns="http://www.w3.org/2000/svg" style="display:none" {ATTR}>{syms}</svg>'
open(f"{root}/icons/sprite.svg","w").write(sprite+"\n")
json.dump(sorted(ICONS), open(f"{root}/icons/names.json","w"))
# embed in JS
js = open(f"{root}/sharma-kit.src.js").read().replace("/*__SPRITE__*/\"\"", json.dumps(sprite))
open(f"{root}/sharma-kit.js","w").write(js)
print(len(ICONS), "icons")
