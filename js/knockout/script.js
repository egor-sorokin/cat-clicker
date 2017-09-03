var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function () {
    if (this.clickCount() < 10) {
      return 'newborn';
    } else if (this.clickCount() < 20) {
      return 'infant';
    } else if (this.clickCount() >= 20) {
      return 'teen';
    }

  }, this);

};

var ViewModel = function () {
  var self = this;

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Li',
    imgSrc: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
    nicknames: [
      'Amigo', 'Dj'
    ]
  }));

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};


ko.applyBindings(new ViewModel());
