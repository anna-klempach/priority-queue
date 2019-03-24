const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		let parentNodes = [];
		this.parentNodes = parentNodes;
		this.queueLength = 0;
		
	}

	push(data, priority) {
	let node = new Node(data, priority);
	this.insertNode(node);
	this.shiftNodeUp(node);
	this.queueLength++;
	}

	pop() {
		if (this.root !== null) {
			let rootNode = this.detachRoot();
			if (this.parentNodes.length > 0) {
				this.restoreRootFromLastInsertedNode(rootNode);
				let newRootNode = this.root;
				this.shiftNodeDown(newRootNode);
			}
			this.queueLength--;
			return rootNode.data;
			
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
		
		
			let restoreNode = new Node();
			restoreNode = this.parentNodes.pop();
			this.root = restoreNode;
	
			if (restoreNode.parent !== detached && restoreNode.parent) {
				if(restoreNode === restoreNode.parent.left) {
					restoreNode.parent.left = null;
				} 
				if (restoreNode === restoreNode.parent.right){
					restoreNode.parent.right = null;
					this.parentNodes.unshift(restoreNode.parent);
				}	
			}
			restoreNode.parent = null;
			
			if(detached.left !== restoreNode) {
				restoreNode.left = detached.left;
				if(restoreNode.left) {
					restoreNode.left.parent = restoreNode;
				}
				
			} else {
				restoreNode.left = null;
				this.parentNodes.push(restoreNode);
			}
			
			if (detached.right && detached.right !==restoreNode){
				restoreNode.right = detached.right;
				if (restoreNode.right) {
					restoreNode.right.parent = restoreNode;
				}
				
			} else if (detached.right === restoreNode){
				restoreNode.right = null;
				this.parentNodes.unshift(restoreNode);
			}
		
		
	
	}

	size() {
		return this.queueLength;
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
		this.queueLength = 0;
	}

	insertNode(node) {
		
		if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
			
		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			
			
		}
		if (this.parentNodes[0].left && this.parentNodes[0].right) {
			this.parentNodes.shift();
		}

	}

	shiftNodeUp(node) {
		if(!node.parent || node.priority <= node.parent.priority) {
			return;
		}
		if (node.parent && node.priority > node.parent.priority) {
			let indexNode = this.parentNodes.indexOf(node);
			let indexParent = this.parentNodes.indexOf(node.parent);

			if (indexNode >-1 && indexParent > -1) {
				this.parentNodes[indexNode] = node.parent;
				this.parentNodes[indexParent] = node;
			}

			if (indexNode >-1 && indexParent == -1) {
				this.parentNodes[indexNode] = node.parent;
			}
			if(node.parent === this.root) {
				this.root = node;
			}

			node.swapWithParent();
			this.shiftNodeUp(node);
			
		}	
	}

	shiftNodeDown(node) {
		if (!node.left) {
			return;
		}
		let maxNode = node;
		let maxPriority = node.priority;
		let indexNode;
		let indexMax;
			if (node.left && node.left.priority > maxPriority) {
				maxNode = node.left;
				maxPriority = node.left.priority;
			}
	
			if (node.right && node.right.priority > maxPriority) {
				maxNode = node.right;
				maxPriority = node.right.priority;
			}
			
			if (maxNode !== node) {	
				if (this.root === node) {
					this.root = maxNode;
				}
				indexNode = this.parentNodes.indexOf(node);
				indexMax = this.parentNodes.indexOf(maxNode);
				if (indexNode >-1 && indexMax > -1) {
					this.parentNodes[indexNode] = maxNode;
					this.parentNodes[indexMax] = node;
				}
	
				if (indexMax >-1 && indexNode == -1) {
					this.parentNodes[indexMax] = node;
				}
				maxNode.swapWithParent();
				
					this.shiftNodeDown(node);
				
			} else {
				return;
			}
	}
}		


module.exports = MaxHeap;
