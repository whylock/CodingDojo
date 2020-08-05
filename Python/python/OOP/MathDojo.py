class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, n, *nums):
        self.result += n
        for i in nums:
            self.result += i
        return self
    def subtract(self, n, *nums):
        self.result -= n
        for i in nums:
            self.result -= i
        return self

md = MathDojo()

x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)

