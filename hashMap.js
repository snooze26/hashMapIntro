export class hashMap { 
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor; 
        this.capacity = capacity; 
        this.size = 0;
        this.bucket = new Array(capacity).fill(null).map(() => [])

    }
    
    getHashCode(key) { 
        let hashCode = 0; 
        const primeNumber = 31; 
        for(let i = 0; i < key.length; i++){
            hashCode = hashCode * primeNumber + key.charCodeAt(i);
        }
        return Math.abs(hashCode) % this.capacity;
    }

    // set(key, value) { 
    //     if(!this.bucket) return null; 
    //     let index = this.getHashCode(key); 
    //     let bucket = this.bucket; 
        
    //     for(let i = 0; i < bucket.length; i++){
    //             if(bucket[i][0] === key) { 
    //                 bucket[i][1] = value;
    //                 return bucket[i][1];
    //             }else {
    //                 bucket.push({key , value});
    //                 this.size++
    //             }
    //             if(this.size >= 12) return console.log("Time to update size");
    //             return bucket; 
    //     }
    // }
}

