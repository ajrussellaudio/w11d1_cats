var createImg = function( srcUrl ) {
  var img = document.createElement( "img" );
  img.width = 500;
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
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")
  addCat("Satan", "Souls of the damned", "http://cdn.smosh.com/sites/default/files/2016/01/loki-the-vampire-cat.jpg");
}

window.onload = app;