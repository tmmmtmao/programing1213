let calendars = document.querySelectorAll(".list-rst__calendar-frame");
for(let i = 0; i < calendars.length; i++){
  let e = calendars[i];
  e.style.display = 'none';
}

function f(n){
  let cs = n.childNodes;
  for(let i = 0; i < cs.length; i++){
    let c = cs[i];
    if(c.nodeType == Node.TEXT_NODE){
      c.textContent = c.textContent.replace(/です。/g, "だってばよ。");
    }
    else{
      f(c);
    }
  }
}

f(document.body); 