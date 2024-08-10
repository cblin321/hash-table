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
// testLinkedList();


import { HashTable } from './HashTable.js'; // Make sure the path is correct

function runTests() {
    const hashTable = new HashTable();

    // Test: Setting and Getting a value
    hashTable.set("key1", "value1");
    if (hashTable.get("key1") !== "value1") {
        console.error("Failed: 'key1' should return 'value1'");
    } else {
        console.log("Passed: Setting and Getting 'key1'");
    }

    // Test: Updating a value
    hashTable.set("key1", "newValue1");
    if (hashTable.get("key1") !== "newValue1") {
        console.error("Failed: 'key1' should return 'newValue1' after update");
    } else {
        console.log("Passed: Updating 'key1'");
    }

    // Test: Checking existence of a key
    if (!hashTable.has("key1")) {
        console.error("Failed: 'key1' should exist in the hash table");
    } else {
        console.log("Passed: Existence of 'key1'");
    }

    if (hashTable.has("key2")) {
        console.error("Failed: 'key2' should not exist in the hash table");
    } else {
        console.log("Passed: Non-existence of 'key2'");
    }

    // Test: Removing a key
    hashTable.remove("key1");
    if (hashTable.has("key1")) {
        console.error("Failed: 'key1' should be removed from the hash table");
    } else {
        console.log("Passed: Removing 'key1'");
    }

    if (hashTable.get("key1") !== null) {
        console.error("Failed: 'key1' should return null after removal");
    } else {
        console.log("Passed: Getting 'key1' after removal");
    }

    // Test: Length of the hash table
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");
    if (hashTable.length() !== 2) {
        console.error("Failed: Hash table should have length 2");
    } else {
        console.log("Passed: Length of the hash table");
    }

    // Test: Clearing the hash table
    hashTable.clear();
    if (hashTable.length() !== 0) {
        console.error("Failed: Hash table should be empty after clear");
    } else {
        console.log("Passed: Clearing the hash table");
    }
}

// Run the tests
// runTests();

function testEntries() {
    const hashTable = new HashTable();
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");

    const entries = hashTable.entries();
    const expectedEntries = [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"]
    ];

    let passed = true;
    for (const entry of expectedEntries) {
        if (!entries.some(e => e[0] === entry[0] && e[1] === entry[1])) {
            passed = false;
            console.error(`Failed: Entry [${entry[0]}, ${entry[1]}] is missing`);
        }
    }

    if (entries.length !== expectedEntries.length) {
        passed = false;
        console.error("Failed: Entries count does not match expected count");
    }

    if (passed) {
        console.log("Passed: Entries method");
    }
}

// Run the test for entries method
testEntries();


function testValues() {
    const hashTable = new HashTable();
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");

    const values = hashTable.values();
    const expectedValues = ["value1", "value2", "value3"];

    let passed = true;
    for (const value of expectedValues) {
        if (!values.includes(value)) {
            passed = false;
            console.error(`Failed: Value '${value}' is missing`);
        }
    }

    if (values.length !== expectedValues.length) {
        passed = false;
        console.error("Failed: Values count does not match expected count");
    }

    if (passed) {
        console.log("Passed: Values method");
    }
}

// Run the test for values method
testValues();


function testKeys() {
    const hashTable = new HashTable();
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");

    const keys = hashTable.keys();
    const expectedKeys = ["key1", "key2", "key3"];

    let passed = true;
    for (const key of expectedKeys) {
        if (!keys.includes(key)) {
            passed = false;
            console.error(`Failed: Key '${key}' is missing`);
        }
    }

    if (keys.length !== expectedKeys.length) {
        passed = false;
        console.error("Failed: Keys count does not match expected count");
    }

    if (passed) {
        console.log("Passed: Keys method");
    }
}

// Run the test for keys method
testKeys();


