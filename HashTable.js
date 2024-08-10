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
        const i = this.hash(key) % this.cap;
        if (i < 0 || i >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        if (this.buckets[i]) {
            if (this.size / this.cap === this.loadFactor) {
                this.cap *= 2;
                const newBuckets = Array(this.cap);
                for (let j = 0; j < this.buckets.length; j++)
                    newBuckets[j] = this.buckets[j]; 
                this.buckets = newBuckets;
            }  
            //must have a collision or update
            let curr = this.buckets[i].head;
            while (curr) {
                if (curr.value[0] === key) {
                    curr.value[1] = value;
                    return;
                } 
                curr = curr.next;
            }   
            console.log(this.buckets[i])
            console.log(key, value)
            console.log(i)
            this.buckets[i].append([key, value]);
            } else {
            this.buckets[i] = new LinkedList();
            this.buckets[i].append([key, value]);
        }

        this.size++;
    }

    has(key) {
        const i = this.hash(key) % this.cap;
            if (this.buckets[i]) {
                let curr = this.buckets[i].head;
                while (curr) {
                    if (curr.value[0] === key)
                        return true;
                    curr = curr.next;
                }
            }
        return false;
    }

    get(key) {
        if (!this.has(key))
            return null;
        const i = this.hash(key) % this.cap;
        if (this.buckets[i]) {
            let curr = this.buckets[i].head;
            while (this.buckets[i]) {
                if (curr.value[0] === key)
                    return curr.value[1];
                curr = curr.next;
            }
        }
    }

    remove(key) {
        const i = this.hash(key) % this.cap;
        for (let j = 0; j < this.buckets[i].size; j++) {
            if (this.buckets[i].at(j).value[0] === key) {
                this.size--;
                this.buckets[i].removeAt(j);
                return true;
            } 

        }
        return false;
    }


    length() {
        return this.size;
    }

    clear() {
        this.size = 0;
        this.cap = 16;
        this.buckets = Array(this.cap);
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let curr = this.buckets[i].head;
                while (curr) {
                    keys.push(curr.value[0]);
                    curr = curr.next;
                }
            }
        }
        return keys;
    }
    
    values() {
        const values = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let curr = this.buckets[i].head;
                while (curr) {
                    values.push(curr.value[1]);
                    curr = curr.next;
                }
            }
        }
        return values;
    }

    entries() {
        const entries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let curr = this.buckets[i].head;
                while (curr) {
                    entries.push(curr.value);
                    curr = curr.next;
                }
            }
        }
        return entries;
    }

}

export {HashTable};