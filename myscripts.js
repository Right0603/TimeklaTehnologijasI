const accordion = document.getElementsByClassName('contentBx');
for(i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

function next (link) {
    window.location = link;
}

function setRating (firstId, secondId, keyname){
  let output = document.getElementById(secondId);
  let range = document.getElementById(firstId);
  output.innerHTML= range.value;
  sessionStorage.setItem(keyname, String(range.value));
}

function main (){
  showRatingGORS();
  showRatingOlympic();
  showRatingCathedral();
  showRatingMuseum();
}

function showRatingGORS(){
  let rating = sessionStorage.getItem('rating-GORS');
  if(rating != null){
    let text = document.getElementById('rating-GORS');
    text.textContent = "Jūsu izliktā atzīme ir: " + rating;
    text.style.color = "green";
  }
}

function showRatingOlympic(){
  let rating = sessionStorage.getItem('rating-Olympic');
  if(rating != null){
    let text = document.getElementById('rating-Olympic');
    text.innerHTML = "Jūsu izliktā atzīme ir: " + rating;
    text.style.color = "green";
  }
}

function showRatingMuseum(){
  let rating = sessionStorage.getItem('rating-Museum');
  if(rating != null){
    let text = document.getElementById('rating-Museum');
    text.innerHTML = "Jūsu izliktā atzīme ir: " + rating;
    text.style.color = "green";
  }
}

function showRatingCathedral(){
  let rating = sessionStorage.getItem('rating-Cathedral');
  if(rating != null){
    let text = document.getElementById('rating-Cathedral');
    text.innerHTML = "Jūsu izliktā atzīme ir: " + rating;
    text.style.color = "green";
  }
}