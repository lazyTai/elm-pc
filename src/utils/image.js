var CacheImage = function (dom) {
  this.dom = dom;
  var self = this;
  var _img = new Image()
  _img.src = 'static/loadding.gif';
  _img.onload = function () {
    self.dom.setAttribute("src", _img.src)
  }
}

var ProxyImage = function (cacheImage) {
  this.image = cacheImage;
}

ProxyImage.prototype.init = function () {
  var _image = new Image()
  var self = this;
  if (!_image.src) {
    if (self.image.dom) {
      _image.src = self.image.dom.getAttribute('data-src');
      _image.onload = function () {
        self.image.dom.setAttribute('src', _image.src)
      }
    }
  }
  return self.image.dom
}

var ImageFatory = function (dom) {
  var _image = new CacheImage(dom);
  var _hander = function () {
    if (document.documentElement.clientHeight + document.body.scrollTop > dom.offsetTop) {
      _image = new ProxyImage(_image);
      _image.init()
      document.removeEventListener('scroll', _hander)
    }
  }
  return function () {
    document.addEventListener('scroll', _hander)
    return _image;
  }
}
module.exports = ImageFatory
