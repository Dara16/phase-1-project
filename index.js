const dateToday =  document.getElementById("date-display")

function dateDisplay(){
    var today=new Date()
    var dd=today.getDate()
    var mm=today.getMonth()+1
    var yy=today.getFullYear()
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    
    return (mm+"/"+dd+"/"+yy);  
    }
    
dateToday.appendChild(document.createTextNode(dateDisplay()))
    
    
    const imageRandom = document.getElementById("cat-image-container");

function getRandomImage(){
  const randomImageApiUrl = "https://thatcopy.pw/catapi/rest/";

  fetch(randomImageApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      imageRandom.innerHTML = `<img src="${object.webpurl}">`;
      
    })
    .catch(function(error){
      console.log(error);
      
    });
}
    
getRandomImage();

const button = document.getElementById("new-image")
button.addEventListener('click', getRandomImage);
 
