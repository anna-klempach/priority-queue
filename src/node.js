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
            let swapNodeGrandparent = new Node();
            let swapNodeParent = new Node();
            swapNodeGrandparent = this.parent.parent;
            swapNodeParent = this.parent;
            this.parent.parent = this;
            this.parent = swapNodeGrandparent;

            let swapNodeLeft = new Node();
            let swapNodeRight = new Node();


            if (this.left) {
                swapNodeLeft = this.left;
                swapNodeLeft.parent = swapNodeParent;
            }
            
            if (this.right) {
                swapNodeRight = this.right;
                swapNodeRight.parent = swapNodeParent;
            }

            if (this == swapNodeParent.left) {
                this.left = swapNodeParent;
                this.right = swapNodeParent.right;
            }

            if (this == swapNodeParent.right) {
                this.left = swapNodeParent.left;
                this.right = swapNodeParent;
            }

            if (this.left) {
                this.left.parent = this;
            }
            if (this.right) {
                this.right.parent = this; 
            }

            if (swapNodeLeft.parent) {
                swapNodeParent.left = swapNodeLeft;
            }

            if (swapNodeRight.parent) {
                swapNodeParent.right = swapNodeRight;
            }

           if (this.parent) {
               if (this.parent.left == swapNodeParent) {
                this.parent.left = this;
               }

               if (this.parent.right == swapNodeParent) {
                this.parent.right = this;
               }
           }
        }
    }
}

module.exports = Node;