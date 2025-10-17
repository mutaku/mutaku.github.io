---
draft: false
date: 2020-11-13
categories:
  - Technology
  - Data Science
authors:
  - matthew
---

# Python Generators and Comprehension

Digging into generators and comprehension - from basics to implementation in a comprehensive tutorial. This is a walkthrough for beginners that will build up to real world examples.

!!! info "Draft Status"
    This is an in-progress draft that continues to be updated with additional examples and use cases.

<!-- more -->

## Building Collections with Comprehension

Here we'll build a dictionary of items for examples. Let's make it keyed on alphabetical characters and random integers.

**The algorithm**: Do something 20 times so we can have 20 items as (key, value). For each of the 20 iterations, choose a random lowercase alphabetical character as string and a positive integer up to 100.

```python
import numpy as np
import string

alpha = list(string.ascii_lowercase)
collection = {
    np.random.choice(alpha): np.random.randint(100)
    for _ in range(20)
}
collection
```

```python
{'i': 15, 'u': 14, 'h': 74, 'x': 93, 'r': 0, 'd': 64, 'v': 31,
 'k': 17, 'm': 93, 'p': 18, 'l': 80, 'o': 31, 'c': 48, 'q': 45,
 'b': 55, 's': 40, 't': 53}
```

We did this through **dictionary comprehension** where we build a dictionary object on the fly. You can spot these comprehension methods by iteration code within `{}` or `[]` for dictionary or list comprehension, respectively.

### Understanding the Comprehension

Building our dictionary collection, we iterate over `range(20)` so we will have 20 key:value pairs. Since we are not using the number yielded from the `range` function, we use the python internal reference variable name `_` to indicate that we are not utilizing this variable.

For each iteration:

- We randomly sample `alpha` using `numpy.random.choice`
- Our value is assigned by randomly selecting an integer up to 100 with `numpy.random.randint`
- Key:value pairs are created with `key: value` syntax within `{}`

## Working with Collections

Now let's demonstrate operations with our `collection` dictionary:

```python
from collections import Counter

value_counts = Counter(collection.values())
value_counts.most_common()
```

```python
[(93, 2), (31, 2), (15, 1), (14, 1), (74, 1), (0, 1), (64, 1),
 (17, 1), (18, 1), (80, 1), (48, 1), (45, 1), (55, 1), (40, 1), (53, 1)]
```

`collections.Counter` allows us to feed it an array of data and have it tabulate occurrences. We call the `most_common` function to sort the counts descending by occurrence.

### Manual Implementation

This is equivalent to doing:

```python
value_counts = {}
for val in collection.values():
    value_counts[val] = value_counts.get(val, 0) + 1

sorted(value_counts.items(), key=lambda count: count[1], reverse=True)
```

## Conditional Selection with Comprehensions

Let's find all keys whose value is greater than 40:

```python
gt40keys = [
    k for (k, v) in collection.items()
    if v > 40
]
gt40keys
```

```python
['h', 'x', 'd', 'm', 'l', 'c', 'q', 'b', 't']
```

That used **list comprehension** to iterate through key:value pairs and collect the key if the value is > 40.

### Creating Filtered Dictionaries

We can create a new dictionary of only those key:value pairs matching our condition:

```python
gt40collection = {
    k: v for (k, v) in collection.items()
    if v > 40
}
gt40collection
```

```python
{'h': 74, 'x': 93, 'd': 64, 'm': 93, 'l': 80, 'c': 48, 'q': 45, 'b': 55, 't': 53}
```

## Generators vs Lists: Memory Efficiency

### The Problem with Large Data

What if we want to search for a value but don't want to load everything into memory? Let's create a generator-based version:

```python
def list_building(n=10):
    """Generate a list of size 10"""
    created_array = []
    for i in range(n):
        created_array.append(i)
    return created_array

def generator_list_building(n=10):
    for i in range(n):
        yield i

complete_list = list_building(10)
print(f'{complete_list=} is {type(complete_list)=}')

iterable_list = generator_list_building(10)
print(f'{iterable_list=} is {type(iterable_list)=}')
```

