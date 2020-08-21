class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        # create a node with the value passed
        newnode = Node(value)
        if self.top is None:
            # add the new node to the stack
            self.top = newnode
        else:
            temp = self.top
            self.top = newnode
            newnode.next = temp
        return self

    def display(self):
        runner = self.top
        while runner is not None:
            print(runner.value)
            runner = runner.next
        return self

    def pop(self):
        self.top = self.top.next
        return self

    def size(self):
        runner = self.top
        count = 0
        while runner is not None:
            count += 1
            runner = runner.next
        print(count)
        return count


stk1 = Stack()
stk1.push(5).push(8).push(3).display()
stk1.pop()
print('************')
stk1.size()
print('*************')
stk1.display()
