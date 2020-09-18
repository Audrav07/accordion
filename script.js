//multiple panel open


// // variables
var accordionBtn = document.querySelectorAll(".accordionTitle");
 var allTexts = document.querySelectorAll(".text");
 var accIcon = document.querySelectorAll(".accIcon");

// // event listener
 accordionBtn.forEach(function (el) {
  el.addEventListener("click", toggleAccordion);
 });




// // toggle accordion
 function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
  var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;

 if (targetText.contains("show")) {
    targetText.remove("show");
     targetAccIcon.classList.remove("anime");
     target.classList.remove("accordionTitleActive");
  } else {
    targetText.add("show");
     target.classList.add("accordionTitleActive");
   targetAccIcon.classList.add("anime");

  }
  
  
    
 }




// pause/play video when clicking X button and title bar
function handleVideo() {
  var index = 0;
  var index1 = $(this).index('.accIcon');
  var index2 = $(this).index('.accordionTitle');

  if (index1 < 0) {
    index = index2;
  } else {
    index = index1;
  }

  if (index < 0) return;

  var iframe = $('iframe')[index]
  var vPlayer = new Vimeo.Player(iframe)

  if ($(this).hasClass('anime') || !($(this).hasClass('accordionTitleActive'))) { // when accordion is closed
    vPlayer
      .pause().then(() => {})
      .catch(error => {
        switch (error.name) {
          case 'PasswordError':
            console.log('the video is password-protected and the viewer needs to enter the password first')
            break;
          case 'PrivacyError':
            console.log('the video is private')
            break;
          default:
            console.log("some other error occurred")
            console.log(error)
            break;
        }
      });
  } else { // when accordion is opened
    var iframes = document.querySelectorAll("iframe");
    iframes.forEach(item => {
      var vPlayer = new Vimeo.Player(item);
      vPlayer.pause().then(() => {});
    })
  
  }
}

jQuery(document).ready(function () {
  $('.accIcon').click(handleVideo);
  $('.accordionTitle').click(handleVideo);
})




