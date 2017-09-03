;(function () {
  'use strict';

  var initialCats = [
    {
      'name': 'L',
      'imgSrc': 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
      'clickCount': 0,
      'nicknames': ['Amigo', 'Dj']
    },
    {
      'name': 'Li',
      'imgSrc': 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
      'clickCount': 0,
      'nicknames': ['Emy']
    },
    {
      'name': 'Lil',
      'imgSrc': 'https://www.thesun.co.uk/wp-content/uploads/2017/01/nintchdbpict000297357200.jpg?strip=all&w=960',
      'clickCount': 0,
      'nicknames': ['Amigo']
    },
    {
      'name': 'Lily',
      'imgSrc': 'https://i.pinimg.com/736x/bc/f0/4e/bcf04eafebdf707b8d900f02e6d8bd70--photo-tag-touch-me.jpg',
      'clickCount': 0,
      'nicknames': ['Dj']
    },
    {
      'name': 'Lilyb',
      'imgSrc': 'https://yt3.ggpht.com/-V92UP8yaNyQ/AAAAAAAAAAI/AAAAAAAAAAA/zOYDMx8Qk3c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      'clickCount': 0,
      'nicknames': ['Em', 'Deer']
    }
  ];


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

    this.catList = ko.observableArray([]);

    initialCats.forEach(function (i) {
      self.catList.push(new Cat(i));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
  };


  ko.applyBindings(new ViewModel());


})();
