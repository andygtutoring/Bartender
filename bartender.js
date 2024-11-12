// bartender.js
class Game {
  constructor() {
    this.customerOrder = document.getElementById('order-text');
    this.shaker = document.querySelector('.shaker');
    this.ingredients = document.querySelectorAll('.ingredient');
    this.shakeButton = document.getElementById('shake-button');
    this.serveButton = document.getElementById('serve-button');
    this.scoreText = document.getElementById('score-text');
    this.score = 0;
    this.currentOrder = null;
    this.pouredIngredients = [];

    this.generateOrder();
    this.addEventListeners();
  }

  generateOrder() {
    const drinks = [
      { name: 'Gin & Tonic', ingredients: ['gin', 'lime juice', 'cola'] },
      { name: 'Vodka Red Bull', ingredients: ['vodka', 'cola'] },
      { name: 'Rum & Coke', ingredients: ['rum', 'cola'] },
    ];

    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    this.currentOrder = randomDrink;
    this.customerOrder.textContent = `Make a ${randomDrink.name}`;
  }

  addEventListeners() {
    this.ingredients.forEach((ingredient) => {
      ingredient.addEventListener('click', () => {
        this.pourIngredient(ingredient.dataset.ingredient);
      });
    });

    this.shakeButton.addEventListener('click', () => {
      if (this.pouredIngredients.length > 0) {
        this.shake();
      }
    });

    this.serveButton.addEventListener('click', () => {
      if (this.pouredIngredients.length > 0) {
        this.serve();
      }
    });
  }

  pourIngredient(ingredient) {
    const ingredientElement = document.querySelector(`.ingredient.${ingredient}`);
    const shaker = document.querySelector('.shaker');
    const pourElement = document.createElement('div');
    pourElement.classList.add('pour');
    pourElement.style.background = this.getIngredientColor(ingredient);

    // Position pour element at ingredient bottle
    pourElement.style.top = ingredientElement.offsetTop + 'px';
    pourElement.style.left = ingredientElement.offsetLeft + 'px';

    // Add pour element to DOM
    document.body.appendChild(pourElement);

    // Animate pour element to shaker
    pourElement.addEventListener('animationend', () => {
      document.body.removeChild(pourElement);
      // Update shaker color
      switch (ingredient) {
        case 'gin':
          shaker.style.backgroundColor = '#3498db22'; // Light blue
          break;
        case 'vodka':
          shaker.style.backgroundColor = '#f1c40f22'; // Light orange
          break;
        case 'rum':
          shaker.style.backgroundColor = '#e74c3c22'; // Light red
          break;
        case 'lime-juice':
          shaker.style.backgroundColor = '#2ecc7122'; // Light green
          break;
        case 'cola':
          shaker.style.backgroundColor = '#9b59b622'; // Light purple
          break;
      }
    });

    pourElement.classList.add('animate-pour');

    this.pouredIngredients.push(ingredient);
  }

  getIngredientColor(ingredient) {
    switch (ingredient) {
      case 'gin':
        return '#3498db'; // Blue
      case 'vodka':
        return '#f1c40f'; // Orange
      case 'rum':
        return '#e74c3c'; // Red
      case 'lime-juice':
        return '#2ecc71'; // Green
      case 'cola':
        return '#9b59b6'; // Purple
    }
  }

  shake() {
    this.shaker.classList.add('shaking');
    setTimeout(() => {
      this.shaker.classList.remove('shaking');
    }, 1000);
  }

  serve() {
    const orderedIngredients = this.currentOrder.ingredients;
    if (orderedIngredients.every((ingredient) => this.pouredIngredients.includes(ingredient))) {
      this.score++;
      this.scoreText.textContent = `Score: ${this.score}`;
      this.customerOrder.textContent = 'Order served!';
      setTimeout(() => {
        this.generateOrder();
        this.pouredIngredients = [];
      }, 2000);
    } else {
      this.score--;
      this.scoreText.textContent = `Score: ${this.score}`;
      this.customerOrder.textContent = 'Incorrect order!';
      setTimeout(() => {
        this.generateOrder();
        this.pouredIngredients = [];
      }, 2000);
    }
    // Reset shaker color after serving
    this.shaker.style.backgroundColor = '#ccc';
    this.pouredIngredients = [];
  }
}

const game = new Game();


