// single panel open


// variables
var accordionBtn = document.querySelectorAll(".accordionTitle");
var allTexts = document.querySelectorAll(".text");
var accIcon = document.querySelectorAll(".accIcon");

// event listener
accordionBtn.forEach(el => {
  el.addEventListener("click", toggleAccordion);
});

// toggle accordion
function toggleAccordion(el) {
  var targetText = el.currentTarget.nextElementSibling.classList;
  var targetAccIcon = el.currentTarget.children[0];
  var target = el.currentTarget;

  if (targetText.contains("show")) {
    targetText.remove("show");
    targetAccIcon.classList.remove("anime");
    target.classList.remove("accordionTitleActive");
  } else {
    accordionBtn.forEach(el => {
      el.classList.remove("accordionTitleActive");

      allTexts.forEach(el => {
        el.classList.remove("show");
      });

      accIcon.forEach(el => {
        el.classList.remove("anime");
      });
    });

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
    /* Play the video
    vPlayer
    	.play().then(() => {})
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
    */
  }
}

jQuery(document).ready(function () {
  $('.accIcon').click(handleVideo);
  $('.accordionTitle').click(handleVideo);
})

