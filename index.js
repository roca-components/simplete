/*eslint-env browser */
/*global HTMLInputElement */

const DEFAULTS = {
	delay: 250,
	minLength: 3,
	itemSelector: "li",
	selectedClass: "selected"
};

class SimpleteBox extends HTMLInputElement {
	createdCallback() {
		// parse settings from DOM
		this.settings = {};
		this.getSetting("delay", "delay", "integer");
		this.getSetting("min-length", "minLength", "integer");
		this.getSetting("item-selector", "itemSelector");
		this.getSetting("selected-class", "selectedClass");
	}

	attachedCallback() {
		if(this.wrapper) { // ignore second invocation (due to DOM manipulation below)
			return;
		}

		// add wrapper
		let container = this.wrapper = createElement("div", "simplete");
		this.parentNode.insertBefore(container, this);
		container.appendChild(this);
		// add results container
		let results = createElement("div", "results");
		container.appendChild(results);
	}

	getSetting(attr, name, type) {
		let value = this.getAttribute(attr);
		if(!value) {
			value = DEFAULTS[name];
		} else if(type === "integer") {
			value = parseInt(value, 10);
		}
		this.settings[name] = value;
	}
}

document.registerElement("simplete-box", {
	prototype: SimpleteBox.prototype,
	extends: "input"
});

function createElement(tag, cls) {
	let node = document.createElement(tag);
	node.className = cls;
	return node;
}
