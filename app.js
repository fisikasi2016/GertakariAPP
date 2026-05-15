const DATUAK = [
      {
        urtea:"1805",
        hilabetea:10,
        eguna:21,
        gertaera:"Trafalgarko Gudua",
        etapa:"Karlos IV.aren monarkia",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1807",
        hilabetea:10,
        eguna:27,
        gertaera:"Fontainebleauko Ituna",
        etapa:"Karlos IV.aren monarkia",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1808",
        hilabetea:3,
        eguna:19,
        gertaera:"Aranjuezeko matxinada: Karlos IV.a kargugabetua",
        etapa:"Karlos IV.aren monarkia",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1812",
        hilabetea:3,
        eguna:19,
        gertaera:"Cadizko Konstituzioa",
        etapa:"Independentzia Gerra",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1814",
        hilabetea:5,
        eguna:4,
        gertaera:"Fernando VII.a itzultzea eta absolutismoaren berrezarpena",
        etapa:"Absolutismoaren berrezarkuntza",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1820-1823",
        hilabetea:1,
        eguna:1,
        gertaera:"Hirurteko Liberala",
        etapa:"Hirurteko Liberala",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1833-1839",
        hilabetea:10,
        eguna:1,
        gertaera:"Lehen Gerra Karlista",
        etapa:"I. Gerra Karlista",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1836",
        hilabetea:2,
        eguna:21,
        gertaera:"Mendizabalen desamortizazioak",
        etapa:"Bi urteko progresista",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1841",
        hilabetea:8,
        eguna:16,
        gertaera:"Nafarroako Lege Hitzartua",
        etapa:"I. Gerra Karlista",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1854",
        hilabetea:6,
        eguna:28,
        gertaera:"Vicalvarada",
        etapa:"Biurteko Progresista",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1868",
        hilabetea:9,
        eguna:19,
        gertaera:"Iraultza La Gloriosa: Isabel II.a erbesteratua",
        etapa:"Seiurteko Demokratikoa",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1873",
        hilabetea:2,
        eguna:11,
        gertaera:"Espainiako Lehen Errepublika",
        etapa:"Seiurteko Demokratikoa",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1874",
        hilabetea:12,
        eguna:29,
        gertaera:"Alfonso XII.a tronura itzultzea",
        etapa:"Berrezarkuntzako sistemaren sorrera",
        gaia:"1. GAIA: Antzinako erregimenaren krisia eta Estatu liberalaren eraikuntza"
      },
      {
        urtea:"1876",
        hilabetea:6,
        eguna:30,
        gertaera:"1876ko Espainiako Konstituzioa",
        etapa:"Berrezarkuntzako sistemaren sorrera",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1898",
        hilabetea:4,
        eguna:25,
        gertaera:"Espainia-AEB Gerra",
        etapa:"Politika koloniala",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1909",
        hilabetea:7,
        eguna:26,
        gertaera:"Bartzelonako Aste Tragikoa",
        etapa:"Alfontso XIII.aren erregealdia",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1917",
        hilabetea:8,
        eguna:1,
        gertaera:"Krisi hirukoitza",
        etapa:"Alfontso XIII.aren erregealdia",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1921",
        hilabetea:7,
        eguna:22,
        gertaera:"Annual-eko hondamendia",
        etapa:"Alfontso XIII.aren erregealdia",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1923",
        hilabetea:9,
        eguna:13,
        gertaera:"Primo de Riveraren estatu kolpea",
        etapa:"Primo de Riveraren diktadura",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1930",
        hilabetea:8,
        eguna:17,
        gertaera:"Donostiako Ituna",
        etapa:"Primo de Riveraren diktadura",
        gaia:"2. GAIA: Berrezarkuntzaren sistema"
      },
      {
        urtea:"1848",
        hilabetea:10,
        eguna:28,
        gertaera:"Bartzelona-Mataró lehen trenbidea",
        etapa:"Espainiako industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1855",
        hilabetea:6,
        eguna:3,
        gertaera:"Trenbideen Lege Orokorra",
        etapa:"Espainiako industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1876",
        hilabetea:7,
        eguna:21,
        gertaera:"Foruen abolizioa Euskal Herrian",
        etapa:"Euskal Herriko industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1882",
        hilabetea:7,
        eguna:21,
        gertaera:"Bilboko Burtsa sortzea",
        etapa:"Euskal Herriko industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1890",
        hilabetea:5,
        eguna:1,
        gertaera:"Meatzarien lehen greba handiak Bizkaian",
        etapa:"Euskal Herriko industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1902",
        hilabetea:4,
        eguna:8,
        gertaera:"Bizkaiko Labe Garaiak sortzea",
        etapa:"Euskal Herriko industrializazioa",
        gaia:"3. GAIA: Euskal Herriko industrializazioa eta gizarte pluralaren sorrera"
      },
      {
        urtea:"1931",
        hilabetea:4,
        eguna:14,
        gertaera:"Errepublika aldarrikatzea",
        etapa:"II. Errepublika",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1931",
        hilabetea:12,
        eguna:9,
        gertaera:"1931ko Konstituzioa",
        etapa:"II. Errepublika",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1932",
        hilabetea:8,
        eguna:10,
        gertaera:"Sanjurjada",
        etapa:"Bi urteko errepublikano-sozialista",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1933",
        hilabetea:1,
        eguna:11,
        gertaera:"Casas Viejaseko gertakariak",
        etapa:"Bi urteko errepublikano-sozialista",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1934",
        hilabetea:10,
        eguna:5,
        gertaera:"Asturias-eko iraultza",
        etapa:"Bi urteko erradikal-cedista",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1936",
        hilabetea:2,
        eguna:16,
        gertaera:"Fronte Popularraren garaipena",
        etapa:"Fronte Popularra",
        gaia:"4. GAIA: II. Errepublika"
      },
      {
        urtea:"1936",
        hilabetea:10,
        eguna:1,
        gertaera:"Euskadiko lehenengo autonomia estatutua",
        etapa:"Euskal Estatutua",
        gaia:"5. GAIA: Gerra Zibila"
      },
      {
        urtea:"1936",
        hilabetea:7,
        eguna:18,
        gertaera:"Uztailaren 18ko estatu kolpea",
        etapa:"Gerra Zibila",
        gaia:"5. GAIA: Gerra Zibila"
      },
      {
        urtea:"1937",
        hilabetea:4,
        eguna:26,
        gertaera:"Gernikako bonbardaketa",
        etapa:"Gerra Zibila",
        gaia:"5. GAIA: Gerra Zibila"
      },
      {
        urtea:"1938",
        hilabetea:7,
        eguna:25,
        gertaera:"Ebroko bataila",
        etapa:"Gerra Zibila",
        gaia:"5. GAIA: Gerra Zibila"
      },
      {
        urtea:"1939",
        hilabetea:3,
        eguna:28,
        gertaera:"Madril erortzea: gerra amaiera",
        etapa:"Gerra Zibila",
        gaia:"5. GAIA: Gerra Zibila"
      },
      {
        urtea:"1938",
        hilabetea:3,
        eguna:9,
        gertaera:"Lanaren Forua",
        etapa:"Frankismoaren oinarrizko legeak",
        gaia:"6. GAIA: Diktadura frankista I"
      },
      {
        urtea:"1942",
        hilabetea:7,
        eguna:17,
        gertaera:"Gorteak Eratzeko Legea",
        etapa:"Frankismoaren oinarrizko legeak",
        gaia:"6. GAIA: Diktadura frankista I"
      },
      {
        urtea:"1947",
        hilabetea:7,
        eguna:26,
        gertaera:"Ondorengotza Legea",
        etapa:"Frankismoaren oinarrizko legeak",
        gaia:"6. GAIA: Diktadura frankista I"
      },
      {
        urtea:"1953",
        hilabetea:9,
        eguna:26,
        gertaera:"AEBekin akordio militarrak",
        etapa:"Frankismoaren trantsizioa",
        gaia:"6. GAIA: Diktadura frankista I"
      },
      {
        urtea:"1955",
        hilabetea:12,
        eguna:14,
        gertaera:"NBEra sartzea",
        etapa:"Frankismoaren trantsizioa",
        gaia:"6. GAIA: Diktadura frankista I"
      },
      {
        urtea:"1959",
        hilabetea:7,
        eguna:21,
        gertaera:"Egonkortze Plana",
        etapa:"Frankismoaren trantsizioa",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1959",
        hilabetea:7,
        eguna:31,
        gertaera:"ETAren sorrera",
        etapa:"Frankismoaren trantsizioa",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1963",
        hilabetea:12,
        eguna:2,
        gertaera:"TOP sortu",
        etapa:"Desarrollismoa",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1969",
        hilabetea:7,
        eguna:22,
        gertaera:"Juan Carlos oinordeko izendatua",
        etapa:"Desarrollismoa",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1970",
        hilabetea:12,
        eguna:3,
        gertaera:"Burgoseko prozesua",
        etapa:"Frankismoaren krisia",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1973",
        hilabetea:12,
        eguna:20,
        gertaera:"Carrero Blancoren atentatua",
        etapa:"Frankismoaren krisia",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1975",
        hilabetea:11,
        eguna:20,
        gertaera:"Franco hiltzea",
        etapa:"Frankismoaren krisia",
        gaia:"7. GAIA: Diktadura frankista II"
      },
      {
        urtea:"1976",
        hilabetea:7,
        eguna:3,
        gertaera:"Suárez eta erreforma politikoa",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      },
      {
        urtea:"1977",
        hilabetea:6,
        eguna:15,
        gertaera:"Lehen hauteskunde demokratikoak",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      },
      {
        urtea:"1978",
        hilabetea:12,
        eguna:6,
        gertaera:"1978ko Espainiako Konstituzioa",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      },
      {
        urtea:"1979",
        hilabetea:10,
        eguna:25,
        gertaera:"Gernikako Estatutua",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      },
      {
        urtea:"1981",
        hilabetea:2,
        eguna:23,
        gertaera:"23-F estatu kolpe saiakera",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      },
      {
        urtea:"1982",
        hilabetea:10,
        eguna:28,
        gertaera:"PSOEren garaipena: demokrazia finkatzea",
        etapa:"Trantsizioa",
        gaia:"8. GAIA: Trantsizioa"
      }
    ];

    const HILABETEAK = [
      '',
      'urtarrila',
      'otsaila',
      'martxoa',
      'apirila',
      'maiatza',
      'ekaina',
      'uztaila',
      'abuztua',
      'iraila',
      'urria',
      'azaroa',
      'abendua'
    ];

    function dataTestua(d){
      if(!d.hilabetea) return d.urtea;

      if(d.eguna){
        return `${d.urtea}ko ${HILABETEAK[d.hilabetea]}ren ${d.eguna}`;
      }

      return `${d.urtea}ko ${HILABETEAK[d.hilabetea]}`;
    }

    const GAIAK = [...new Set(DATUAK.map(d=>d.gaia))];
    const biltegia = document.getElementById('biltegia');
    const denbora = document.getElementById('denbora');
    const emaitza = document.getElementById('emaitza');
    let ariketa = [];
    let hautatua = null;

    function dataZenbakia(d){
      const urtea = parseInt(String(d.urtea).match(/\d{4}/)?.[0] || '0', 10);
      const hilabetea = d.hilabetea || 0;
      const eguna = d.eguna || 0;

      return urtea * 10000 + hilabetea * 100 + eguna;
    }
    function gaiaIzena(g){ return String(g).replace(/^\s*\d+\.\s*GAIA:\s*/i,''); }
    function nahasi(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }

    let gaiHautatuak = [...GAIAK];

    function aukera(){
      const datuIragaziak = DATUAK.filter(d => gaiHautatuak.includes(d.gaia));
      return nahasi(datuIragaziak)
        .slice(0,5)
        .sort((a,b)=>dataZenbakia(a)-dataZenbakia(b));
    }

    function cardHTML(d){
      return `<div class="card" draggable="true" data-id="${d.id}">
        <div class="card-inner">
          <div class="front">
            <div class="gertaera">${d.gertaera}</div>
            <div class="chiprow">
              <button class="ghost flip" type="button">Biratu</button>
              <button class="ghost urtebtn" type="button">Urtea desestali</button>
              <span class="chip urtea">${dataTestua(d)}</span>
            </div>
          </div>
          <div class="back">
            <div>
              <div class="gertaera">Etapa: ${d.etapa}</div>
              <p class="meta">Gaia: ${gaiaIzena(d.gaia)}</p>
            </div>
            <div class="chiprow"><button class="ghost flip" type="button">Itzuli</button></div>
          </div>
        </div>
      </div>`;
    }
    function sortuCard(d){
      const wrap = document.createElement('div');
      wrap.innerHTML = cardHTML(d);
      const card = wrap.firstElementChild;
      card.addEventListener('dragstart', e=>{ card.classList.add('dragging'); e.dataTransfer.setData('text/plain', d.id); });
      card.addEventListener('dragend', ()=>card.classList.remove('dragging'));
      card.addEventListener('dblclick', e=>{ if(e.target.tagName !== 'BUTTON') card.classList.toggle('flipped'); });
      card.querySelectorAll('.flip').forEach(b=>b.addEventListener('click',()=>card.classList.toggle('flipped')));
      card.querySelector('.urtebtn').addEventListener('click', e=>{ e.stopPropagation(); card.querySelector('.urtea').classList.toggle('ikusi'); });
      card.addEventListener('click', e=>{
        if(e.target.tagName === 'BUTTON') return;
        document.querySelectorAll('.card.hautatua').forEach(c=>c.classList.remove('hautatua'));
        hautatua = card;
        card.classList.add('hautatua');
      });
      return card;
    }
    function kokatu(s, card){
      if(!card) return;
      const dagoena = s.querySelector('.card');
      if(dagoena && dagoena !== card) biltegia.appendChild(dagoena);
      s.appendChild(card);
      s.classList.remove('hutsa','ok','txarto');
      document.querySelectorAll('.card.hautatua').forEach(c=>c.classList.remove('hautatua'));
      hautatua = null;
    }
    function berria(){
      emaitza.classList.remove('show');
      emaitza.innerHTML='';
      hautatua = null;
      ariketa = aukera().map((d,i)=>({...d,id:'g'+i+'_'+Date.now()+Math.random()}));
      biltegia.innerHTML=''; denbora.innerHTML='';
      nahasi(ariketa).forEach(d=>biltegia.appendChild(sortuCard(d)));
      for(let i=0;i<5;i++){
        const s=document.createElement('div'); s.className='slot hutsa'; s.dataset.zenb=i+1;
        s.addEventListener('dragover',e=>e.preventDefault());
        s.addEventListener('drop',e=>{
          e.preventDefault();
          const id=e.dataTransfer.getData('text/plain');
          const card=document.querySelector(`.card[data-id="${id}"]`);
          kokatu(s, card);
        });
        s.addEventListener('click',()=>{ if(hautatua) kokatu(s, hautatua); });
        denbora.appendChild(s);
      }
    }
    biltegia.addEventListener('dragover',e=>e.preventDefault());
    biltegia.addEventListener('drop',e=>{e.preventDefault(); const id=e.dataTransfer.getData('text/plain'); const card=document.querySelector(`.card[data-id="${id}"]`); if(card) biltegia.appendChild(card);});
    function jarritakoak(){ return [...denbora.querySelectorAll('.slot')].map(s=>s.querySelector('.card')?.dataset.id || null); }
    function zuzenaIds(){
      return [...ariketa]
        .sort((a,b)=>dataZenbakia(a)-dataZenbakia(b))
        .map(d=>d.id);
    }
    function margotu(){
      const ids = jarritakoak();
      const zuzen = zuzenaIds();

      let ok = 0;
      let txarto = 0;

      ids.forEach((id,i)=>{
        if(!id) return;

        if(id === zuzen[i]){
          ok++;
        } else {
          txarto++;
        }
      });

      return {
        ok,
        txarto,
        hutsik: ids.filter(x=>!x).length
      };
    }
    document.getElementById('nola').addEventListener('click',()=>{
      const r=margotu(); emaitza.classList.add('show');
      emaitza.innerHTML=`<button class="ghost" type="button" style="float:right" onclick="document.getElementById('emaitza').classList.remove('show')">Itxi</button><span class="pill ok">${r.ok} posizio zuzenean</span><span class="pill txarto">${r.txarto} posizio okerrean</span><span class="pill">${r.hutsik} hutsik</span>`;
    });
    document.getElementById('ikusi').addEventListener('click',()=>{
      margotu();
      const ordena=[...ariketa].sort((a,b)=>dataZenbakia(a)-dataZenbakia(b));
      emaitza.classList.add('show');
      emaitza.innerHTML=`<button class="ghost" type="button" style="float:right" onclick="document.getElementById('emaitza').classList.remove('show')">Itxi</button><strong>Emaitza osoa</strong><p class="txiki">Berdez daudenak ondo jarrita daude; gorriz daudenak, berriz, ez.</p><ol class="zerrenda">${ordena.map(d=>`<li>${d.gertaera} <strong>(${dataTestua(d)})</strong></li>`).join('')}</ol>`;
    });
    document.getElementById('garbitu').addEventListener('click',()=>{ document.querySelectorAll('.slot .card').forEach(c=>biltegia.appendChild(c)); document.querySelectorAll('.slot').forEach(s=>{s.className='slot hutsa'}); emaitza.classList.remove('show'); });
    document.getElementById('berria').addEventListener('click',berria);
    document.getElementById('gaiakBtn').textContent = 'Gaiak aukeratu';

    document.getElementById('gaiakLista').innerHTML =
      GAIAK.map((g, i) => `
        <li>
          <label>
            <input type="checkbox" class="gaiaCheck" value="${g}" checked>
            ${g.replace(/^\d+\.\s*GAIA:\s*/,'')}
          </label>
        </li>
      `).join('');

    const dialog = document.getElementById('gaiakDialog');

    document.getElementById('gaiakBtn').addEventListener('click', () => {
      dialog.showModal();
    });

    document.getElementById('itxi').addEventListener('click', () => {
      const aukeratuak = [...document.querySelectorAll('.gaiaCheck:checked')]
        .map(c => c.value);

      if (aukeratuak.length === 0) {
        alert('Gutxienez gai bat aukeratu behar duzu.');
        return;
      }

      gaiHautatuak = aukeratuak;
      dialog.close();
      berria();
    });

    berria();

// PWA instalazioa eta service worker-a
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .catch(err => console.warn('Service worker ezin izan da erregistratu:', err));
  });
}

let deferredPrompt = null;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  if (installBtn) installBtn.hidden = false;
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
}

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  if (installBtn) installBtn.hidden = true;
});

