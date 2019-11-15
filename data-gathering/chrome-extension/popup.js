chrome.tabs.query({active:true, currentWindow:true}, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, {type:'getText'}, resp => {
    const node = document.querySelector('output');
    if (resp === 'n/a') {
      document.body.innerHTML = '❌';
    } else {
      document.body.style.cssText = 'font-size:24px;font-weight:bold;color:lightblue';
      document.body.innerHTML = '◯';
      const url = resp.split('\n')[0];
      const txt = resp;
      const safeurl = encodeURIComponent(url);
      const safetxt = encodeURIComponent(txt);
      const fd = new FormData();
      fd.append('src', safeurl);
      fd.append('txt', safetxt);
      const postOpts = {
        method: 'POST',
        mode: 'cors',
        body: fd
      };
      const onSuccess = () => { document.body.textContent = '✅'; };
      fetch(`https://socratesdidnothingwrong.com/nfl/pfr/exists.php?url=${safeurl}`).
        then(x => x.text()).
        then(txt => {
          document.body.style.cssText = '';
          if (txt === 'n/a') {
            fetch('https://socratesdidnothingwrong.com/nfl/pfr/store.php', postOpts).
            then(onSuccess);
          } else {
            const old = new Date(txt);
            const now = new Date();
            const dist = now.getTime() - old.getTime();
            const days = Math.round(dist / (1000 * 60 * 60 * 24));
            const days_str = days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const txt2 = days ? `${days === 1 ? `${days_str} day` : `${days_str} days`} ago` : `today`;
            document.body.innerHTML = `<p>✅</p><p>Last saved ${txt2}</p><button>Update</button>`;
            document.body.querySelector('button').addEventListener('click', () => {
              fetch('https://socratesdidnothingwrong.com/nfl/pfr/store.php', postOpts).
              then(onSuccess);
            });
          }
        });
    }
  });
});