import {LinkedList} from "./LinkedList.js";
class HashTable {
    constructor() {
        this.cap = 16;
        this.loadFactor = .75;
        this.buckets = Array(this.cap);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
     
    set(key, value) {
        const i = hash(key) % this.cap;
        if (i < 0 || i >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        if (this.buckets[index]) {
            //must have a collision or update
            const isCollision = false;
            let curr = this.buckets[index].head;
            while (curr) {
                if (curr.value[0] === key) {
                    curr.value[1] = value;
                    isCollision = true;
                } 
                curr = curr.next;
            }     
            if (!isCollision) {
                curr[index].append([key, value]);
            }      
        } else {
            this.buckets[index] = LinkedList();
            this.buckets[index].append([key, value]);
        }

        this.size++;
    }

    has(key) {
        const i = this.hash(key) % this.cap;
            if (i) {
                let curr = i.head;
                while (i) {
                    if (curr.value[0] === key)
                        return true;
                }
            }
        return false;
    }

    get(key) {
        if (!this.has(key))
            return null;
        const i = this.hash(key) % this.cap;
        if (i) {
            let curr = i.head;
            while (i) {
                if (curr.value[0] === key)
                    return curr.value[1];
            }
        }
    }
}