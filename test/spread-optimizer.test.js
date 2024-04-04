const assert = require('assert').strict;

try {
  global.BattlePokedex = require('../play.pokemonshowdown.com/data/pokedex.js').BattlePokedex;
} catch (err) {}
require('../play.pokemonshowdown.com/js/battle-dex-data.js');
require('../play.pokemonshowdown.com/js/battle-dex.js');
require('../play.pokemonshowdown.com/js/battle-tooltips.js');

describe('Spread Optimizer', () => {

	(global.BattlePokedex ? it : it.skip)('should optimize correctly', () => {
		const garchomp = BattleStatOptimizer({
			species: 'garchomp', level: 100, nature: 'Careful', evs: {hp: 248, spd: 80, spe: 180}
		}, 'gen9ou');
		assert.deepStrictEqual(garchomp, {evs: {hp: 248, spd: 168, spe: 80}, plus: 'spe', minus: 'spa', savedEVs: 12});
		const amoonguss = BattleStatOptimizer({
			species: 'amoonguss', level: 50, nature: 'Relaxed', evs: {hp: 252, def: 100, spd: 156}
		}, 'gen9ou');
		assert.deepStrictEqual(amoonguss, {evs: {hp: 252, def: 180, spd: 76}, plus: 'spd', minus: 'spe', savedEVs: 0});
		const trapinch = BattleStatOptimizer({
			species: 'trapinch', level: 100, nature: 'Lax', evs: {hp: 204, atk: 252, def: 52}
		}, 'gen9ou');
		assert.deepStrictEqual(trapinch, {evs: {hp: 204, atk: 144, def: 104}, plus: 'atk', minus: 'spd', savedEVs: 56});
		const avalugg = BattleStatOptimizer({
			species: 'avalugg', level: 100, nature: 'Hasty', evs: {hp: 56, atk: 200, def: 252}
		}, 'gen9ou');
		assert.deepStrictEqual(avalugg, {evs: {hp: 56, atk: 84, def: 64, spe: 84}, plus: 'atk', minus: 'spe', savedEVs: 220});
	});

});
