export class hashMap { 
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor; 
        this.capacity = capacity; 
        this.size = 0;
        this.bucket = new Array(capacity).fill(null).map(() => [])
        this.changeNum = this.capacity * this.loadFactor;

    }
    
    getHashCode(key) { 
        let hashCode = 0; 
        const primeNumber = 31; 
        for(let i = 0; i < key.length; i++){
            hashCode = hashCode * primeNumber + key.charCodeAt(i);
        }
        return Math.abs(hashCode) % this.capacity;
    }

    resize() { 
        let newCapacity = this.capacity * 2;
        let newBucket = new Array (newCapacity).fill(null).map(() => []);

        for(let i = 0; i < this.bucket.length; i++) { 
                for(const [key, value] of this.bucket[i]) { 
                    const newIndex = this.getHashCode(key);
                    newBucket[newIndex].push([key, value])
            }
        }

        this.capacity = newCapacity;
        this.bucket = newBucket;
    }

    set(key, value) { 
        if(!this.bucket) return null; 

        let index = this.getHashCode(key); 
        let bucket = this.bucket[index]; 
        
        for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key) { 
                    bucket[i][1] = value;
                    return;
             }
        }

        bucket.push([key , value]);
        this.size++
        
        if(this.size >= this.changeNum){
            this.resize(bucket)
            this.changeNum = this.capacity * this.loadFactor
        }
    }

    get(key) { 
        if(!this.bucket) return null; 

        let index = this.getHashCode(key); 
        let bucket = this.bucket[index];
        
        for(let i = 0; i < bucket.length; i++) {
            const newIndex = this.getHashCode(bucket[i][0]);
            const newValue = bucket[i][1];
            if(newIndex === key) { 
                return newValue;
             }
       }
       return null; 
    }

    has(key) {
        if(!this.bucket) return null;

        let index = this.getHashCode(key);
        let bucket = this.bucket[index]; 
        
        for(let i = 0; i < bucket.length; i++) { 
            const newIndex = this.getHashCode(bucket[i][0]);
            if(bucket[i][0] == key){
                return true;
            }
        }
        return false; 
    }
    
    remove(key) { 
        if(!this.bucket) return null;

        let index = this.getHashCode(key);
        let bucket = this.bucket[index];

        for(let i = 0; i < bucket.length; i++) {
            const newIndex = this.getHashCode(bucket[i][0]);
            if(newIndex == index) {
                bucket[i] = []
                this.size --
                return true
            }else{
                return false
            }
        }
    }

    length() {
        return this.size;
    }

    clear() {
        if(!this.bucket) return null; 

        for(let i = 0; i < this.bucket.length; i++) {
            if(!this.bucket[i] == []) {
                this.bucket[i] = [];
                this.size = 0;
            }
    
        }
        return this.bucket;
    }

    keys() {
        if(!this.bucket) return null;

        for(let i = 0; i < this.bucket.length; i++) {
            for(const [key, value] of this.bucket[i]) {
                console.log(`Key: ${key}`);
            }
        }
    }

    values() { 
        if(!this.bucket) return null;

        for(let i = 0; i < this.bucket.length; i++) {
            for(const [key, value] of this.bucket[i]) {
                console.log(`Value: ${value}`);
            }
        }
    }

    entries() { 
        if(!this.bucket) return null;
        
        for(let i = 0; i < this.bucket.length; i++) {
            for(const [key, value] of this.bucket[i]) {
                console.log(`Key: ${key} | Value: ${value}`)
            }
        }
    }
}






