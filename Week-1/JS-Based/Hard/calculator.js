class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(number) {
      this.result += number;
    }
  
    subtract(number) {
      this.result -= number;
    }
  
    multiply(number) {
      this.result *= number;
    }
  
    divide(number) {
      if (number === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      this.result /= number;
    }
  
    clear() {
      this.result = 0;
    }
  
    getResult() {
      return this.result;
    }
  
    calculate(expression) {
      // Remove multiple continuous spaces and trim the expression
      const cleanedExpression = expression.replace(/\s+/g, ' ').trim();
  
      // Check for invalid characters
      if (!/^[\d+\-*/().\s]+$/.test(cleanedExpression)) {
        throw new Error("Invalid input.");
      }
  
      // Evaluate the expression using eval (use with caution)
      this.result = eval(cleanedExpression);
    }
  }

  module.exports = Calculator;
  