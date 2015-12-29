/*eslint-env browser */
/*global HTMLInputElement */

class SimpleteBox extends HTMLInputElement {
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
