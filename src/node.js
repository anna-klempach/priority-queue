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
            } else {
                swapNodeLeft = null;
            }
            
            if (this.right) {
                swapNodeRight = this.right;
                swapNodeRight.parent = swapNodeParent;
            } else {
                swapNodeRight = null;
            }

            if (this == swapNodeParent.left) {
                this.left = swapNodeParent;
                if (swapNodeParent.right) {
                    this.right = swapNodeParent.right;
                } else {
                    this.right = null;
                }
                
            }

            if (this == swapNodeParent.right) {
                
                this.right = swapNodeParent;
                if (swapNodeParent.left) {
                    this.left = swapNodeParent.left;
                } else {
                    this.left = null;
                }
                
            }

            if (this.left) {
                this.left.parent = this;
            }
            if (this.right) {
                this.right.parent = this; 
            }

                swapNodeParent.left = swapNodeLeft;

                swapNodeParent.right = swapNodeRight;
            

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