var createLi = function( text ) {
  var li = document.createElement( "li" );
  li.innerText = text;
  return li;
}

var createUl = function( className ) {
  var ul = document.createElement( "ul" );
  ul.classList.add( className );
  return ul;
} 

var addCat = function( name, favFood, imgUrl ) {
  var catUl = createUl( "cat" );
  var nameLi = createLi( name );
  var favFoodLi = createLi( favFood );
  var catImg = createImg( imgUrl );
}

var app = function() {
  addCat("Satan", "Souls of the damned", "http://cdn.smosh.com/sites/default/files/2016/01/loki-the-vampire-cat.jpg");
}

window.onload = app;