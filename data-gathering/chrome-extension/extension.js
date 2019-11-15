const res = document.querySelector('table#results');
if (res === null) {
  chrome.runtime.onMessage.addListener((req, src, sendresp) => {
    sendresp('n/a');
  });
} else {
  const keys = {};
  keys.PLAYER = 1;
  keys.DATE = 4;
  keys.TEAM = 6;
  keys.HOME = 7;
  keys.OPP = 8;
  keys.GAME = 10;
  keys.WEEK = 11;
  keys.DAY = 12;
  keys.COMPLETIONS = 13;
  keys.PASSATT = 14;
  keys.PASSYARDS = 16;
  keys.PASSTDS = 17;
  keys.INTS = 18;
  keys.SACKS = 20;
  keys.SACKYARDS = 21;
  keys.RUSHATT = 24;
  keys.RUSHYARDS = 25;
  keys.RUSHTDS = 27;
  keys.FUMBLES = 28;
  const tbody = res.children[3];
  const data = [...tbody.children].filter(el => !el.className);
  const lessdata = data.map(el => {
    const r1 = [...el.querySelectorAll('td')].map(el => el.textContent);
    const r2 = [];
    Object.keys(keys).forEach(k => {
      const key = keys[k] - 1;
      r2.push(r1[key]);
    })
    return r2;
  });
  const hdrs = Object.keys(keys).map(k => k.toLowerCase());
  lessdata.unshift(hdrs);
  const csv = lessdata.map(x => x.join(',')).join('\n');
  const timestamp = (new Date()).toString();
  const url = location.href;
  const output = `${url}\n${timestamp}\n\n${csv}`;
  const el = document.createElement('output');
  el.id = 'cshields143_pfrplus';
  el.style.display = 'none';
  el.textContent = output;
  document.body.appendChild(el);
  chrome.runtime.onMessage.addListener((req, src, sendresp) => {
    sendresp(document.querySelector('#cshields143_pfrplus').textContent);
  });
}