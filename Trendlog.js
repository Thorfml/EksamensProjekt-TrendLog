//Knapper til pdf//

document.querySelectorAll('.button-dragndrop').forEach(function (element) {
    element.addEventListener('click', toggleKeyword);
  })
  
  function toggleKeyword(event) {
      var element = event.target;
    var boxUpper = document.getElementById('inner-buttons-grid');
    var boxPDF = document.getElementById('pdf-text');
    var newParent = element.parentNode.id === 'inner-buttons-grid' ? boxPDF : boxUpper;
    element.parentNode.removeChild(element);
    newParent.appendChild(element);
  }