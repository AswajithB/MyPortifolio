
$(".carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })



  function sendMail(){
    console.log("Everything is Ok")

    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value,
    };

    const serviceID="service_ccklmdy"
    const templateID="template_adtdnub"


    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById('name').value=""
        document.getElementById('email').value=""
        document.getElementById('subject').value=""
        document.getElementById('message').value=""
        alert("Your message was sent successfully");
    })
    .catch(err=>console.log(err));
  }