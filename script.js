const navs = document.querySelectorAll('.nav');

navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
    
     const navLinks = document.querySelectorAll('.navlinks  li');

     navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          console.log('Navlink clicked:', link.textContent);
   
   
   
   });
     
  
  });
   
});

});

const forms= document.querySelector('.form');
const contact= document.querySelector('.form-contacting');
const nameinput= document.getElementById('name');
const emailinput=document.getElementById('Email');
const messageinput=document.getElementById('message')

forms.addEventListener('submit', function(e){
  e.preventDefault();

 



const nameValue= nameinput.value.trim()
const emailValue= emailinput.value.trim()
const messageValue= messageinput.value.trim()

if(nameValue=== ""){
  alert("Please Enter Your Name")
  return false;
}

if(emailValue=== "" ){
  alert("Please Enter Your Email")
  return false;
}

if(messageValue=== "" ){
  alert("Please Include Your Message")
  return false;
}


alert('Form Submitted Sucessfully')





})










