function selectDestination(){
    let s = document.getElementById("destination");
    let destination = s.value;
    let l = document.getElementById("language");
    let lang = l.value;
    let url = destination.concat("?lang=",lang); 
    console.log(url);
    document.getElementById("button").href= url;
    return true;
  }

  // function triggerSelect(id){
  //   document.getElementById(id).click();
  // }

  // function triggerStoreSelect(){
  //   alert('here');
  //   triggerSelect('destination');
  // }

  // function triggerLanguage(){
  //   triggerSelect('language');
  // }