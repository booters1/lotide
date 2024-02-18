const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly', () => {
  describe('Basic functionality', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    
    it('should count "Jason" correctly', () => {
      assert.strictEqual(result1["Jason"], 1);
    });
    
    it('should return undefined for "Karima"', () => {
      assert.strictEqual(result1["Karima"], undefined);
    });
    
    it('should count "Fang" correctly', () => {
      assert.strictEqual(result1["Fang"], 2);
    });
    
    it('should return undefined for "Agouhanna"', () => {
      assert.strictEqual(result1["Agouhanna"], undefined);
    });
  });
});
/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/