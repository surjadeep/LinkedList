/**
 * @name: Linked List
 * @author: Surjadeep Banerjee (study.surja@gmail.com)
 * @update: 11-July-17
 */
var SinglyLinkedList = function() {
	this.head = null;
	this.length = 0;
	
	var Node = function(data) {
		this.data = data;
		this.next = null;
	}
	this.add = function(data) {
		var node = new Node(data),
			currentNode = this.head;
		if (!this.head) {
			this.head = node;
			return this.head;
		}
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
		return this.head;
	}
}