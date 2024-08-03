import { LinkedList } from "./LinkedList.js";
// const list = new LinkedList();

// list.append("dog");
// console.log(list.toString());
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.toString());

// testLinkedList.js
import { Node } from './Node.js'; // Ensure this import is correct

// Utility function to check if the test passed or failed
function assert(condition, message) {
    if (!condition) {
        console.error(`Test failed: ${message}`);
    } else {
        console.log(`Test passed: ${message}`);
    }
}

// Test Suite
function testLinkedList() {
    let list;

    // Initialize before each test
    function setup() {
        list = new LinkedList();
    }

    // Test 1: List starts empty
    setup();
    assert(list.size === 0, 'List should start with size 0');
    assert(list.head === null, 'Head should be null');
    assert(list.tail === null, 'Tail should be null');

    // Test 2: Append elements
    setup();
    list.append('dog');
    list.append('cat');
    assert(list.size === 2, 'Size should be 2 after appending two elements');
    assert(list.head.value === 'dog', 'Head value should be "dog"');
    assert(list.tail.value === 'cat', 'Tail value should be "cat"');

    // Test 3: Prepend elements
    setup();
    list.append('dog');
    list.prepend('cat');
    assert(list.size === 2, 'Size should be 2 after prepending one element');
    assert(list.head.value === 'cat', 'Head value should be "cat"');
    assert(list.tail.value === 'dog', 'Tail value should be "dog"');

    // Test 4: Access node at index
    setup();
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    console.log(list.toString());
    assert(list.at(0).value === 'dog', 'Value at index 0 should be "dog"');
    assert(list.at(1).value === 'cat', 'Value at index 1 should be "cat"');
    assert(list.at(2).value === 'parrot', 'Value at index 2 should be "parrot"');

    // Test 5: Out of bounds index
    setup();
    list.append('dog');
    try {
        list.at(1); // Valid index
        list.at(2); // Valid index
        list.at(3); // Invalid index
        assert(false, 'Should throw an error for index out of bounds');
    } catch (e) {
        assert(e.message === 'Index exceeds size of list', 'Error message should be "Index exceeds size of list"');
    }

    // Test 6: Pop element
    setup();
    list.append('dog');
    list.append('cat');
    list.pop();
    assert(list.size === 1, 'Size should be 1 after popping one element');
    assert(list.tail.value === 'dog', 'Tail value should be "dog"');

    // Test 7: Pop from empty list
    setup();
    try {
        list.pop(); // Empty list
        list.pop(); // Should throw error
        assert(false, 'Should throw an error for popping from an empty list');
    } catch (e) {
        assert(e.message === "Can't pop from empty list", 'Error message should be "Can\'t pop from empty list"');
    }

    // Test 8: Contains method
    setup();
    list.append('dog');
    list.append('cat');
    assert(list.contains('dog') === true, 'List should contain "dog"');
    assert(list.contains('cat') === true, 'List should contain "cat"');
    assert(list.contains('parrot') === false, 'List should not contain "parrot"');

    // Test 9: Find method
    setup();
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    assert(list.find('dog') === 0, 'Index of "dog" should be 0');
    assert(list.find('cat') === 1, 'Index of "cat" should be 1');
    assert(list.find('parrot') === 2, 'Index of "parrot" should be 2');
    assert(list.find('snake') === null, 'Index of "snake" should be null');

    // Test 10: toString method
    setup();
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    assert(list.toString() === '( dog ) -> ( cat ) -> ( parrot ) -> null', 'String representation of list should be correct');
}

// Run the test suite
testLinkedList();
