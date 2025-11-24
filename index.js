const setupList = (size) => {
    const SIZE = size || 100000000
    const indexToFind = Math.floor(Math.random() * SIZE)
    console.log(
        `Searching for index ${indexToFind} in an ordered list of size ${SIZE}.`
    )
    const sortedList = Array.from({ length: SIZE }, (_, i) => i)
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
            console.log(`Found ${item} in ${count} iterations.`)
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
    if (size && (!pattern.test(size) || parseInt(size) > 100000000)) {
        console.log(
            'Please provide a valid positive integer size lower than 100000000.'
        )
        return
    }
    const [indexToFind, sortedList] = setupList(size)
    binarySearch(sortedList, indexToFind, 0)
}

main()
