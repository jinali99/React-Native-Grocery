import Apple from '../../assets/images/apple.png';
import Banana from '../../assets/images/banana.png';
import Grapes from '../../assets/images/grapes.png';
import Mango from '../../assets/images/mango.png';
import Orange from '../../assets/images/orange.png';
import Pinapple from '../../assets/images/pinapple.png';
import Kiwi from '../../assets/images/kiwi.png';
import Strawberry from '../../assets/images/strawberry.png';
import Watermelon from '../../assets/images/watermalon.png';
import Papaya from '../../assets/images/papaya.png';

export const data = {
  categories: [
    {
      id: 1,
      name: 'Fruits',
      products: [
        {
          id: 101,
          name: 'Apple',
          image: Apple,
          price_range: {
            regular_price: {amount: '10.00', currency: 'SAR'},
            discount_price: {amount: '8.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU101',
        },
        {
          id: 102,
          name: 'Banana',
          image: Banana,
          price_range: {
            regular_price: {amount: '6.00', currency: 'SAR'},
            discount_price: {amount: '5.00', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU102',
        },
        {
          id: 103,
          name: 'Orange',
          image: Orange,
          price_range: {
            regular_price: {amount: '9.00', currency: 'SAR'},
            discount_price: {amount: '7.80', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU103',
        },
        {
          id: 104,
          name: 'Grapes',
          image: Grapes,
          price_range: {
            regular_price: {amount: '15.00', currency: 'SAR'},
            discount_price: {amount: '13.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU104',
        },
        {
          id: 105,
          name: 'Pineapple',
          image: Pinapple,
          price_range: {
            regular_price: {amount: '12.00', currency: 'SAR'},
            discount_price: {amount: '10.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU105',
        },
        {
          id: 106,
          name: 'Mango',
          image: Mango,
          price_range: {
            regular_price: {amount: '18.00', currency: 'SAR'},
            discount_price: {amount: '15.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU106',
        },
        {
          id: 107,
          name: 'Strawberry',
          image: Strawberry,
          price_range: {
            regular_price: {amount: '25.00', currency: 'SAR'},
            discount_price: {amount: '22.00', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU107',
        },
        {
          id: 108,
          name: 'Watermelon',
          image: Watermelon,
          price_range: {
            regular_price: {amount: '5.00', currency: 'SAR'},
            discount_price: {amount: '4.00', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU108',
        },
        {
          id: 109,
          name: 'Papaya',
          image: Papaya,
          price_range: {
            regular_price: {amount: '14.00', currency: 'SAR'},
            discount_price: {amount: '12.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU109',
        },
        {
          id: 110,
          name: 'Kiwi',
          image: Kiwi,
          price_range: {
            regular_price: {amount: '22.00', currency: 'SAR'},
            discount_price: {amount: '19.50', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRU110',
        },
      ],
    },
    {
      id: 2,
      name: 'Vegetables',
      products: [
        {
          id: 201,
          name: 'Carrot',
          image: 'carrot.png',
          price_range: {
            regular_price: {amount: '180', currency: 'SAR'},
            discount_price: {amount: '150', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG201',
        },
        {
          id: 202,
          name: 'Tomato',
          image: 'tomato.png',
          price_range: {
            regular_price: {amount: '200', currency: 'SAR'},
            discount_price: {amount: '180', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG202',
        },
        {
          id: 203,
          name: 'Potato',
          image: 'potato.png',
          price_range: {
            regular_price: {amount: '150', currency: 'SAR'},
            discount_price: {amount: '130', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG203',
        },
        {
          id: 204,
          name: 'Onion',
          image: 'onion.png',
          price_range: {
            regular_price: {amount: '220', currency: 'SAR'},
            discount_price: {amount: '200', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG204',
        },
        {
          id: 205,
          name: 'Spinach',
          image: 'spinach.png',
          price_range: {
            regular_price: {amount: '100', currency: 'SAR'},
            discount_price: {amount: '90', currency: 'SAR'},
          },
          unit: 'per bunch',
          sku: 'VEG205',
        },
        {
          id: 206,
          name: 'Broccoli',
          image: 'broccoli.png',
          price_range: {
            regular_price: {amount: '280', currency: 'SAR'},
            discount_price: {amount: '250', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG206',
        },
        {
          id: 207,
          name: 'Cauliflower',
          image: 'cauliflower.png',
          price_range: {
            regular_price: {amount: '250', currency: 'SAR'},
            discount_price: {amount: '220', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'VEG207',
        },
        {
          id: 208,
          name: 'Cucumber',
          image: 'cucumber.png',
          price_range: {
            regular_price: {amount: '150', currency: 'SAR'},
            discount_price: {amount: '130', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG208',
        },
        {
          id: 209,
          name: 'Capsicum',
          image: 'capsicum.png',
          price_range: {
            regular_price: {amount: '300', currency: 'SAR'},
            discount_price: {amount: '270', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG209',
        },
        {
          id: 210,
          name: 'Garlic',
          image: 'garlic.png',
          price_range: {
            regular_price: {amount: '400', currency: 'SAR'},
            discount_price: {amount: '350', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'VEG210',
        },
      ],
    },
    {
      id: 3,
      name: 'Dairy Products',
      products: [
        {
          id: 301,
          name: 'Milk',
          image: 'milk.png',
          price_range: {
            regular_price: {amount: '10', currency: 'SAR'},
            discount_price: {amount: '8', currency: 'SAR'},
          },
          unit: 'per liter',
          sku: 'DAI301',
        },
        {
          id: 302,
          name: 'Cheese',
          image: 'cheese.png',
          price_range: {
            regular_price: {amount: '50', currency: 'SAR'},
            discount_price: {amount: '45', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'DAI302',
        },
        {
          id: 303,
          name: 'Butter',
          image: 'butter.png',
          price_range: {
            regular_price: {amount: '30', currency: 'SAR'},
            discount_price: {amount: '28', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'DAI303',
        },
        {
          id: 304,
          name: 'Yogurt',
          image: 'yogurt.png',
          price_range: {
            regular_price: {amount: '12', currency: 'SAR'},
            discount_price: {amount: '10', currency: 'SAR'},
          },
          unit: 'per cup',
          sku: 'DAI304',
        },
        {
          id: 305,
          name: 'Cream',
          image: 'cream.png',
          price_range: {
            regular_price: {amount: '20', currency: 'SAR'},
            discount_price: {amount: '18', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'DAI305',
        },
        {
          id: 306,
          name: 'Paneer',
          image: 'paneer.png',
          price_range: {
            regular_price: {amount: '35', currency: 'SAR'},
            discount_price: {amount: '30', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'DAI306',
        },
      ],
    },
    {
      id: 4,
      name: 'Bakery Items',
      products: [
        {
          id: 401,
          name: 'Bread',
          image: 'bread.png',
          price_range: {
            regular_price: {amount: '5', currency: 'SAR'},
            discount_price: {amount: '4', currency: 'SAR'},
          },
          unit: 'per loaf',
          sku: 'BAK401',
        },
        {
          id: 402,
          name: 'Cake',
          image: 'cake.png',
          price_range: {
            regular_price: {amount: '40', currency: 'SAR'},
            discount_price: {amount: '35', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'BAK402',
        },
        {
          id: 403,
          name: 'Croissant',
          image: 'croissant.png',
          price_range: {
            regular_price: {amount: '15', currency: 'SAR'},
            discount_price: {amount: '12', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'BAK403',
        },
        {
          id: 404,
          name: 'Bagel',
          image: 'bagel.png',
          price_range: {
            regular_price: {amount: '10', currency: 'SAR'},
            discount_price: {amount: '8', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'BAK404',
        },
        {
          id: 405,
          name: 'Muffin',
          image: 'muffin.png',
          price_range: {
            regular_price: {amount: '18', currency: 'SAR'},
            discount_price: {amount: '15', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'BAK405',
        },
        {
          id: 406,
          name: 'Doughnut',
          image: 'doughnut.png',
          price_range: {
            regular_price: {amount: '12', currency: 'SAR'},
            discount_price: {amount: '10', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'BAK406',
        },
      ],
    },
    {
      id: 5,
      name: 'Beverages',
      products: [
        {
          id: 501,
          name: 'Orange Juice',
          image: 'orange_juice.png',
          price_range: {
            regular_price: {amount: '15', currency: 'SAR'},
            discount_price: {amount: '12', currency: 'SAR'},
          },
          unit: 'per liter',
          sku: 'BEV501',
        },
        {
          id: 502,
          name: 'Coffee',
          image: 'coffee.png',
          price_range: {
            regular_price: {amount: '25', currency: 'SAR'},
            discount_price: {amount: '22', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'BEV502',
        },
        {
          id: 503,
          name: 'Green Tea',
          image: 'green_tea.png',
          price_range: {
            regular_price: {amount: '20', currency: 'SAR'},
            discount_price: {amount: '18', currency: 'SAR'},
          },
          unit: 'per box',
          sku: 'BEV503',
        },
        {
          id: 504,
          name: 'Soft Drink',
          image: 'soft_drink.png',
          price_range: {
            regular_price: {amount: '10', currency: 'SAR'},
            discount_price: {amount: '8', currency: 'SAR'},
          },
          unit: 'per bottle',
          sku: 'BEV504',
        },
        {
          id: 505,
          name: 'Lemonade',
          image: 'lemonade.png',
          price_range: {
            regular_price: {amount: '12', currency: 'SAR'},
            discount_price: {amount: '10', currency: 'SAR'},
          },
          unit: 'per bottle',
          sku: 'BEV505',
        },
        {
          id: 506,
          name: 'Energy Drink',
          image: 'energy_drink.png',
          price_range: {
            regular_price: {amount: '18', currency: 'SAR'},
            discount_price: {amount: '15', currency: 'SAR'},
          },
          unit: 'per can',
          sku: 'BEV506',
        },
      ],
    },
    {
      id: 6,
      name: 'Snacks',
      products: [
        {
          id: 601,
          name: 'Chips',
          image: 'chips.png',
          price_range: {
            regular_price: {amount: '30', currency: 'SAR'},
            discount_price: {amount: '25', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA601',
        },
        {
          id: 602,
          name: 'Popcorn',
          image: 'popcorn.png',
          price_range: {
            regular_price: {amount: '20', currency: 'SAR'},
            discount_price: {amount: '18', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA602',
        },
        {
          id: 603,
          name: 'Pretzels',
          image: 'pretzels.png',
          price_range: {
            regular_price: {amount: '30', currency: 'SAR'},
            discount_price: {amount: '28', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA603',
        },
        {
          id: 604,
          name: 'Biscuits',
          image: 'biscuits.png',
          price_range: {
            regular_price: {amount: '25', currency: 'SAR'},
            discount_price: {amount: '22', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA604',
        },
        {
          id: 605,
          name: 'Granola Bar',
          image: 'granola_bar.png',
          price_range: {
            regular_price: {amount: '60', currency: 'SAR'},
            discount_price: {amount: '55', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'SNA605',
        },
        {
          id: 606,
          name: 'Trail Mix',
          image: 'trail_mix.png',
          price_range: {
            regular_price: {amount: '40', currency: 'SAR'},
            discount_price: {amount: '35', currency: 'SAR'},
          },
          unit: 'per 500g',
          sku: 'SNA606',
        },
        {
          id: 607,
          name: 'Puffed Rice',
          image: 'puffed_rice.png',
          price_range: {
            regular_price: {amount: '120', currency: 'SAR'},
            discount_price: {amount: '110', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA607',
        },
        {
          id: 608,
          name: 'Peanut Butter Crackers',
          image: 'peanut_butter_crackers.png',
          price_range: {
            regular_price: {amount: '320', currency: 'SAR'},
            discount_price: {amount: '300', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA608',
        },
        {
          id: 609,
          name: 'Chocolate Bar',
          image: 'chocolate_bar.png',
          price_range: {
            regular_price: {amount: '280', currency: 'SAR'},
            discount_price: {amount: '260', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'SNA609',
        },
        {
          id: 610,
          name: 'Rice Cakes',
          image: 'rice_cakes.png',
          price_range: {
            regular_price: {amount: '200', currency: 'SAR'},
            discount_price: {amount: '180', currency: 'SAR'},
          },
          unit: 'per pack',
          sku: 'SNA610',
        },
      ],
    },
    {
      id: 7,
      name: 'Frozen Foods',
      products: [
        {
          id: 701,
          name: 'Frozen Peas',
          image: 'frozen_peas.png',
          price_range: {
            regular_price: {amount: '2.5', currency: 'SAR'},
            discount_price: {amount: '2.2', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRO701',
        },
        {
          id: 702,
          name: 'Frozen Corn',
          image: 'frozen_corn.png',
          price_range: {
            regular_price: {amount: '2.8', currency: 'SAR'},
            discount_price: {amount: '2.5', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRO702',
        },
        {
          id: 703,
          name: 'Frozen Berries',
          image: 'frozen_berries.png',
          price_range: {
            regular_price: {amount: '6.0', currency: 'SAR'},
            discount_price: {amount: '5.5', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRO703',
        },
        {
          id: 704,
          name: 'Frozen Pizza',
          image: 'frozen_pizza.png',
          price_range: {
            regular_price: {amount: '5.0', currency: 'SAR'},
            discount_price: {amount: '4.5', currency: 'SAR'},
          },
          unit: 'per piece',
          sku: 'FRO704',
        },
        {
          id: 705,
          name: 'Frozen Fries',
          image: 'frozen_fries.png',
          price_range: {
            regular_price: {amount: '3.5', currency: 'SAR'},
            discount_price: {amount: '3.0', currency: 'SAR'},
          },
          unit: 'per kg',
          sku: 'FRO705',
        },
      ],
    },
  ],
};
