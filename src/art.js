/* ===== Product illustrations: each piece is drawn in a 200x200 box ===== */
const G=(k,id,a,b,x2=0,y2=1)=>`<linearGradient id="${k}${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const RG=(k,id,a,b,c)=>`<radialGradient id="${k}${id}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>`;
const SHD=(k,rx=62)=>[`<radialGradient id="${k}sh"><stop offset="0" stop-color="#2E1A12" stop-opacity=".26"/><stop offset="1" stop-color="#2E1A12" stop-opacity="0"/></radialGradient>`,`<ellipse cx="100" cy="189" rx="${rx}" ry="7" fill="url(#${k}sh)"/>`];
const LOOP=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join("");
const TICKS=(cx,cy,r1,r2,col,w)=>LOOP(12,i=>{const a=i*Math.PI/6;return `<line x1="${(cx+Math.sin(a)*r1).toFixed(1)}" y1="${(cy-Math.cos(a)*r1).toFixed(1)}" x2="${(cx+Math.sin(a)*r2).toFixed(1)}" y2="${(cy-Math.cos(a)*r2).toFixed(1)}" stroke="${col}" stroke-width="${i%3?w:w*1.8}" stroke-linecap="round"/>`;});
const GOLD="#D9B46E";

const PZ={
tote(k,a,b,t){const s=SHD(k,70);return [G(k,"b",a,b)+s[0],`${s[1]}
<path d="M66 88C66 30 96 30 96 88" fill="none" stroke="${t}" stroke-width="7" stroke-linecap="round"/><path d="M104 88C104 30 134 30 134 88" fill="none" stroke="${t}" stroke-width="7" stroke-linecap="round"/>
<path d="M38 88H162L172 172Q173 182 163 182H37Q27 182 28 172Z" fill="url(#${k}b)"/>
<path d="M38 88H66L58 182H37Q27 182 28 172Z" fill="#fff" opacity=".08"/><path d="M144 88H162L172 172Q173 182 163 182H152Z" fill="#000" opacity=".1"/>
<path d="M42 100H158M37 172H163" stroke="#fff" stroke-opacity=".28" stroke-dasharray="3 3"/>
<rect x="35" y="84" width="130" height="9" rx="3" fill="${t}"/>${[62,92,100,130].map(x=>`<rect x="${x}" y="80" width="8" height="13" rx="2" fill="${GOLD}"/>`).join("")}
<rect x="88" y="108" width="24" height="6" rx="2" fill="${GOLD}" opacity=".9"/>`];},
mini(k,a,b){const s=SHD(k,58);return [G(k,"b",a,b)+s[0],`${s[1]}
<path d="M76 90C76 52 124 52 124 90" fill="none" stroke="${b}" stroke-width="7" stroke-linecap="round"/>
<rect x="44" y="86" width="112" height="94" rx="10" fill="url(#${k}b)"/>
<path d="M44 96Q44 86 54 86H146Q156 86 156 96V126Q100 142 44 126Z" fill="${b}" opacity=".55"/>
<path d="M44 126Q100 142 156 126" fill="none" stroke="#fff" stroke-opacity=".22"/>
<rect x="44" y="86" width="16" height="94" rx="8" fill="#fff" opacity=".08"/>
<rect x="91" y="121" width="18" height="17" rx="3" fill="${GOLD}"/><circle cx="100" cy="129.5" r="3" fill="#8C6A2E"/>`];},
shoulder(k,a,b){const s=SHD(k,74);return [G(k,"b",a,b)+s[0],`${s[1]}
<path d="M46 100Q100 0 154 100" fill="none" stroke="#C9A35E" stroke-width="3.5" stroke-dasharray="7 3" stroke-linecap="round"/>
<rect x="28" y="96" width="144" height="86" rx="14" fill="url(#${k}b)"/>
<path d="M28 110Q28 96 42 96H158Q172 96 172 110V138Q100 152 28 138Z" fill="#000" opacity=".07"/>
<path d="M28 138Q100 152 172 138" fill="none" stroke="#fff" stroke-opacity=".4"/>
<rect x="84" y="140" width="32" height="8" rx="3" fill="${GOLD}"/><circle cx="46" cy="100" r="4" fill="${GOLD}"/><circle cx="154" cy="100" r="4" fill="${GOLD}"/>
<rect x="34" y="104" width="12" height="70" rx="6" fill="#fff" opacity=".12"/>`];},
hoops(k){const s=SHD(k,62);return [G(k,"s","#FFFFFF","#8F95A3",1,1)+s[0],`${s[1]}
${[64,136].map(x=>`<circle cx="${x}" cy="44" r="4.5" fill="#C9CDD6"/><ellipse cx="${x}" cy="112" rx="31" ry="42" fill="none" stroke="url(#${k}s)" stroke-width="12"/><ellipse cx="${x}" cy="112" rx="31" ry="42" fill="none" stroke="#fff" stroke-width="1.6" opacity=".65" stroke-dasharray="40 160"/>`).join("")}`];},
cocktail(k){const s=SHD(k,54);return [G(k,"a","#F3DC9E","#B28A42",1,1)+RG(k,"am","#E6D2FF","#8E5CD6","#3E1A6E")+s[0],`${s[1]}
<ellipse cx="100" cy="138" rx="50" ry="44" fill="none" stroke="url(#${k}a)" stroke-width="9"/>
${LOOP(20,i=>{const a=i*Math.PI/10;return `<circle cx="${(100+Math.cos(a)*44).toFixed(1)}" cy="${(64+Math.sin(a)*40).toFixed(1)}" r="4" fill="#F7F3FB" stroke="#C9C2D6" stroke-width=".8"/>`;})}
<rect x="66" y="30" width="68" height="68" rx="20" fill="url(#${k}am)" transform="rotate(45 100 64)"/><rect x="80" y="44" width="40" height="40" rx="10" fill="#fff" opacity=".18" transform="rotate(45 100 64)"/>
<path d="M84 50l8-6" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`];},
solitaire(k){const s=SHD(k,54);return [G(k,"a","#FFFFFF","#9AA0AE",1,1)+G(k,"d","#FFFFFF","#B9D2EA",1,1)+s[0],`${s[1]}
<ellipse cx="100" cy="134" rx="52" ry="46" fill="none" stroke="url(#${k}a)" stroke-width="10"/>
<path d="M88 88L94 70M112 88L106 70" stroke="#B9BEC9" stroke-width="4" stroke-linecap="round"/>
<path d="M76 40H124L142 58H58Z" fill="url(#${k}d)"/><path d="M58 58H142L100 98Z" fill="#CFE0F1"/>
<path d="M58 58L100 98L142 58M76 40L88 58L100 40L112 58L124 40M88 58L100 98L112 58" fill="none" stroke="#fff" stroke-width="1.2" opacity=".85"/>`];},
watchChain(k,a,b,dial,hand){const s=SHD(k,40);return [G(k,"r",a,b,1,1)+G(k,"l",a,b)+s[0],`${s[1]}
${LOOP(6,i=>`<rect x="78" y="${-2+i*10}" width="44" height="9" rx="3" fill="url(#${k}l)"/>`)}${LOOP(5,i=>`<rect x="78" y="${142+i*10}" width="44" height="9" rx="3" fill="url(#${k}l)"/>`)}
<circle cx="100" cy="100" r="48" fill="url(#${k}r)"/><circle cx="100" cy="100" r="40" fill="${dial}"/>${TICKS(100,100,34,38,b,1.5)}
<line x1="100" y1="100" x2="100" y2="74" stroke="${hand}" stroke-width="3" stroke-linecap="round"/><line x1="100" y1="100" x2="118" y2="110" stroke="${hand}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="100" r="3.5" fill="${b}"/>
<rect x="147" y="94" width="8" height="12" rx="2" fill="url(#${k}r)"/><path d="M68 74A40 40 0 0 1 100 60" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/>`];},
watchStrap(k,sa,sb,dial,tick,hand,ca,cb){const s=SHD(k,40);return [G(k,"c",ca,cb,1,1)+G(k,"t",sa,sb)+s[0],`${s[1]}
<rect x="77" y="0" width="46" height="66" rx="8" fill="url(#${k}t)"/><rect x="77" y="134" width="46" height="52" rx="8" fill="url(#${k}t)"/>
<path d="M82 4V62M118 4V62M82 138V180M118 138V180" stroke="#fff" stroke-opacity=".3" stroke-width="1" stroke-dasharray="3 3"/>${[150,162].map(y=>`<circle cx="100" cy="${y}" r="2.5" fill="#000" opacity=".35"/>`).join("")}
<circle cx="100" cy="100" r="46" fill="url(#${k}c)"/><circle cx="100" cy="100" r="38" fill="${dial}"/>${TICKS(100,100,31,35,tick,1.3)}
<line x1="100" y1="100" x2="88" y2="78" stroke="${hand}" stroke-width="3" stroke-linecap="round"/><line x1="100" y1="100" x2="122" y2="92" stroke="${hand}" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="100" r="3" fill="${hand}"/>
<rect x="145" y="94" width="8" height="12" rx="2" fill="url(#${k}c)"/>`];},
bottle(k){const s=SHD(k,54);return [G(k,"cap","#5A3A2A","#24160F",1,1)+G(k,"liq","#EDB47A","#9A4F2C")+s[0],`${s[1]}
<rect x="54" y="72" width="92" height="112" rx="14" fill="#F6E6D2" opacity=".6"/><rect x="60" y="92" width="80" height="86" rx="10" fill="url(#${k}liq)"/>
<rect x="54" y="72" width="92" height="112" rx="14" fill="none" stroke="#fff" stroke-width="2" opacity=".75"/><rect x="62" y="80" width="10" height="92" rx="5" fill="#fff" opacity=".35"/>
<rect x="86" y="56" width="28" height="18" fill="${GOLD}"/><rect x="72" y="18" width="56" height="40" rx="6" fill="url(#${k}cap)"/><rect x="72" y="50" width="56" height="5" fill="${GOLD}"/>
<rect x="74" y="120" width="52" height="30" rx="2" fill="#FBF4E8"/><line x1="84" y1="130" x2="116" y2="130" stroke="#6E2433" stroke-width="2"/><line x1="90" y1="140" x2="110" y2="140" stroke="#B08A55" stroke-width="1.2"/>`];},
mist(k){const s=SHD(k,40);return [G(k,"b","#FBE7EA","#E3AAB5",1,0)+s[0],`${s[1]}
<rect x="70" y="60" width="60" height="124" rx="22" fill="url(#${k}b)"/><rect x="76" y="70" width="9" height="100" rx="4.5" fill="#fff" opacity=".5"/>
<rect x="78" y="24" width="44" height="40" rx="10" fill="#F6F1EF" stroke="#E4D6D6"/><rect x="92" y="14" width="16" height="12" rx="3" fill="#E9DCDC"/>
<rect x="80" y="112" width="40" height="34" rx="4" fill="#fff" opacity=".85"/><circle cx="100" cy="124" r="5" fill="#F2D6A8"/><line x1="88" y1="138" x2="112" y2="138" stroke="#6E2433" stroke-width="1.4"/>`];},
essence(k){const s=SHD(k,48);return [G(k,"g","#F2F4EE","#CFD6C8",1,0)+G(k,"liq","#F3E6B8","#D9C27A")+s[0],`${s[1]}
<rect x="62" y="68" width="76" height="116" rx="20" fill="url(#${k}g)"/><rect x="68" y="98" width="64" height="80" rx="14" fill="url(#${k}liq)" opacity=".85"/>
<rect x="70" y="76" width="9" height="98" rx="4.5" fill="#fff" opacity=".6"/><rect x="84" y="50" width="32" height="20" rx="4" fill="#fff" stroke="#E1E1DA"/>
<rect x="92" y="26" width="16" height="26" rx="3" fill="#fff" stroke="#E1E1DA"/><rect x="106" y="30" width="26" height="7" rx="3" fill="#fff" stroke="#E1E1DA"/>
<rect x="76" y="122" width="48" height="30" rx="3" fill="#fff" opacity=".9"/><path d="M90 142q10-14 20 0" fill="none" stroke="#8A9A7A" stroke-width="1.6"/>`];},
jar(k){const s=SHD(k,58);return [G(k,"j","#F7E3DF","#E1BAB2")+G(k,"l","#FFFFFF","#E7E1DA")+s[0],`${s[1]}
<rect x="52" y="98" width="96" height="86" rx="12" fill="url(#${k}j)"/><rect x="58" y="104" width="10" height="74" rx="5" fill="#fff" opacity=".45"/>
<rect x="48" y="78" width="104" height="28" rx="7" fill="url(#${k}l)"/><path d="M52 92H148" stroke="#D8CEC4" stroke-width="1"/>
<rect x="70" y="126" width="60" height="28" rx="3" fill="#fff" opacity=".88"/><line x1="82" y1="140" x2="118" y2="140" stroke="#6E2433" stroke-width="1.6"/>`];},
tube(k){const s=SHD(k,46);return [G(k,"t","#EAF1EC","#BFD0C3",1,0)+s[0],`${s[1]}
<g transform="rotate(-16 100 110)"><path d="M76 34H124L126 44V150H74V44Z" fill="url(#${k}t)"/><path d="M76 34H124" stroke="#AFC2B4" stroke-width="3"/>
${LOOP(4,i=>`<line x1="78" y1="${38+i*2}" x2="122" y2="${38+i*2}" stroke="#fff" stroke-opacity=".6"/>`)}
<rect x="80" y="80" width="40" height="40" rx="3" fill="#fff" opacity=".85"/><circle cx="100" cy="96" r="6" fill="#F2C6C0"/><line x1="88" y1="110" x2="112" y2="110" stroke="#5A7A66" stroke-width="1.4"/>
<rect x="82" y="150" width="36" height="28" rx="4" fill="#9FB3A4"/><rect x="74" y="44" width="8" height="100" rx="4" fill="#fff" opacity=".35"/></g>`];},
toner(k){const s=SHD(k,44);return [G(k,"g","#FFFFFF","#DCDCD2",1,0)+s[0],`${s[1]}
<rect x="66" y="50" width="68" height="134" rx="12" fill="url(#${k}g)" stroke="#E6E4DC"/><rect x="80" y="20" width="40" height="32" rx="5" fill="#CDB993"/>
<rect x="72" y="58" width="8" height="118" rx="4" fill="#fff" opacity=".8"/><rect x="74" y="104" width="52" height="46" rx="3" fill="#F4EFE4"/>
${LOOP(5,i=>`<ellipse cx="${86+i*7}" cy="${120+(i%2)*4}" rx="2.4" ry="4" fill="#E2D6BC"/>`)}<line x1="84" y1="140" x2="116" y2="140" stroke="#9A8A6A" stroke-width="1.2"/>`];},
sunglasses(k){const s=SHD(k,74);return [G(k,"l","#7A5444","#24150F",1,1)+s[0],`${s[1]}
<path d="M30 98L14 90M170 98L186 90" stroke="#2E211B" stroke-width="5" stroke-linecap="round"/>
${[30,112].map(x=>`<rect x="${x}" y="86" width="58" height="48" rx="22" fill="url(#${k}l)" stroke="#2E211B" stroke-width="5"/><path d="M${x+12} 100L${x+26} 92" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".5"/>`).join("")}
<path d="M88 100Q100 90 112 100" fill="none" stroke="#2E211B" stroke-width="5"/><circle cx="36" cy="92" r="2" fill="${GOLD}"/><circle cx="164" cy="92" r="2" fill="${GOLD}"/>`];},
clip(k){const s=SHD(k,56);return [G(k,"c","#D69A5A","#6B3A1C",1,1)+s[0],`${s[1]}
${LOOP(6,i=>{const x=54+i*16;return `<path d="M${x} 118Q${x+5} 176 ${x+10} 118Z" fill="url(#${k}c)"/>`;})}
<rect x="44" y="86" width="112" height="40" rx="18" fill="url(#${k}c)"/>
${[[62,98],[80,110],[104,96],[126,112],[140,100],[94,116]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="${4+(x%3)}" fill="#3A1D0D" opacity=".32"/>`).join("")}
<rect x="88" y="80" width="24" height="10" rx="3" fill="${GOLD}"/>`];},
blocks(k){const s=SHD(k,72);const b=(x,y,w,c,n)=>`<rect x="${x}" y="${y}" width="${w}" height="30" rx="4" fill="${c}"/><rect x="${x}" y="${y+22}" width="${w}" height="8" rx="3" fill="#000" opacity=".1"/>${LOOP(n,i=>`<rect x="${x+7+i*((w-14)/n)}" y="${y-7}" width="${(w-14)/n-6}" height="8" rx="2" fill="${c}"/>`)}`;
 return [s[0],s[1]+b(34,152,74,"#D9503C",3)+b(108,152,58,"#3E86C9",2)+b(56,114,58,"#F0B23E",2)+b(114,114,40,"#4AA56A",2)+b(78,76,52,"#6E2433",2)+`<circle cx="152" cy="62" r="18" fill="none" stroke="#B08A55" stroke-width="6" stroke-dasharray="5 4"/><circle cx="152" cy="62" r="7" fill="#B08A55"/>`];},
robot(k){const s=SHD(k,62);return [G(k,"m","#5A606C","#23262D")+s[0],`${s[1]}
${[[64,1],[84,0],[122,1],[142,0]].map(([x,f])=>`<path d="M${x} 112L${x-7} 146L${x+2} 176" fill="none" stroke="${f?"#1E2127":"#2E323B"}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${x-7}" cy="146" r="6" fill="#8B919D"/><ellipse cx="${x+4}" cy="180" rx="8" ry="4" fill="#1A1C21"/>`).join("")}
<rect x="50" y="78" width="100" height="42" rx="14" fill="url(#${k}m)"/><rect x="58" y="84" width="84" height="4" rx="2" fill="#fff" opacity=".18"/>
<rect x="128" y="54" width="48" height="38" rx="11" fill="url(#${k}m)"/><rect x="134" y="63" width="36" height="17" rx="8" fill="#0D1014"/>
<circle cx="145" cy="71.5" r="4.5" fill="#5FD3FF"/><circle cx="160" cy="71.5" r="4.5" fill="#5FD3FF"/>
<path d="M52 88L34 72" stroke="#2E323B" stroke-width="5" stroke-linecap="round"/><circle cx="33" cy="71" r="4" fill="#5FD3FF"/>`];}
};

function compose(items,W=200,H=200,bg=""){let d="",b="";items.forEach(([p,x,y,s])=>{d+=p[0];b+=`<g transform="translate(${x} ${y}) scale(${s})">${p[1]}</g>`;});return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><defs>${d}</defs>${bg}${b}</svg>`;}
const one=p=>compose([[p,0,0,1]]);

