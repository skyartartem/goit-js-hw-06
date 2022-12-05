const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList.add('item');
  li.textContent = `${ingredient}`
  list.push(li);
});

const ulIngredients = document.getElementById("ingredients");

ulIngredients.append(...list)