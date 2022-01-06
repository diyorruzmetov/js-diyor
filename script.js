const product = {
   plainBurger: {
      name: 'Гамбургер простой',
      price: 10000,
      kcall: 200,
      amount: 0,
      get Sum() {
         return this.price * this.amount
      },
      get Kcall() {
         return this.kcall * this.amount
      }
   },
   freshBurger: {
      name: 'Гамбургер FRESH',
      price: 20500,
      kcall: 300,
      amount: 0,
      get Sum() {
         return this.price * this.amount
      },
      get Kcall() {
         return this.kcall * this.amount
      }
   },
   freshCombo: {
      name: 'FRESH COMBO',
      price: 31900,
      kcall: 400,
      amount: 0,
      get Sum() {
         return this.price * this.amount
      },
      get Kcall() {
         return this.kcall * this.amount
      }
   }
}

const extraProduct = {
   doubleMayonnaise: {
      name: 'Двойной майонез',
      price: 1000,
      kcall: 50
   },
   lettuce: {
      name: 'Салатный лист',
      price: 500,
      kcall: 5
   },
   cheese: {
      name: 'Сыр',
      price: 800,
      kcall: 30
   }
}




const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');

btnPlusOrMinus.forEach(btn => {
   btn.addEventListener('click', function () {
      plusOrMinus(this);
   })
})

function plusOrMinus(element) {
   /* 
       closest() - метод объекта. Который подключается и получает родителя того элемента который указали
       getAttribute() - получает аттрибут с HTML
   */

   const parent = element.closest('.main__product'),
      parentId = parent.getAttribute('id'),
      productAmount = parent.querySelector('.main__product-num'),
      price = parent.querySelector('.main__product-price span'),
      kcall = parent.querySelector('.main__product-kcall span'),
      elementSymbol = element.getAttribute('data-symbol');

   if (elementSymbol == '+') {
      product[parentId].amount++
   } else if (elementSymbol == '-' && product[parentId].amount > 0) {
      product[parentId].amount--
   }

   productAmount.innerHTML = product[parentId].amount;
   price.innerHTML = product[parentId].Sum;
   kcall.innerHTML = product[parentId].Kcall;

}


let step = 0;
let time;

function outNUm() {
   let el = document.querySelector('.header__timer-extra');
   if (step < 50) {
      step++;
      time = 100
   }
   else if (step < 100) {
      step++;
      time = 150
   }

   setTimeout(() => {
      outNUm();

   }, time);
   el.innerHTML = step;
}

outNUm()