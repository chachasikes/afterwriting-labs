/* global define */
define(function () {

	var operators = {};

	var module = {
		operators: operators
	};

	operators.is = function () {
		var types = Array.prototype.slice.call(arguments);
		return types.indexOf(this.type) != -1;
	};

	operators.is_dialogue = function () {
		return this.is('character', 'parenthetical', 'dialogue');
	};

	operators.name = function () {
		var character = this.text;
		var p = character.indexOf('(');
		if (p != -1) {
			character = character.substring(0, p);
		}
		character = character.trim();
		return character;
	};

	operators.location = function () {
		var location = this.text.trim();
		location = location.replace(/^(INT.?\/.EXT\.?)|(I\/E)|(INT\.?)|(EXT\.?)/, '');
		var dash = location.lastIndexOf(' - ');
		if (dash != -1) {
			location = location.substring(0, dash);
		}
		return location.trim();
	};
	
	operators.has_scene_time = function(time) {
		var suffix = this.text.substring(this.text.indexOf(' - '));
		return this.is('scene_heading') && suffix.indexOf(time) !== -1;
	};

	module.enrich_token = function (token) {
		for (var name in operators) {
			token[name] = operators[name];
		}
		return token;
	};

	var create_token_delegator = function (line, name) {
		return function () {
			return line.token ? line.token[name].apply(line.token, arguments) : null;
		};
	};

	var create_fquery_delegator = function (name) {
		return function () {
			var args = arguments;
			return function (item) {
				return item[name].apply(item, args);
			};
		};
	};

	module.fq = {};
	for (var name in operators) {
		module.fq[name] = create_fquery_delegator(name);
	}

	module.enrich_line = function (line) {
		for (var name in operators) {
			line[name] = create_token_delegator(line, name);
		}
		return line;
	};

	return module;
});