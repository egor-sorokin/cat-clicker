;(function () {
  'use strict';

  var model = {
    currentCat: null,
    cats: [
      {
        'name': 'L',
        'img': 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        'counter': 0
      },
      {
        'name': 'Li',
        'img': 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
        'counter': 0
      },
      {
        'name': 'Lil',
        'img': 'https://www.thesun.co.uk/wp-content/uploads/2017/01/nintchdbpict000297357200.jpg?strip=all&w=960',
        'counter': 0
      },
      {
        'name': 'Lily',
        'img': 'https://i.pinimg.com/736x/bc/f0/4e/bcf04eafebdf707b8d900f02e6d8bd70--photo-tag-touch-me.jpg',
        'counter': 0
      },
      {
        'name': 'Lilyb',
        'img': 'https://yt3.ggpht.com/-V92UP8yaNyQ/AAAAAAAAAAI/AAAAAAAAAAA/zOYDMx8Qk3c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        'counter': 0
      }
    ]
  };


  var controller = {
    init: function () {
      model.currentCat = model.cats[0];

      catListView.init();
      catView.init();
      adminView.init();
    },

    getAllCats: function () {
      return model.cats;
    },

    getCurrentCat: function () {
      return model.currentCat;
    },

    setCurrentCat: function (cat) {
      model.currentCat = cat;
    },

    incrementCounterValue: function () {
      model.currentCat.counter++;
    },

    getCounterValue: function () {
      return model.currentCat.counter;
    },

    updateCurrentCatData: function (data) {
      var promise = new Promise(function (resolve, reject) {
        Object.keys(model.currentCat).forEach(function (key, index) {
          console.log(model.currentCat[key], data[index]);

          model.currentCat[key] = data[index];
        });

        resolve('resolve');
      });

      return promise;

    }
  };


  var catView = {
    init: function () {
      var self = this;

      self.setDOMSelectors();
      self.setEventListeners();
      self.render();
    },

    setDOMSelectors: function () {
      var self = this;

      self.catSelectedContainer = document.querySelector('.js-selected-cat');
      self.counter = document.querySelector('.js-counter');
      self.catImg = document.querySelector('.js-img');
    },

    setEventListeners: function () {
      var self = this;

      self.catImg.addEventListener('click', function () {
        controller.incrementCounterValue();
        self.counter.innerText = controller.getCounterValue();
      });
    },

    render: function () {
      var self = this;
      var currentCat = controller.getCurrentCat();

      self.catImg.setAttribute('src', currentCat.img);
      self.catImg.setAttribute('style', 'width:200px; height:auto;');
      self.catSelectedContainer.innerText = currentCat.name;
      self.counter.innerText = controller.getCounterValue();
    }
  };


  var catListView = {
    init: function () {
      this.setDOMSelectors();
      this.render();
    },

    setDOMSelectors: function () {
      this.catList = document.querySelector('.js-cats-list');
    },

    render: function () {
      var cat, domElem;
      var self = this;
      var cats = controller.getAllCats();

      self.catList.innerHTML = '';

      for (var i = 0; i < cats.length; i++) {
        cat = cats[i];

        domElem = document.createElement('li');
        domElem.innerText = cat.name;

        domElem.addEventListener('click', (function (catCopy) {
          return function () {
            controller.setCurrentCat(catCopy);
            catView.render();
            adminView.render();
          };
        })(cat));

        self.catList.appendChild(domElem);
      }
    }
  };

  var adminView = {
    init: function () {
      this.setDOMSelectors();
      this.setEventListeners();
      this.render();
    },

    setDOMSelectors: function () {
      this.adminButton = document.querySelector('.js-admin-button');
      this.form = document.querySelector('.js-form');
      this.inputs = document.querySelectorAll('.js-form input');
      this.cancelButton = document.querySelector('.js-form-cancel');
      this.saveButton = document.querySelector('.js-form-save');
    },


    setEventListeners: function () {
      var self = this;

      self.adminButton.addEventListener('click', function () {
        if (!self.form.classList.contains('show')) {
          self.form.classList.add('show');
        }
      });

      self.cancelButton.addEventListener('click', function () {
        removeShowFormClass();
      });

      self.saveButton.addEventListener('click', function (e) {
        e.preventDefault();

        var data = [];

        self.inputs.forEach(function (i) {
          data.push(i.value.trim());
        });


        controller.updateCurrentCatData(data).then(function() {
          catView.render();
          catListView.render();
          adminView.render();
        });

        removeShowFormClass();
      });

      function removeShowFormClass() {
        if (self.form.classList.contains('show')) {
          self.form.classList.remove('show');
        }
      }
    },

    render: function () {
      var self = this;
      var currentCat = controller.getCurrentCat();

      Object.keys(currentCat).forEach(function (key, index) {
        self.inputs[index].setAttribute('value', currentCat[key]);
      });
    }
  };


  controller.init();
})();