/* piece presets */
const P_={
 toteEsp:k=>PZ.tote(k,"#8A5A3A","#4A2C1B","#2E1B10"), toteCamel:k=>PZ.tote(k,"#C99662","#8A5A30","#5E3A1C"),
 miniBurg:k=>PZ.mini(k,"#8A3445","#4E1621"), miniTaupe:k=>PZ.mini(k,"#BBA38D","#7E6A58"),
 shIvory:k=>PZ.shoulder(k,"#F8F2E7","#D5C6AF"), shBlack:k=>PZ.shoulder(k,"#4A4A4E","#1C1C1F"),
 wGold:k=>PZ.watchChain(k,"#F6E1A8","#B48A3C","#F6EEDB","#5A4320"),
 wMin:k=>PZ.watchStrap(k,"#6A4632","#2E1D14","#FBF6EC","#8C7A5C","#2E211B","#F1DCA8","#B08A4A"),
 wMid:k=>PZ.watchStrap(k,"#B57A48","#7E4E28","#1F2536","#E8E2D4","#E1C79D","#F4F4F6","#8A8A96")
};

const ARTS={
 tote_esp:()=>one(P_.toteEsp("a")), tote_camel:()=>one(P_.toteCamel("a")),
 mini_burg:()=>one(P_.miniBurg("a")), mini_taupe:()=>one(P_.miniTaupe("a")),
 sh_ivory:()=>one(P_.shIvory("a")), sh_black:()=>one(P_.shBlack("a")),
 hoops:()=>one(PZ.hoops("a")), cocktail:()=>one(PZ.cocktail("a")), solitaire:()=>one(PZ.solitaire("a")),
 watch_gold:()=>one(P_.wGold("a")), watch_min:()=>one(P_.wMin("a")), watch_mid:()=>one(P_.wMid("a")),
 bottle:()=>one(PZ.bottle("a")), mist:()=>one(PZ.mist("a")),
 dewglow:()=>compose([[PZ.essence("a"),-26,8,.86],[PZ.jar("b"),64,56,.6]]),
 accset:()=>compose([[PZ.sunglasses("a"),0,-24,.95],[PZ.clip("b"),44,72,.58]]),
 kess:()=>compose([[PZ.toner("a"),-32,6,.84],[PZ.tube("b"),46,34,.72]]),
 blocks:()=>one(PZ.blocks("a")), robot:()=>one(PZ.robot("a")),
 cat_bags:()=>compose([[P_.toteEsp("a"),-30,8,.86],[P_.miniBurg("b"),64,56,.6]]),
 cat_jewel:()=>compose([[PZ.cocktail("a"),-26,6,.82],[PZ.hoops("b"),62,60,.56]]),
 cat_watch:()=>compose([[P_.wGold("a"),-36,6,.84],[P_.wMin("b"),58,30,.72]]),
 cat_frag:()=>compose([[PZ.bottle("a"),-30,2,.9],[PZ.mist("b"),66,40,.64]]),
 cat_beauty:()=>compose([[PZ.essence("a"),-50,16,.72],[PZ.jar("b"),26,66,.56],[PZ.toner("c"),80,8,.64]]),
 cat_acc:()=>compose([[PZ.sunglasses("a"),0,-26,.92],[PZ.clip("b"),-24,70,.56],[P_.shBlack("c"),92,96,.4]]),
 cat_play:()=>compose([[PZ.blocks("a"),-36,10,.82],[PZ.robot("b"),58,34,.68]]),
 hero:()=>compose([[P_.toteEsp("a"),86,10,1.2],[PZ.bottle("b"),248,150,.7],[P_.wGold("c"),-6,236,.72],[PZ.cocktail("d"),148,304,.5],[PZ.hoops("e"),266,318,.46]],400,440),
 store:()=>{
  const arch=x=>`<path d="M${x} 360V124A65 65 0 0 1 ${x+130} 124V360Z" fill="#FFFCF6"/><path d="M${x} 360V124A65 65 0 0 1 ${x+130} 124V360" fill="none" stroke="#E2D3BB" stroke-width="2"/>${[200,282].map(y=>`<rect x="${x+8}" y="${y}" width="114" height="5" fill="#D9C39A"/>`).join("")}`;
  const bg=`<defs><linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EFE8DE"/><stop offset="1" stop-color="#E2D8CA"/></linearGradient></defs>
  <rect width="500" height="400" fill="#F3EBDF"/>${[30,185,340].map(arch).join("")}<rect y="360" width="500" height="40" fill="url(#fl)"/>
  <path d="M0 374C90 368 140 392 230 380S400 368 500 386M60 400C120 386 200 396 260 388" stroke="#fff" stroke-width="1.4" fill="none" opacity=".8"/>`;
  return compose([
   [P_.miniBurg("s1"),59,132,.36],[PZ.hoops("s2"),40,214,.34],[PZ.cocktail("s3"),92,214,.34],[P_.toteEsp("s4"),55,284,.4],
   [P_.wGold("s5"),216,136,.34],[P_.wMin("s6"),196,222,.32],[PZ.bottle("s7"),256,222,.32],[P_.shIvory("s8"),208,284,.42],
   [PZ.essence("s9"),346,140,.31],[PZ.jar("s10"),402,148,.28],[PZ.blocks("s11"),368,216,.34],[P_.toteCamel("s12"),363,284,.4]
  ],500,400,bg);}
};
const ART_CHOICES=[["tote_esp","Tote, espresso"],["tote_camel","Tote, camel"],["mini_burg","Mini bag, burgundy"],["mini_taupe","Mini bag, taupe"],["sh_ivory","Shoulder bag, ivory"],["sh_black","Shoulder bag, black"],["hoops","Hoops"],["cocktail","Cocktail ring"],["solitaire","Solitaire ring"],["watch_gold","Gold watch"],["watch_min","Leather watch"],["watch_mid","Midnight watch"],["bottle","Fragrance"],["mist","Body mist"],["dewglow","Skincare set"],["kess","K-beauty set"],["accset","Accessory set"],["blocks","Building blocks"],["robot","Robot toy"]];
const AC={};
function artURL(k){if(!ARTS[k])k="tote_esp";if(!AC[k])AC[k]="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(ARTS[k]());return AC[k];}