```text
complete_list=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] is type(complete_list)=<class 'list'>
iterable_list=<generator object generator_list_building at 0x7f8f315e9f90> is type(iterable_list)=<class 'generator'>
```

### Generator Comprehensions

You can create generators using comprehension syntax with parentheses:

```python
comprehension_based_complete_list = [
    i for i in range(10)  # List comprehension
]

comprehension_based_iterable_list = (
    i for i in range(10)  # Generator comprehension
)

print(f'{type(comprehension_based_complete_list)=}')
print(f'{type(comprehension_based_iterable_list)=}')
```

## Advanced Generator Usage: Efficient Searching

Let's use generators for memory-efficient searching:

```python
found = []
for (i, (k, v)) in enumerate(collection.items()):
    if v == 93:
        print(f'Found a 93 on loop {i=} for {k=}')
        found.append(k)

    if len(found) == 2:
        break

print(f'Collection has {len(collection)=} items, searched through {i+1} pairs')
```

This approach only loads one key:value pair at a time, similar to inspecting fruit at a market - you examine one piece at a time rather than loading all fruit into your arms.

### Error Handling with Generators

Always handle `StopIteration` when working with generators:

```python
collections_generator = iter(collection.items())

found = []
while len(found) < 2:
    try:
        k, v = next(collections_generator)
        if v == 53:  # Value that occurs only once
            print(f'Found a 53 for {k=}')
            found.append(k)
    except StopIteration:
        print('We ran out of data to search')
        break  # CRITICAL: Must break to avoid infinite loop

found
```

## Real-World Example: User Management

Let's create a practical example with user objects:

```python
class User:
    def __init__(self, name, age, active=True):
        self.name = name
        self.age = age
        self.active = active

    def toggle_active(self):
        self.active = not self.active
        return True

    def __repr__(self):
        return f'<User> {self.name=} | {self.age=} | {self.active=}'

# Create users with comprehension
user_names = ['Patrick', 'Matthew', 'Linux Admin', 'Operating Doctor', 'Data Scientist']
users = [
    User(name=name, age=np.random.randint(80))
    for name in user_names
]
```

### Conditional Operations on Collections

Toggle inactive status for users under 18:

```python
for user in users:
    if user.age < 18:
        user.toggle_active()
```

### Memory-Efficient Patient Processing

Use generators for memory-intensive operations:

```python
users_iter = iter(users)
max_capacity = 2
intensive_care_patients = []

while len(intensive_care_patients) < max_capacity:
    try:
        patient = next(users_iter)
        if patient.age > 30:
            intensive_care_patients.append(patient.name)
    except StopIteration:
        print('We still have capacity!')
        break

intensive_care_patients
```

## Key Takeaways

### When to Use Generators

- **Large datasets**: When working with data larger than available memory
- **Streaming data**: Processing data as it arrives
- **Early termination**: When you might not need all results
- **Memory constraints**: In resource-limited environments

### When to Use Lists

- **Small datasets**: When data easily fits in memory
- **Random access**: When you need to access elements by index
- **Multiple iterations**: When you'll iterate over the same data multiple times
- **Simple operations**: When the complexity of generators isn't justified

### Performance Considerations

1. **Memory usage**: Generators use constant memory, lists grow with data size
2. **Speed**: Lists are faster for small datasets, generators better for large ones
3. **One-time use**: Generators are consumed after iteration, lists are reusable
4. **Debugging**: Lists show all data, generators require iteration to inspect

**The rule of thumb**: Use generators for large data processing and when memory efficiency matters. Use lists for small collections and when you need multiple passes through the data.

---

*This tutorial demonstrates the power of Python's generator and comprehension features for writing efficient, readable code that scales with your data processing needs.*
