/*eslint-env browser */
/*global QUnit */

"use strict";

QUnit.module("Simplete", {
	beforeEach: assert => {
		this.fixtures = document.getElementById("qunit-fixture");
	}
});

QUnit.test("DOM initialization", assert => {
	let field = createElement(`<input is="simplete-box">`);
	this.fixtures.appendChild(field);

	let wrapper = this.fixtures.children[0];
	assert.strictEqual(wrapper.tagName, "DIV");
	assert.strictEqual(wrapper.className, "simplete");
	let children = wrapper.children;
	assert.strictEqual(children.length, 2);
	assert.strictEqual(children[0], field);
	let results = children[1];
	assert.strictEqual(results.tagName, "DIV");
	assert.strictEqual(results.className, "results");
});

QUnit.test("settings", assert => {
	let field = createElement(`<input is="simplete-box">`);
	assert.deepEqual(field.settings, {
		delay: 250,
		minLength: 3,
		itemSelector: "li",
		selectedClass: "selected"
	});

	field = createElement(`<input is="simplete-box" delay="500"
			item-selector="dt">`);
	assert.deepEqual(field.settings, {
		delay: 500,
		minLength: 3,
		itemSelector: "dt",
		selectedClass: "selected"
	});
});

function createElement(html) {
	let container = document.createElement("div");
	container.innerHTML = html;
	return container.children[0];
}
