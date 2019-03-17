const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		let parentNodes = [];
		this.parentNodes = parentNodes;
	}

	push(data, priority) {
	let node = new Node(data, priority);
	this.insertNode(node);
	this.shiftNodeUp(node);
	}

	pop() {
		if (this.root) {
			this.removeChild(node);
		}
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if (this.root == null && this.parentNodes.length == 0) {
			return true;
		}
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root == null && this.parentNodes.length == 0) {
			this.root = node;
			this.parentNodes.push(node);

		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
	
			if (this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
			
		}
	}

	shiftNodeUp(node) {

		
			node.shiftWithParent();
		
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
