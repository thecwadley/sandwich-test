// Please stay out
// Do not read
// Is a scary place
// Very easy to get lost
// Here be dragons

let items = {
  hotDog: {
    id: "hotDog",
    useText: "a hot dog",
    plural: false,
    properties: {
      bread: {
        style: "bun",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: false,
        bottom: true,
        left: true,
        right: true,
        front: false,
        back: false,
      },
      toppings: ["ketchup", "mustard", "relish"],
    },
  },

  sandwich: {
    id: "sandwich",
    useText: "a sandwich",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: [],
    },
  },

  hamburger: {
    id: "hamburger",
    useText: "a hamburger",
    plural: false,
    properties: {
      bread: {
        style: "bun",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["mayonaise", "mustard", "ketchup", "onion", "lettuce", "beef", "tomato", "protein"],
    },
  },

  sandwichButter: {
    id: "sandwichButter",
    useText: "butter between 2 pieces of bread",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["butter"],
    },
  },

  dinnerRollButter: {
    id: "dinnerRollButter",
    useText: "a buttered dinner roll (roll cut in half, butter inside)",
    plural: false,
    properties: {
      bread: {
        style: "roll",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: "opt",
        right: false,
        front: false,
        back: false,
      },
      toppings: ["butter"],
    },
  },

  quesadilla: {
    id: "quesadilla",
    useText: "a quesadilla",
    plural: false,
    properties: {
      bread: {
        style: "soft",
        kind: "tortilla",
        cooked: "reheated",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: "opt",
        right: false,
        front: false,
        back: false,
      },
      toppings: ["butter"],
    },
  },

  sandwichOpenFaced: {
    id: "sandwichOpenFaced",
    useText: "an open-faced sandwich",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: [],
    },
  },

  toastHamLettuceMayoMustard: {
    id: "toastHamLettuceMayoMustard",
    useText: "toast with ham, lettuce, mayonnaise, and mustard on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["ham", "lettuce", "mayonnaise", "mustard", "meat", "protein"],
    },
  },

  toastLettuceMayoMustard: {
    id: "toastLettuceMayoMustard",
    useText: "toast with lettuce, mayonnaise, and mustard on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["lettuce", "mayo", "mustard"],
    },
  },

  toastMayoMustard: {
    id: "toastMayoMustard",
    useText: "toast with mayonnaise and mustard on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["mayo", "mustard"],
    },
  },

  toastHamMayoMustard: {
    id: "toastHamMayoMustard",
    useText: "toast with ham, mayonnaise, and mustard on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["ham", "mayo", "mustard", "meat", "protein"],
    },
  },

  toastHam: {
    id: "toastHam",
    useText: "toast with ham on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["ham", "meat", "protein"],
    },
  },

  sandwichOpenFacedPBJ: {
    id: "sandwichOpenFacedPBJ",
    useText: "an open-faced PB&J",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["peanut butter", "jelly", "protein"],
    },
  },

  toastPeanutbutterJelly: {
    id: "toastPeanutbutterJelly",
    useText: "toast with peanut butter and jam/jelly on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["peanut butter", "jelly", "protein"],
    },
  },

  toastButterJelly: {
    id: "toastButterJelly",
    useText: "toast with butter and jam/jelly on top",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toast",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["butter", "jelly"],
    },
  },

  toastButter: {
    id: "toastButter",
    useText: "buttered toast",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["butter"],
    },
  },

  sandwichOpenFacedPeanutButter: {
    id: "sandwichOpenFacedPeanutButter",
    useText: "an open-faced peanut butter sandwich",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["peanut butter", "protein"],
    },
  },

  breadPeanutButter: {
    id: "breadPeanutButter",
    useText: "peanut-buttered bread",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["peanut butter", "protein"],
    },
  },

  toastPeanutButter: {
    id: "toastPeanutButter",
    useText: "peanut-buttered toast",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["peanut butter", "protein"],
    },
  },

  toast: {
    id: "toast",
    useText: "toast",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "toasted",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["none"],
    },
  },

  tacoHardShelled: {
    id: "tacoHardShelled",
    useText: "a hard-shelled taco",
    plural: false,
    properties: {
      bread: {
        style: "hard",
        kind: "tortilla",
        cooked: "before",
        madeof: "corn",
        texture: "crunchy",
      },
      faces: {
        top: false,
        bottom: true,
        left: true,
        right: true,
        front: false,
        back: false,
      },
      toppings: ["meat", "veggies", "lettuce", "cheese", "onion", "sour cream", "tomato", "protein"],
    },
  },

  tacoSoftShelled: {
    id: "tacoSoftShelled",
    useText: "a soft-shelled taco",
    plural: false,
    properties: {
      bread: {
        style: "soft",
        kind: "tortilla",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: "opt",
        bottom: true,
        left: true,
        right: true,
        front: false,
        back: "opt",
      },
      toppings: ["meat", "veggies", "lettuce", "cheese", "onion", "sour cream", "tomato", "protein"],
    },
  },

  taco: {
    id: "taco",
    useText: "a taco",
    plural: false,
    properties: {
      bread: {
        style: "hard",
        kind: "tortilla",
        cooked: "before",
        madeof: "corn",
        texture: "crunchy",
      },
      faces: {
        top: "opt",
        bottom: true,
        left: true,
        right: true,
        front: false,
        back: "opt",
      },
      toppings: ["meat", "veggies", "lettuce", "cheese", "onion", "sour cream", "tomato", "protein"],
    },
  },

  burrito: {
    id: "burrito",
    useText: "a burrito",
    plural: false,
    properties: {
      bread: {
        style: "soft",
        kind: "tortilla",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: true,
        front: true,
        back: true,
      },
      toppings: ["beans", "cheese", "lettuce", "veggies", "onions", "tomato", "meat", "protein"],
    },
  },

  tacoStreet: {
    id: "tacoStreet",
    useText: "a street taco",
    plural: false,
    properties: {
      bread: {
        style: "soft",
        kind: "tortilla",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: false,
        bottom: true,
        left: "opt",
        right: "opt",
        front: false,
        back: false,
      },
      toppings: ["meat", "veggies", "lettuce", "cheese", "onion", "sour cream", "tomato", "protein"],
    },
  },

  cornDog: {
    id: "cornDog",
    useText: "a corn dog",
    plural: false,
    properties: {
      bread: {
        style: "fried",
        kind: "cornbread",
        cooked: "after",
        madeof: "corn",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: true,
        front: true,
        back: true,
      },
      toppings: ["meat", "dog", "ketchup", "mustard", "protein"],
    },
  },

  sandwichHalfFolded: {
    id: "sandwichHalfFolded",
    useText: "a half-sandwich (folded, not cut)",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: false,
        front: false,
        back: false,
      },
      toppings: [],
    },
  },

  sandwichSub: {
    id: "sandwichSub",
    useText: "a sub sandwich",
    plural: false,
    properties: {
      bread: {
        style: "bun",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["meat", "veggies", "lettuce", "tomato", "mayo", "mustard", "protein"],
    },
  },

  hamburgerBunHotDog: {
    id: "hamburgerBunHotDog",
    useText: "a hot dog between a hamburger bun",
    plural: false,
    properties: {
      bread: {
        style: "bun",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["dog", "meat", "protein"],
    },
  },

  pizza: {
    id: "pizza",
    useText: "a pizza",
    plural: false,
    properties: {
      bread: {
        style: "flat",
        kind: "traditional",
        cooked: "after",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["sauce", "cheese", "pepperoni", "veggies", "meat", "protein"],
    },
  },

  toastSauceCheese: {
    id: "toastSauceCheese",
    useText: "toast with sauce and cheese",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["sauce", "cheese"],
    },
  },

  crustPieBottom: {
    id: "crustPieBottom",
    useText: "a pie (only bottom crust, such as pumpkin)",
    plural: false,
    properties: {
      bread: {
        style: "flat",
        kind: "traditional",
        cooked: "after",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: false,
        left: "opt",
        right: "opt",
        front: "opt",
        back: "opt",
      },
      toppings: ["fruit"],
    },
  },

  lasagna: {
    id: "lasagna",
    useText: "lasagna",
    plural: false,
    properties: {
      bread: {
        style: "flat",
        kind: "pasta",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["cheese", "meat"],
    },
  },

  crustPieTopBottom: {
    id: "crustPieTopBottom",
    useText: "a pie (top and bottom crust, such as apple)",
    plural: false,
    properties: {
      bread: {
        style: "flat",
        kind: "traditional",
        cooked: "after",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: true,
        front: true,
        back: true,
      },
      toppings: ["fruit"],
    },
  },

  cakeTwoLayer: {
    id: "cakeTwoLayer",
    useText: "a 2-layered cake",
    plural: false,
    properties: {
      bread: {
        style: "traditional",
        kind: "cake",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: true,
        bottom: true,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["frosting"],
    },
  },

  onionRings: {
    id: "onionRings",
    useText: "onion rings",
    plural: true,
    properties: {
      bread: {
        style: "fried",
        kind: "traditional",
        cooked: "before",
        madeof: "flour",
        texture: "crunchy",
      },
      faces: {
        top: true,
        bottom: true,
        left: true,
        right: true,
        front: true,
        back: true,
      },
      toppings: ["onion", "veggies"],
    },
  },

  nachos: {
    id: "nachos",
    useText: "nachos",
    plural: true,
    properties: {
      bread: {
        style: "hard",
        kind: "tortilla",
        cooked: "before",
        madeof: "flour",
        texture: "soft",
      },
      faces: {
        top: false,
        bottom: false,
        left: false,
        right: false,
        front: false,
        back: false,
      },
      toppings: ["cheese"],
    },
  },
};

let newQuestionDB = [
  [
    // sandwiches
    {
      subject: items.sandwich, // "a sandwich",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.0,
      questionNumber: 1,
    },
    {
      subject: items.hamburger, // "a hamburger",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.03,
      questionNumber: 2,
    },
    {
      subject: items.sandwichButter, // "butter between 2 pieces of bread",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.13,
      questionNumber: 3,
    },
    {
      subject: items.dinnerRollButter, // "a buttered dinner roll",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.25,
      questionNumber: 4,
    },
    {
      subject: items.quesadilla, // "a quesadilla",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.6,
      questionNumber: 5,
    },
  ],
  [
    // tacos
    {
      subject: items.tacoHardShelled, // "a hard-shelled taco",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.55,
      questionNumber: 20,
    },
    {
      subject: items.burrito, // "a burrito",
      object: items.tacoSoftShelled, // "a soft-shelled taco",
      questionWeight: 1.2,
      questionNumber: 21,
    },
    {
      subject: items.tacoStreet, // "a street taco",
      object: items.pizza, // "a pizza",
      questionWeight: 1.75,
      questionNumber: 22,
    },
    {
      subject: items.cornDog, // "a corn dog",
      object: items.burrito, // "a burrito",
      questionWeight: 1.77,
      questionNumber: 24,
    },
    {
      subject: items.sandwichHalfFolded, // "a half-sandwich (folded, not cut)",
      object: items.taco, // "a taco",
      questionWeight: 1.93,
      questionNumber: 25,
    },
    {
      subject: items.sandwichSub, // "a sub sandwich",
      object: items.taco, // "a taco",
      questionWeight: 1.4,
      questionNumber: 26,
    },
    {
      subject: items.burrito, // "a burrito",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.7,
      questionNumber: 27,
    },
  ],
  [
    // hot dogs
    {
      subject: items.hotDog, // "a hot dog",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.5,
      questionNumber: 28,
    },
    {
      subject: items.hamburgerBunHotDog, // "a hot dog between a hamburger bun",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.1,
      questionNumber: 29,
    },
    {
      subject: items.hotDog, // "a hot dog",
      object: items.sandwichSub, // "a sub sandwich",
      questionWeight: 1.45,
      questionNumber: 30,
    },
    {
      subject: items.cornDog, // "a corn dog",
      object: items.hotDog, // "a hot dog",
      questionWeight: 1.43,
      questionNumber: 31,
    },
    {
      subject: items.hotDog, // "a hot dog",
      object: items.taco, // "a taco",
      questionWeight: 1.61,
      questionNumber: 32,
    },
  ],
  [
    // pizzas
    {
      subject: items.pizza, // "a pizza",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.35,
      questionNumber: 33,
    },
    {
      subject: items.pizza, // "a pizza",
      object: items.toast, // "toast",
      questionWeight: 1.3,
      questionNumber: 34,
    },
    {
      subject: items.pizza, // "a pizza",
      object: items.toastSauceCheese, // "toast with sauce and cheese",
      questionWeight: 1.22,
      questionNumber: 35,
    },
    {
      subject: items.pizza, // "a pizza",
      object: items.sandwichOpenFaced, // "an open-faced sandwich",
      questionWeight: 1.27,
      questionNumber: 36,
    },
  ],
  [
    // toasts
    // open-faced ham sandwich
    {
      subject: items.sandwichOpenFaced, // "an open-faced sandwich",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.05,
      questionNumber: 6,
    },
    {
      subject: items.toastHamLettuceMayoMustard, // "toast with ham, lettuce, mayonnaise, and mustard on top",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.06,
      questionNumber: 7,
    },
    {
      subject: items.toastLettuceMayoMustard, // "toast with lettuce, mayonnaise, and mustard on top",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.57,
      questionNumber: 8,
    },
    {
      subject: items.toastMayoMustard, // "toast with mayonnaise and mustard on top",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.62,
      questionNumber: 9,
    },
    {
      subject: items.toastHamMayoMustard, // "toast with ham, mayonnaise, and mustard on top",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.06,
      questionNumber: 10,
    },
    {
      subject: items.toastHam, // "toast with ham on top",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.06,
      questionNumber: 11,
    },
    // open-faced pbj
    {
      subject: items.sandwichOpenFacedPBJ, // "an open-faced PB&J",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.08,
      questionNumber: 12,
    },
    {
      subject: items.toastPeanutbutterJelly, // "toast with peanut butter and jam/jelly",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.21,
      questionNumber: 13,
    },
    {
      subject: items.toastButterJelly, // "toast with butter and jam/jelly",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.41,
      questionNumber: 14,
    },
    {
      subject: items.toastButter, // "buttered toast",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.72,
      questionNumber: 15,
    },
    // open-faced pb
    {
      subject: items.sandwichOpenFacedPeanutButter, // "an open-faced peanut butter sandwich",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.17,
      questionNumber: 16,
    },
    {
      subject: items.breadPeanutButter, // "peanut-buttered bread",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.37,
      questionNumber: 17,
    },
    {
      subject: items.toastPeanutButter, // "peanut-buttered toast",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.65,
      questionNumber: 18,
    },

    {
      subject: items.toast, // "toast",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.79,
      questionNumber: 19,
    },
  ],
  [
    // misc
    {
      subject: items.crustPieBottom, // "a pie (only bottom crust, such as pumpkin)",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.99,
      questionNumber: 37,
    },
    {
      subject: items.lasagna, // "lasagna",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.9,
      questionNumber: 38,
    },
    {
      subject: items.crustPieTopBottom, // "a pie (top and bottom crust, such as apple)",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.95,
      questionNumber: 39,
    },
    {
      subject: items.cakeTwoLayer, // "a 2-layered cake",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.93,
      questionNumber: 40,
    },
    {
      subject: items.crustPieBottom, // "a pie (only bottom crust, such as pumpkin)",
      object: items.sandwichOpenFaced, // "an open-faced sandwich",
      questionWeight: 1.99,
      questionNumber: 41,
    },
    {
      subject: items.onionRings, // "onion rings",
      object: items.sandwich, // "a sandwich",
      questionWeight: 1.98,
      questionNumber: 42,
    },
    {
      subject: items.nachos, // "nachos",
      object: items.sandwich, // "a sandwich",
      questionWeight: 2.0,
      questionNumber: 43,
    },
  ],
];

let qNumber = 0;
let score = 0;
let allAnswers = [];
let allX = [];
let allY = [];

function createGraph(x, y) {
  $("#form").empty();
  $("#next").remove();
  $("#form").html("You got a " + x);

  $("#testCanvas").css("display", "block");
  var canvas = $("#testCanvas")[0];
  var context = canvas.getContext("2d");

  // declare graph start and end
  var GRAPH_WIDTH = 400 + 25 + 25;
  var GRAPH_HEIGHT = 400 + 25 + 25;

  var GRAPH_TOP = 25;
  var GRAPH_BOTTOM = 450 - 25;
  var GRAPH_LEFT = 25;
  var GRAPH_RIGHT = 450 - 25;

  var GRAPH_X_MID = 450 / 2;
  var GRAPH_Y_MID = 450 / 2;

  var GRAPH_HEIGHT = 450;
  var GRAPH_WIDTH = 450;

  // clear canvas (if another graph was previously drawn)
  context.clearRect(0, 0, 670, 450);

  context.strokeStyle = "#FFF";
  context.fillStyle = "#FFF";

  context.beginPath();
  context.fillRect(25, 25, GRAPH_WIDTH - 50, GRAPH_HEIGHT - 50);
  context.stroke();

  context.strokeStyle = "#000";

  // draw X axis
  context.beginPath();
  context.moveTo(GRAPH_LEFT, GRAPH_Y_MID);
  context.lineTo(GRAPH_RIGHT, GRAPH_Y_MID);
  context.stroke();

  // draw Y axis
  context.beginPath();
  context.moveTo(GRAPH_X_MID, GRAPH_TOP);
  context.lineTo(GRAPH_X_MID, GRAPH_BOTTOM);
  context.stroke();

  // draw reference line at the top of the graph
  context.beginPath();
  // set light grey color for reference lines
  context.strokeStyle = "#BBB";
  context.moveTo(GRAPH_LEFT, GRAPH_TOP);
  context.lineTo(GRAPH_RIGHT, GRAPH_TOP);
  context.stroke();

  context.beginPath();
  context.moveTo(GRAPH_RIGHT, GRAPH_TOP);
  context.lineTo(GRAPH_RIGHT, GRAPH_BOTTOM);
  context.stroke();

  context.beginPath();
  context.moveTo(GRAPH_RIGHT, GRAPH_BOTTOM);
  context.lineTo(GRAPH_LEFT, GRAPH_BOTTOM);
  context.stroke();

  context.beginPath();
  context.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
  context.lineTo(GRAPH_LEFT, GRAPH_TOP);
  context.stroke();

  const centerX = x + GRAPH_X_MID;
  const centerY = GRAPH_Y_MID - y;
  const radius = 5;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();
  context.lineWidth = 0;
  context.strokeStyle = "black";
  context.stroke();

  context.font = "10px Arial";
  context.fillText("Liberal", GRAPH_LEFT + 15, GRAPH_Y_MID - 10);
  context.fillText("Conservative", GRAPH_RIGHT - 100, GRAPH_Y_MID - 10);
  context.fillText("Sandwanarchist", GRAPH_X_MID - 35, GRAPH_TOP + 20);
  context.fillText("Good-wich", GRAPH_X_MID - 26, GRAPH_BOTTOM - 20);
}

let sectionNumber = 0;

const template = function (i) {
  return `<div data-weight="${i.questionWeight}" data-subject="${i.subject.id}" data-object="${i.object.id}" class="content">
<h1>Is <span class="subject">${i.subject.useText}</span> <span class="object">${i.object.useText}</span>?</h1>
<div class="yesnotoggle">
  <input type="radio" name="yesno-${i.questionNumber}" class="yes yesno" id="yes-${i.questionNumber}" value="yes" />
  <label for="yes-${i.questionNumber}">yes</label>
  <br />
  <input type="radio" name="yesno-${i.questionNumber}" class="no yesno" id="no-${i.questionNumber}" value="no" />
  <label for="no-${i.questionNumber}">no </label>
</div>
<h3>How strongly (or confidently) do you feel about this?</h3>
<label for="1-${i.questionNumber}">(little) | </label>
<input type="radio" name="strength-${i.questionNumber}" class="1 strength" id="1-${i.questionNumber}" value="1" />
<label for="1-${i.questionNumber}">1</label>
<input type="radio" name="strength-${i.questionNumber}" class="2 strength" id="2-${i.questionNumber}" value="2" />
<label for="2-${i.questionNumber}">2</label>
<input type="radio" name="strength-${i.questionNumber}" class="3 strength" id="3-${i.questionNumber}" value="3" />
<label for="3-${i.questionNumber}">3</label>
<input type="radio" name="strength-${i.questionNumber}" class="4 strength" id="4-${i.questionNumber}" value="4" />
<label for="4-${i.questionNumber}">4</label>
<input type="radio" name="strength-${i.questionNumber}" class="5 strength" id="5-${i.questionNumber}" value="5" />
<label for="5-${i.questionNumber}">5</label>
<label for="5-${i.questionNumber}"> | (very)</label>
<br />
</div>`;
};

function loadSection() {
  $("#form").empty();
  let questionsHTML = newQuestionDB[sectionNumber].map((i) => {
    return template(i);
  });

  $("#form").append(questionsHTML);

  radioListen();
}

let similars = {};
let chaosLevel = 0;

function calcChaos() {
  for (let i = 0; i < allAnswers.length; i++) {
    let currentQuestion = allAnswers[i];
    let subject = currentQuestion[2][0];
    let object = currentQuestion[2][1];

    if (subject.id === object.id) {
      chaosLevel += 200;
    }

    function checkProps(obj, obj2) {
      let properties = Object.keys(obj);
      for (let j = 0; j < properties.length; j++) {
        if (obj[properties[j]] === "opt" && obj2[properties[j]] !== "opt") {
          if (currentQuestion[1] >= 6) {
            obj[properties[j]] = obj2[properties[j]];
          } else if (currentQuestion[1] <= 5) {
            obj[properties[j]] = !obj2[properties[j]];
          }
        } else if (obj2[properties[j]] === "opt" && obj[properties[j]] !== "opt") {
          if (currentQuestion[1] >= 6) {
            obj2[properties[j]] = obj[properties[j]];
          } else if (currentQuestion[1] <= 5) {
            obj2[properties[j]] = !obj[properties[j]];
          }
        }
        if ((obj[properties[j]] === obj2[properties[j]] && currentQuestion[1] >= 6) || (obj[properties[j]] !== obj2[properties[j]] && currentQuestion[1] <= 5)) {
          if (similars[properties[j]] === undefined) {
            similars[properties[j]] = [0, 0];
          } else if (obj[properties[j]] === obj2[properties[j]] && currentQuestion[1] >= 6) {
            similars[properties[j]][0]++;
          } else if (obj[properties[j]] !== obj2[properties[j]] && currentQuestion[1] <= 5) {
            similars[properties[j]][1]++;
          }
        }
      }
    }

    checkProps(subject.properties.bread, object.properties.bread);
    checkProps(subject.properties.faces, object.properties.faces);
  }

  let ratios = [];
  let keys = Object.keys(similars);
  for (let i = 0; i < keys.length; i++) {
    ratios.push(similars[keys[i]][0] / similars[keys[i]][1]);
    similars[keys[i]].push(similars[keys[i]][0] / similars[keys[i]][1]);
  }

  ratios.sort(function (a, b) {
    return b - a;
  });

  ratios = ratios.slice(0, 4);
  let finalScore = (ratios[0] + ratios[1] + ratios[2] + ratios[3]) / 4 - 0.5;
  finalScore = (finalScore < 0 ? 0 : finalScore) * 66;
  if (finalScore > 400) {
    finalScore = 400;
  }
  finalScore -= 200;
  return finalScore / -1;
}

$("#next").click(function () {
  let checked = $("input[type=radio]:checked").length;
  let total = $(".content").length * 2;
  if (checked === total) {
    let questionElements = $(".content");
    for (let i = 0; i < questionElements.length; i++) {
      let qScore = 0;
      let currentElement = questionElements.eq(i);
      let yesno = currentElement.find(".yesno:checked").val();
      let strength = currentElement.find(".strength:checked").val();
      let weight = parseFloat(currentElement.attr("data-weight"));
      let subject = items[currentElement.attr("data-subject")];
      let object = items[currentElement.attr("data-object")];

      if (weight != 0) {
        let adjStrength = parseInt(strength);
        if (yesno === "yes") {
          adjStrength += 5;
        } else if (yesno === "no") {
          if (strength == 1) {
            adjStrength = 5;
          } else if (strength == 2) {
            adjStrength = 4;
          } else if (strength == 4) {
            adjStrength = 2;
          } else if (strength == 5) {
            adjStrength = 1;
          }
        }
        allAnswers.push([weight, parseInt(adjStrength), [subject, object]]);
        allX.push(weight);
        allY.push(parseInt(adjStrength));
      }

      if (yesno === "yes" && weight != 0) {
        weight = -Math.pow(5, -(weight - 1)) + 1.5;
        qScore = parseInt(strength) * weight;
        score += qScore;
      } else if (yesno === "no" && weight != 0) {
        weight = Math.pow(50, -(weight - 1)) + 0.5;
        qScore = parseInt(strength) * weight;
        score -= qScore;
      }

      qNumber++;
    }
    $("#progress" + (sectionNumber + 1)).css("width", "100%");
    if (sectionNumber < newQuestionDB.length - 1) {
      sectionNumber++;
      loadSection();
      document.getElementsByClassName("content")[0].scrollIntoView({
        behavior: "smooth",
      });
    } else if (sectionNumber === newQuestionDB.length - 1) {
      const result = calcChaos();

      // score -= 10;
      score = Math.round(score * 100) / -100;

      console.log(allAnswers);

      createGraph(score, result);
    }
  } else {
    alert("Please answer all questions.");
  }
});

loadSection();

$("#letsgo").on("click", function () {
  if (document.getElementsByClassName("content")[0] !== undefined) {
    document.getElementsByClassName("content")[0].scrollIntoView({
      behavior: "smooth",
    });
  }
});

function progress() {
  let checked = $("input[type=radio]:checked").length;
  let total = $(".content").length * 2 + 1;
  let frac = (checked / total) * 100;

  $("#progress" + (sectionNumber + 1)).css("width", frac + "%");
}

function radioListen() {
  $("input[type=radio]").on("change", progress);
}

function autoFill() {
  let method = "random"; // low || random || high

  if (method === "low") {
    $(".no").click();
    $(".5").click();
  } else if (method === "high") {
    $(".yes").click();
    $(".5").click();
  } else {
    let sectionQuestions = $(".content");
    for (let i = 0; i < sectionQuestions.length; i++) {
      let randNumb = Math.floor(Math.random() * 2);
      if (randNumb === 0) {
        sectionQuestions.eq(i).find(".no").click();
      } else if (randNumb === 1) {
        sectionQuestions.eq(i).find(".yes").click();
      }

      randNumb = Math.ceil(Math.random() * 5);
      sectionQuestions
        .eq(i)
        .find("." + randNumb)
        .click();
    }
  }

  if (sectionNumber < newQuestionDB.length - 1) {
    $("#next").click();
    autoFill();
  } else if (sectionNumber === newQuestionDB.length - 1) {
    $("#next").click();
  }
}

// autoFill();

$("body").keypress(function (e) {
  let activeRadio;
  let activeParent;
  let checked = $("input[type=radio]:checked").length;
  let total = $(".content").length * 2;

  if (e.key === "j") {
    activeRadio = $("input[type=radio].yes:not(:checked)")
      .filter(function () {
        return !$(this).siblings(".yesno:checked").eq(0).length;
      })
      .eq(0);
  }

  if (e.key === "k") {
    activeRadio = $("input[type=radio].no:not(:checked)")
      .filter(function () {
        return !$(this).siblings(".yesno:checked").eq(0).length;
      })
      .eq(0);
  }

  if (e.key === "j" || e.key === "k") {
    progress();
    activeParent = activeRadio.parents(".content").get(0);
  }

  if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5") {
    activeRadio = $("input[type=radio]." + e.key + ":not(:checked)")
      .filter(function () {
        return !$(this).siblings(".strength:checked").eq(0).length;
      })
      .eq(0);
    progress();
    activeParent = activeRadio.parents(".content").eq(0).next(".content").get(0);
  }

  if (e.key === "Enter" && checked === total) {
    $("#next").click();
  } else if (activeRadio) {
    activeRadio.prop("checked", true);
    if (activeParent !== undefined) {
      activeParent.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});
