var createImg = function( srcUrl ) {
  var img = document.createElement( "img" );
  img.src = srcUrl;
  return img;
}

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

var createCat = function( target, parent, children ) {
  for( var i = 0; i < children.length; i++ ){
    parent.appendChild( children[i] );
  }
  var target = document.getElementById( target );
  target.appendChild( parent );
}

var addCat = function( name, favFood, imgUrl ) {
  var catUl = createUl( "cat" );
  var nameLi = createLi( name );
  var favFoodLi = createLi( favFood );
  var catImg = createImg( imgUrl );
  createCat( "cats", catUl, [ nameLi, favFoodLi, catImg ] )
}

var app = function() {
  addCat("Satan", "Souls of the damned", "http://cdn.smosh.com/sites/default/files/2016/01/loki-the-vampire-cat.jpg");
}

window.onload = app;