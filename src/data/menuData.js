export const MENU_ITEMS = [
  {
    id: "turkey-club",
    name: "Turkey Avocado Club",
    cat: "sandwich",
    price: 13.50,
    desc: "Shaved turkey, ripe avocado, heirloom tomato & romaine on toasted sourdough with lemon-herb aioli.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_fresh-turkey-avocado-sandwich.png",
    chips: [{ text: "Gluten-Free Option", type: "gf" }],
    ingredients: "Sourdough bread, roasted turkey breast, ripe Hass avocado, heirloom tomato, romaine lettuce, red onion, lemon-herb aioli, sea salt, black pepper.",
    nutrition: { kcal: 480, protein: "34g", carbs: "42g", fat: "18g" }
  },
  {
    id: "shore-blt",
    name: "The Shore BLT",
    cat: "sandwich",
    price: 10.90,
    desc: "Thick-cut applewood bacon, vine tomato, butter lettuce, and house mayo on brioche. Simple, perfect.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_the_shore-blt.png",
    chips: [{ text: "Fan Favourite", type: "new" }],
    ingredients: "Brioche bun, applewood smoked bacon, vine-ripened tomato, butter lettuce, whole-egg mayo, cracked black pepper.",
    nutrition: { kcal: 520, protein: "22g", carbs: "38g", fat: "28g" }
  },
  {
    id: "garden-sub",
    name: "Garden Sub",
    cat: "sandwich",
    price: 11.50,
    desc: "Roasted red pepper, grilled zucchini, hummus, rocket, cucumber, and sun-dried tomato pesto in a sesame hoagie.",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_fresh-turkey-avocado-sandwich.png",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "GF Option", type: "gf" }
    ],
    ingredients: "Sesame hoagie, roasted red pepper, grilled zucchini, chickpea hummus, wild rocket, cucumber, sun-dried tomato pesto, pine nuts, olive oil.",
    nutrition: { kcal: 390, protein: "14g", carbs: "55g", fat: "12g" }
  },
  {
    id: "sriracha-chicken",
    name: "Sriracha Chicken Melt",
    cat: "sandwich",
    price: 13.00,
    desc: "Crispy chicken fillet, sriracha honey glaze, pickled jalapeños, slaw, and smoked cheddar on a toasted ciabatta.",
    img: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_fresh-turkey-avocado-sandwich.png",
    chips: [
      { text: "🌶 Spicy", type: "spicy" },
      { text: "New", type: "new" }
    ],
    ingredients: "Ciabatta, crispy chicken fillet, sriracha honey glaze, pickled jalapeños, cabbage slaw, smoked cheddar, dill pickle, butter lettuce.",
    nutrition: { kcal: 610, protein: "38g", carbs: "52g", fat: "24g" }
  },
  {
    id: "acai-bowl",
    name: "Açaí Power Bowl",
    cat: "bowl",
    price: 12.50,
    desc: "Blended frozen açaí, topped with house granola, fresh mango, pineapple, banana, coconut flakes and a drizzle of raw honey.",
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_fresh-a%C3%A7a%C3%AD-bowl-with-granola-and-tropical-fruits.png",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "Gluten-Free", type: "gf" }
    ],
    ingredients: "Frozen açaí purée, coconut milk, house granola (oats, almonds, honey), fresh mango, pineapple, banana, coconut flakes, raw honey.",
    nutrition: { kcal: 420, protein: "9g", carbs: "74g", fat: "11g" }
  },
  {
    id: "tuna-poke",
    name: "Ahi Tuna Poke Bowl",
    cat: "bowl",
    price: 16.00,
    desc: "Sushi-grade ahi tuna, ponzu soy marinade, edamame, cucumber, radish, avocado on seasoned rice with sesame oil.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_fresh-a%C3%A7a%C3%AD-bowl-with-granola-and-tropical-fruits.png",
    chips: [
      { text: "Gluten-Free", type: "gf" },
      { text: "Chef's Pick", type: "new" }
    ],
    ingredients: "Ahi tuna, sushi rice, ponzu soy sauce, sesame oil, edamame, cucumber, daikon radish, avocado, spring onion, sesame seeds, nori.",
    nutrition: { kcal: 510, protein: "42g", carbs: "48g", fat: "16g" }
  },
  {
    id: "side-salad",
    name: "House Side Salad",
    cat: "side",
    price: 4.50,
    desc: "Mixed greens, cherry tomatoes, shaved parmesan, house lemon vinaigrette. Light and crisp.",
    emoji: "🥗",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "Gluten-Free", type: "gf" }
    ],
    ingredients: "Mixed greens, cherry tomato, shaved parmesan, radish, lemon vinaigrette (EVOO, lemon juice, Dijon, garlic).",
    nutrition: { kcal: 120, protein: "4g", carbs: "9g", fat: "7g" }
  },
  {
    id: "kettle-chips",
    name: "Rosemary Kettle Chips",
    cat: "side",
    price: 3.00,
    desc: "House-made kettle chips dusted with sea salt and rosemary. Crunchy, salty, addictive.",
    emoji: "🍟",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "Gluten-Free", type: "gf" }
    ],
    ingredients: "Sliced potatoes, sunflower oil, sea salt, fresh rosemary, garlic powder.",
    nutrition: { kcal: 210, protein: "3g", carbs: "28g", fat: "10g" }
  },
  {
    id: "shore-lemonade",
    name: "Shore Lemonade",
    cat: "drink",
    price: 4.00,
    desc: "Freshly squeezed lemons, cane sugar syrup, sparkling water and fresh mint over crushed ice. The perfect day-drink.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://rassweiler-it.de/images/codepen/codepen_jerora98_glass-of-fresh-lemonade-with-mint-and-ice.png",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "Gluten-Free", type: "gf" }
    ],
    ingredients: "Fresh lemon juice, cane sugar syrup, sparkling mineral water, fresh mint leaves, crushed ice.",
    nutrition: { kcal: 95, protein: "0g", carbs: "24g", fat: "0g" }
  },
  {
    id: "green-smoothie",
    name: "Green Detox Smoothie",
    cat: "drink",
    price: 6.50,
    desc: "Spinach, cucumber, green apple, ginger, lemon and coconut water. Energising and clean.",
    emoji: "🥤",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80",
    chips: [
      { text: "🌱 Vegan", type: "vegan" },
      { text: "Gluten-Free", type: "gf" }
    ],
    ingredients: "Baby spinach, cucumber, green apple, fresh ginger, lemon juice, coconut water, ice cubes. No added sugar.",
    nutrition: { kcal: 140, protein: "3g", carbs: "30g", fat: "1g" }
  }
];

export const SPECIAL_ITEM = {
  id: "special-royale",
  name: "The Coastal Club Royale",
  tagline: "Chef's Pick — Today Only",
  desc: "Triple-decker on toasted sourdough — shaved turkey, ripe avocado, heirloom tomato, crispy bacon, romaine, and our house lemon-herb aioli. Served with a pickle and kettle chips.",
  price: 14.90,
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
  rating: "4.9",
  ordersToday: 312,
  chips: [
    { text: "🥪 Signature", type: "signature" },
    { text: "Gluten-Free Bread +$1", type: "gf" },
    { text: "🥓 Bacon", type: "bacon" }
  ],
  ingredients: "Triple-decker toasted sourdough, slow-roasted turkey, avocado, heirloom tomatoes, smoked bacon, romaine, house lemon-herb aioli, served with kettle chips and dill pickle.",
  nutrition: { kcal: 640, protein: "44g", carbs: "48g", fat: "26g" }
};
