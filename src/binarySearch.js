export const binarySearch = (arr, item, count) => {
    const startTime = performance.now()

    let min = 0
    let middle = Math.floor(arr.length / 2)
    let max = arr.length - 1

    while (min <= max) {
        count++

        middle = Math.floor((min + max) / 2)

        if (item === arr[middle]) {
            const endTime = performance.now()
            const timeTaken = endTime - startTime
            console.log(
                `=== Found the desired number after ${count} iterations and ${timeTaken.toFixed(
                    6
                )} milliseconds.`
            )
            return
        } else if (item < arr[middle]) {
            max = middle - 1
        } else {
            min = middle + 1
        }
    }
}
