burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.navlist')
rightnav= document.querySelector('.rightnav')
burger.addEventListener('click', ()=>{
   rightnav.classList.toggle('v-class');
   navlist.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
   
}) 

 document.getElementById("firstheading").addEventListener("click",change);

  function change(){
    if(document.getElementById("skill").style.visibility == "visible"){
      document.getElementById("skill").style.visibility = "hidden";
    }else {
      document.getElementById("skill").style.visibility= "visible";
    }
  }

document.addEventListener('DOMContentLoaded', () => {
  const getSearchBar = 
      document.querySelector('#searchBar');
  const getAllMovies = 
      document.querySelectorAll('.first-box');

  getSearchBar.addEventListener('keyup', e => {
      getAllMovies.forEach(movie => {
          if (movie.innerText.toLowerCase().includes(
              e.target.value.toLowerCase())) {
              movie.style.display = 'block';
              return movie;
          }
          else {
              movie.style.display = 'none';
          }
      });
  });
});
  
const container = document.querySelector('.first-section')
    let limit = 4 ;
    let pageCount = 1;
    let postCount = 1;

  const getUserData = async() => {
    try {
    
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4$_page=1');
      const data = await res.json();
    console.log(data);
    
   }catch(error){
   console.log(error);

    data.map((curEln, index) => {
      const htmlData = '<div class="first-box"> <a href="" target="_blank"> <img src="">${postCount++}</a> <p class="first-pra">${curElm.body}</p></div>';
         
    first-section.insertAdjacentHTML('beforeened',htmlData)
        
    })
    
}
  }
  getUserData();

  const showData =() => {
    setTimeout(() =>{
      pageCount++;
      getUserData();
    },300)
  }

window.addEventListener('scroll', ()=>{
 const {scrollHeight , ScrollTop, ClientHeight} = document.documentElement;

 if(ScrollTop + ClientHeight >= scrollHeight){
  console.log('I am in Button')
  showData()
 }

})
 var adfly_id = 27167195;
    var adfly_advert = 'int';
    var popunder = true;
    var domains = ['depositfiles.com', 'rapidshare.com', 'vip-file.com', 'smsfiles.ru', '4files.net', 'turbobit.ru', 'uploading.com', 'letitbit.net', 'depositfiles.ru', 'sms4file.com', 'ifolder.ru', 'hotfile.com', 'anyfiles.net', 'sharingmatrix.com', 'megashare.com', 'megaupload.com', 'rapidshare.de', 'rapidshare.ru', 'uploadbox.com', 'filefactory.com', 'filefactory.ru', 'filepost.ru', 'onefile.net', 'freefolder.net', 'getthebit.com', 'turbobit.net'];


  
    var adfly_id = 27167195;
    var adfly_advert = 'int';
    var frequency_cap = 5;
    var frequency_delay = 5;
    var init_delay = 3;
    var popunder = true;

var adfly_id = 27167195;
    var adfly_advert = 'int';
    var popunder = true;
    var domains = ['depositfiles.com', 'rapidshare.com', 'vip-file.com', 'smsfiles.ru', '4files.net', 'turbobit.ru', 'uploading.com', 'letitbit.net', 'depositfiles.ru', 'sms4file.com', 'ifolder.ru', 'hotfile.com', 'anyfiles.net', 'sharingmatrix.com', 'megashare.com', 'megaupload.com', 'rapidshare.de', 'rapidshare.ru', 'uploadbox.com', 'filefactory.com', 'filefactory.ru', 'filepost.ru', 'onefile.net', 'freefolder.net', 'getthebit.com', 'turbobit.net'];
