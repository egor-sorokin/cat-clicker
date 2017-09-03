var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Li');
  this.imgSrc = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');
  this.imgAttribution = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };

  this.level = ko.computed(function () {
    if (this.clickCount() < 10) {
      return 'newborn';
    }
    if (10<=this.clickCount() && this.clickCount()<20) {
      return 'infant';
    }
    if (this.clickCount() >= 20) {
      return 'teen';
    }

  }, this);


};

ko.applyBindings(new ViewModel());
