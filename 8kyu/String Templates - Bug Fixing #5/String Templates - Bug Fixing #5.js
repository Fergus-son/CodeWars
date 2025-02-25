function buildString(...template){
    const items = template.length ? template : ['Cheese', 'Milk', 'Chocolate'];
    return `I like ${template.join(', ')}!`;
  }
  
  console.log(buildString())





// Sample Tests


// const assert = require('chai').assert


// describe('Fixed Tests', function(){
//   it('Fixed Tests', function(){
//     assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
//     assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
//     assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
//   })
// });