import { Calculator } from "../calculator.js";
import chai from "chai";

var assert = chai.assert;

describe('Calculator', () => {

	let calculator;
	let a, b;

	before(() => {
		calculator = new Calculator();
	});

	beforeEach(() => {

		const max = 10000;
		const min = 0;

		a = Math.floor(Math.random() * (max - min) + min);
		b = Math.floor(Math.random() * (max - min) + min);

	});

	it ('should add two numbers', () => {
		const sum = calculator.add(a, b);
		assert.equal(sum, a + b);
	});

	it ('should subtract two numbers', () => {
		const difference = calculator.minus(a, b);
		assert.equal(difference, a - b);
	});

	it ('should multiply two numbers', () => {
		const product = calculator.multiply(a, b);
		assert.equal(product, a * b);
	});

	it ('should divide two numbers', () => {
		const quotient = calculator.divide(a, b);
		assert.equal(quotient, a / b);
	});
});