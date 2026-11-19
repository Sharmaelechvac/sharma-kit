# WCAG contrast for kit status pills: text over (pill tint composited on the surface it sits on).
import re, sys
def hx(h):
    h=h.lstrip('#'); return tuple(int(h[i:i+2],16)/255 for i in (0,2,4))
def rgba(s):
    if s.startswith('#'): return hx(s)+(1.0,)
    n=[float(x) for x in re.findall(r'[\d.]+',s)]; return (n[0]/255,n[1]/255,n[2]/255,n[3] if len(n)>3 else 1)
def comp(fg,bg):
    a=fg[3]; return tuple(fg[i]*a+bg[i]*(1-a) for i in range(3))
def lum(c):
    f=lambda v: v/12.92 if v<=0.03928 else ((v+0.055)/1.055)**2.4
    r,g,b=map(f,c); return .2126*r+.7152*g+.0722*b
def ratio(a,b):
    la,lb=sorted((lum(a),lum(b)),reverse=True); return (la+.05)/(lb+.05)
def check(fg,bgtint,surfaces):
    out=[]
    for s in surfaces:
        base=hx(s); pill=comp(rgba(bgtint),base); out.append(ratio(hx(fg),pill))
    return min(out)
if __name__=="__main__":
    css=open(sys.argv[1]).read()
    def block(sel):
        i=css.index(sel); j=css.index('}',i); return css[i:j]
    light=block(':root{'); dark=block('[data-scheme="dark"]{')
    def v(b,name): return re.search(r'--'+name+r':([^;]+);',b).group(1).strip()
    names=[('Not started','idle'),('In progress','prog'),('Needs you','need'),('Done','done'),('Problem','prob')]
    print('Pill            light (min on white/#F2F4F8)   dark (min on #1C1C1E/#000)')
    for w,k in names:
        l=check(v(light,f'sk-s-{k}-fg'),v(light,f'sk-s-{k}-bg'),['#FFFFFF','#F2F4F8'])
        d=check(v(dark,f'sk-s-{k}-fg'),v(dark,f'sk-s-{k}-bg'),['#1C1C1E','#000000','#2C2C2E'])
        print(f'{w:15} {l:5.2f}:1 {"pass" if l>=4.5 else "FAIL"}                   {d:5.2f}:1 {"pass" if d>=4.5 else "FAIL"}')
    for nm,b,surf in (('Late (red) text',light,['#FFFFFF','#F2F4F8']),('Late dark',dark,['#1C1C1E','#000000'])):
        r=min(ratio(hx(v(b,'sk-red')),hx(s)) for s in surf); print(f'{nm:15} {r:5.2f}:1 {"pass" if r>=4.5 else "FAIL"}')
