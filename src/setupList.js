import { formatSize } from './formatSize.js'
import { sortListSelectionSort } from './sortListSelectionSort.js'

export const setupList = (size) => {
    const SIZE = size || 500000
    const indexToFind = Math.floor(Math.random() * SIZE)
    console.log(
        `=== Searching for number ${indexToFind} in an initially shuffled list of size ${formatSize(
            parseInt(SIZE)
        )}.\n`
    )
    const list = Array.from({ length: SIZE }, (_, i) => i).sort(
        () => Math.random() - 0.5
    )
    console.log('=== List has been created and shuffled. Sorting list now.\n')
    const sortedList = sortListSelectionSort(list)
    return [indexToFind, sortedList]
}
