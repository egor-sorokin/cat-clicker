var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Li');
  this.imgSrc = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');
  this.imgAttribution = ko.observable('https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg');

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  }


};

ko.applyBindings(new ViewModel());
