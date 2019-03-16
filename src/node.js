class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;

        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        node.parent = this;
        if (!this.left) {
            this.left = node;
        } else {
            if (!this.right) {
                this.right = node;
            }
        }
    }

    removeChild(node) {
        if (this.left == node) {
            node.parent = null;
            this.left = null;
        } else {
            if (this.right == node) {
                node.parent = null;
                this.right = null;
            } else {
                throw error;
            }
        }
    }

    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    swapWithParent() {
        if (this.parent) {
            let swapNode = new Node();
            let grandParent = new Node();
            grandParent = this.parent.parent;

            let parent = new Node();
            parent = this.parent;

            let child = new Node();
            child = this;

            if (parent == grandParent.left) {
                grandParent.left = child;

            } else {
                grandParent.right = child;
            }

            child.parent = grandParent;
            parent.parent = child;

            if (child == parent.left) {
                child.left = parent;
                child.right = parent.right;

            } else {
                child.left = parent.left;
                child.right = parent;
            }
            child.left.parent = this.parent;
            child.right.parent = this.parent;
            parent.left = child.left;
            parent.right = child.right;

            this.parent.parent.left = grandParent.left;
            this.parent.parent.right = grandParent.right;
            this.parent.left = parent.left;
            this.parent.right = parent.right;
            this.parent.parent = parent.parent;
            this.left = child.left;
            this.right = child.right;
            this.parent = child.parent;
        }
    }
}

module.exports = Node;