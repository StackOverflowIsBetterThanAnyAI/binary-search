export const sortListBubbleSort = (arr) => {
    const startTime = performance.now()

    let swapped = false

    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                const temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                swapped = true
            }
        }
        if (!swapped) {
            break
        }
    }

    const endTime = performance.now()
    const timeTaken = (endTime - startTime) / 1000
    console.log(
        `=== Shuffled list was sorted with Bubble Sort in ${timeTaken.toFixed(
            6
        )} seconds.\n`
    )
    return arr
}
