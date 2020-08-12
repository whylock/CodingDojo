
# Function should accept a value
# create a new node
# if no head attribute set the head
# otherwise


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def append(self, value):
        # create a node with the value passed
        newnode = Node(value)
        if self.head is None:
            # add the new node to the SLL
            self.head = newnode
        else:
            runner = self.head
            # increment runner until we get runner to a node where the node's .next is none (the last node)
            while runner.next is not None:
                # increment runner by one node
                runner = runner.next
            runner.next = newnode
        return self

    def display(self):
        runner = self.head
        # print(runner.next.next.next)
        while runner is not None:
            print(runner.value)
            runner = runner.next
        print(runner)

    def removeFront(self):
        # print(self.head)
        # print(self.head.next)
        self.head = self.head.next

    def addFront(self, val):
        newNode = Node(val)
        if (self.head is None):
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        return self

    def removeLast(self):
        runner = self.head
        while runner.next is not None:
            if runner.next.next is None:
                runner.next = None
                return self
            else:
                runner = runner.next


newSll = SLL()
newSll.addFront(10).addFront(10).addFront(10).addFront(10).addFront(10).addFront(10).display().removeBack().display()
