const sortListAscending = (arr) => {
    let smallestIndex = 0
    let smallestValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i
        smallestValue = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallestValue) {
                smallestIndex = j
                smallestValue = arr[j]
            }
        }
        if (smallestIndex !== i) {
            arr[smallestIndex] = arr[i]
            arr[i] = smallestValue
        }
    }
    console.log('List was sorted in ascending order.')
    return arr
}

const setupList = (size) => {
    const SIZE = size || 250000
    const indexToFind = Math.floor(Math.random() * SIZE)
    console.log(
        `Searching for number ${indexToFind} in an initially shuffled list of size ${SIZE}.`
    )
    const list = Array.from({ length: SIZE }, (_, i) => i).sort(
        () => Math.random() - 0.5
    )
    console.log('List has been created and shuffled. Sorting list now.')
    const sortedList = sortListAscending(list)
    return [indexToFind, sortedList]
}

const binarySearch = (arr, item, count) => {
    let min = 0
    let middle = Math.floor(arr.length / 2)
    let max = arr.length - 1

    while (min <= max) {
        count++

        middle = Math.floor((min + max) / 2)

        if (item === arr[middle]) {
            console.log(`Found ${item} after ${count} iterations.`)
            return
        } else if (item < arr[middle]) {
            max = middle - 1
        } else {
            min = middle + 1
        }
    }
}

const main = () => {
    const size = process.argv[2]
    const pattern = /^\d+$/
    if (
        size &&
        (!pattern.test(size) || parseInt(size) > 250000 || parseInt(size) <= 0)
    ) {
        console.log(
            'Please provide a valid positive list size lower than 250,000.'
        )
        return
    }
    const [indexToFind, list] = setupList(size)
    binarySearch(list, indexToFind, 0)
}

main()
