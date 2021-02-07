/* global describe, it, expect */

const Strategy = require('../lib/strategy');

describe('Strategy', () => {
	const strategy = new Strategy();

	it('authenticate should throw error', () => {
		expect(() => {
			strategy.authenticate();
		}).to.throw(Error, 'Strategy#authenticate must be overridden by subclass');
	});
});
