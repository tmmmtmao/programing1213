function getDocument(t){
    return new DOMParser().parseFromString(t, "text/html");
  }
  
  const recipes = document.querySelectorAll(".title");
  let h3lists = document.getElementsByTagName('h3')

  for(let i = 0; i < recipes.length; i++){
    const recipe = recipes[i];
      const url = recipe.getAttribute("href");
      
      
      fetch(url)
        .then(r => r.text())
        .then(t => getDocument(t))
        .then(d => d.querySelectorAll("#info_box td a")[0].textContent)
        .then(e => h3lists[i].innerHTML += "<br/>" + e)
  }


  