//Knapper til pdf//

document.querySelectorAll('.button-dragndrop').forEach(function (element) {
    element.addEventListener('click', toggleKeyword);
  })
  
  function toggleKeyword(event) {
    let element = event.currentTarget;
    let boxUpper = document.getElementById('inner-buttons-grid');
    let boxPDF = document.getElementById('pdf-text');
    let newParent = element.parentNode.id === 'inner-buttons-grid' ? boxPDF : boxUpper;
    element.parentNode.removeChild(element);
    newParent.appendChild(element);
  }

  $('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('.stop-btn').click(function(){
      $('nav ul .stop-show').toggleClass("show2");
      $('nav ul .third').toggleClass("rotate");
    });
    $('.oee-btn').click(function(){
      $('nav ul .oee-show').toggleClass("show3");
      $('nav ul .four').toggleClass("rotate");
    });
    $('.sidst-btn').click(function(){
      $('nav ul .sidst-show').toggleClass("show4");
      $('nav ul .five').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });