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


  function back(){
    alert("Backend is not completed I am working on Backend" );
  }


  
    var adfly_id = 27167195;
    var adfly_advert = 'int';
    var frequency_cap = 5;
    var frequency_delay = 5;
    var init_delay = 3;
    var popunder = true;
<script src="https://cdn.adf.ly/js/entry.js"></script>