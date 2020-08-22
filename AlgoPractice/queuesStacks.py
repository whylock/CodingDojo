class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        # create new node
        newNode = Node(value)
        # check if queue is empty, if its empty-> set self.head and tail to point to it
        if self.head is None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = self.tail.next

        return self

    def dequeue(self):
        if self.head is None:
            print("nothing to remove fam")
        else:
            valtoreturn = self.head.value
            self.head = self.head.next
            if self.head is None:
                self.tail = None
        return valtoreturn

    def size(self):
        runner = self.head
        count = 0
        while runner is not None:
            count += 1
            runner = runner.next
        # print(count)
        return count

    def display(self):
        runner = self.head
        # print(runner.next.next.next)
        while runner is not None:
            print(runner.value)
            runner = runner.next
        print(runner)
        return self

    def contains(self, val):
        # if self.head == None:
        #     return False
        runner = self.head
        while runner is not None:
            if runner.value == val:
                return True
            runner = runner.next
        return False

# *************************
#     START OF STACK
# *************************


class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        # create a new node
        newNode = Node(value)
        if self.top is None:
            self.top = newNode
        else:
            newNode.next = self.top
            self.top = newNode
        return self

    def pop(self):
        if self.top is None:
            print('nothing to pop doc')
            return self
        else:
            valToReturn = self.top.value
            self.top = self.top.next
        return valToReturn

    def size(self):
        runner = self.top
        count = 0
        while runner is not None:
            count += 1
            runner = runner.next
        # print(count)
        return count

    def display(self):
        runner = self.top
        # print(runner.next.next.next)
        while runner is not None:
            print(runner.value)
            runner = runner.next
        print(runner)


'''
“ Queue: Is Palindrome
Given a Queue, return true if its values are a palindrome
(if they are same in reverse order), else return false.
Restore Queue to original state before exiting.
For storage, use one additional Stack”
ExcerptFrom: MartinPuryear. “ AlgorithmChallenges: E - book for DojoStudents. ” iBooks.
'''


'''
“Given a Stack, create a new second Stack and copy values from first Stack into second Stack,
so they pop in same order. Use only one Queue for additional storage”

Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.
'''
s1 = Stack()
s1.push(5).push(6).push(7).push(8)


def copyStack(stackInput):
    stk = Stack()
    print('-' * 40)
    stackInput.display()
    print('-' * 40)
    q2 = Queue()
    length = stackInput.size()
    for i in range(length):
        t = stackInput.pop()
        stk.push(t)
    #     q2.enqueue(stk.pop())
    # print('-' * 40)
    # q2.display()
    # print('-' * 40)
    # length2 = q2.size()
    # for j in range(length2):
    #     stk.push(q2.dequeue())
    print('-' * 40)
    stk.display()
    print('-' * 40)


copyStack(s1)


# q1 = Queue()

# q1.enqueue('h').enqueue('a').enqueue('n').enqueue('n').enqueue('a').enqueue('h')


# def palindrome(queueInput):
#     stk = Stack()
#     length = queueInput.size()
#     for i in range(length):
#         t = queueInput.dequeue()
#         queueInput.enqueue(t)
#         stk.push(t)
#     # print('-' * 40)
#     # stk.display()
#     # queueInput.display()
#     # print('-' * 40)
#     rnr = queueInput.head
#     rnr2 = stk.top
#     while rnr is not None:
#         if rnr.value is not rnr2.value:
#             print(False)
#             return False
#         rnr = rnr.next
#         rnr2 = rnr2.next
#     print(True)
