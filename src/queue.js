const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		maxSize ? this.maxSize = maxSize : this.maxSize = 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {

		this.heap.push(data, priority);
		if (this.heap.size() > this.maxSize) {
			throw error;
		}
	}

	shift() {

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty()) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = PriorityQueue;
