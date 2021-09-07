next = {}
s = "Welcome to cs 477"

# This loops through all of the characters in s
# and keeps track of their indices
for i, c in enumerate(s): 
    if not c in next:
        # If this is the first time seeing a particular 
        # character, we need to make a new key/value pair for it
        next[c] = []
    if i < len(s)-1: # If there is a character after this
        # Record that s[i+1] is one of the following characters
        next[c].append(s[i+1]) 

for c in next:
    print(c, ":", next[c])

max_chars = len(s)
c = "W"
s = ""
for i in range(max_chars):
    s += c
    c = next[c][np.random.randint(len(next[c]))]
print(s)