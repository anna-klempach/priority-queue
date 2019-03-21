const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		let parentNodes = [];
		this.parentNodes = parentNodes;
		let nodesArray = [];
		this.nodesArray = nodesArray;
	}

	push(data, priority) {
	let node = new Node(data, priority);
	this.insertNode(node);
	this.shiftNodeUp(node);
	}

	pop() {
		if (this.root) {
			this.removeChild(node);
			this.nodesArray.splice(this.nodesArray.indexOf(node),1);
		}
		
	}

	detachRoot() {
		let detachedRoot = new Node();
		detachedRoot = this.root;
		if (this.parentNodes.indexOf(detachedRoot) > -1){
			this.parentNodes.shift();
		}
		this.root = null;
		return detachedRoot;	
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		let size = this.nodesArray.length;
		return size;
	}

	isEmpty() {
		if (this.root == null && this.parentNodes.length == 0) {
			return true;
		}
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes.length = 0;
	}

	insertNode(node) {
		
		if (this.root == null && this.parentNodes.length == 0) {
			this.root = node;
			this.parentNodes.push(node);
			this.nodesArray.push(node);

		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			this.nodesArray.push(node);
	
			if (this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
			
		}

	}

	shiftNodeUp(node) {
		while (node.parent && node.priority > node.parent.priority) {
			let indexNode = this.parentNodes.indexOf(node);
			let indexParent = this.parentNodes.indexOf(node.parent);

			if (indexNode >-1 && indexParent > -1) {
				this.parentNodes[indexNode] = node.parent;
				this.parentNodes[indexParent] = node;
			}

			if (indexNode >-1 && indexParent == -1) {
				this.parentNodes[indexNode] = node.parent;
			}

			node.swapWithParent();
			if (node.parent  == this.root && node.priority > node.parent.priority) {	
				indexNode = this.parentNodes.indexOf(node);
				indexParent = this.parentNodes.indexOf(node.parent);
				if (indexNode >-1 && indexParent > -1) {
					this.parentNodes[indexNode] = node.parent;
					this.parentNodes[indexParent] = node;
				}
	
				if (indexNode >-1 && indexParent == -1) {
					this.parentNodes[indexNode] = node.parent;
				}
				node.swapWithParent();
				this.root = node;
				break;
			}
		}	
	}

	shiftNodeDown(node) {
		
		let swapArray = [];
		let maxNode = new Node();
		let initialPriority = node.priority;
		let maxPriority = initialPriority;
		let indexNode;
		let indexParent;
		while (true) {
			maxNode = node;
			if (node.left && node.left.priority > maxPriority) {
				maxNode = node.left;
				maxPriority = node.left.priority;
			}
	
			if (node.right && node.right.priority > maxPriority) {
				maxNode = node.right;
				maxPriority = node.right.priority;
			}

			
			if (maxNode !== node) {
		
				
				swapArray.push(maxNode);
				node = maxNode;
				maxPriority = initialPriority;
			} else break;
		}

		let swapArrayLength = swapArray.length;
		
			for (let i = 0; i < swapArrayLength; i++) {
				
				node = swapArray[i];
				if (this.root === node.parent) {
					this.root = node;
				}
				indexNode = this.parentNodes.indexOf(node);
				indexParent = this.parentNodes.indexOf(node.parent);
				if (indexNode >-1 && indexParent > -1) {
					this.parentNodes[indexNode] = node.parent;
					this.parentNodes[indexParent] = node;
				}
	
				if (indexNode >-1 && indexParent == -1) {
					this.parentNodes[indexNode] = node.parent;
				}
				node.swapWithParent();
		}
	}
}		


module.exports = MaxHeap;
