let arr = [9, 10, 8, 7, 6, 4, 3, 0, 2, 12, 1]

//алгоритмы 
function findSmallest(arr) {
    var smallest = arr[0]
    var smallest_index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest){
            smallest = arr[i]
            smallest_index = i
        }
    }
    return smallest_index
}

function selectionSort(arr){
    newArr = []
    let length = arr.length
    for (let i = 0; i < length; i++){
        smallest = findSmallest(arr)
        newArr.push(arr.splice(smallest, 1))
    }
    return newArr
}

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    } 
    else {
        let midElement = arr[parseInt(arr.length / 2)]
        let left = []
        let right = []
        for (let i = 0; i < arr.length; i++){
            if (arr[i] < midElement){
                left.push(arr[i])
            } else if (arr[i] > midElement){
                right.push(arr[i])
            }
        }
        return quickSort(left) + midElement + quickSort(right)
    }
}

//Структуры данных
//Stack
function Stack() {
    this.count = 0
    
    this.storage = {}

    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }

    this.pop = function() {
        if (this.count === 0) return undefined
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.peek = function() {
        return this.storage[this.count - 1]
    }

    this.size = function() {
        return this.count
    }
}

// Queue (Очередь)
function Queue() {
    let collection = []

    this.print = function() {
        console.log(collection)
    }

    this.enqueue = function(element) {
        if (element.constructor === Array){
            for (let i = 0; i < element.length; i++){
                collection.push(element[i])
            }
        } else {
            collection.push(element)
        }   
    }

    this.dequeue = function() {
        return collection.shift()
    }

    this.front = function() {
        return collection[0]
    }

    this.isEmpty = function() {
        return collection.length === 0
    }

    this.size = function() {
        return collection.length
    }
}

//Hash table 
let hashTable = {}
hashTable['key'] = 'value'
//Графы
let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

function personIsSeller(name) {
    return name.slice(-1) === 'm'
}

function search(name) {
    let search_queue = new Queue();
    search_queue.enqueue(graph[name])
    let searched = []
    while (search_queue) {
        person = search_queue.front()
        if (person != searched) {
            if (personIsSeller(person)){
                console.log(person + ' is mango seller');
                return true;
            } else {
                search_queue.dequeue()
                search_queue.enqueue(graph[person])
                searched.push(person)
            }
        }    
    } 
    return false
}


