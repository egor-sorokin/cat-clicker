var Cat = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Li');
  this.imgSrc = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');
  this.imgAttribution = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');
  this.nicknames = ko.observableArray([
    'Amigo', 'Dj'
  ]);

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

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};


ko.applyBindings(new ViewModel());
