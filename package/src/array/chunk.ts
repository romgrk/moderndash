/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 * @param chunkSize The length of each chunk
 * @param array The array to chunk.
 * @template TElem The type of the array elements.
 * @returns Returns the new array of chunks.
 */

export function chunk<TElem>(array: TElem[], chunkSize: number): TElem[][] {
    const sizeInteger = Math.trunc(chunkSize);
    if (array.length === 0 || sizeInteger < 1) {
        return [];
    }

    const chunkedArray = [];
    for (let i = 0; i < array.length; i += sizeInteger) {
        chunkedArray.push(array.slice(i, i + sizeInteger));
    }

    return chunkedArray;
}
