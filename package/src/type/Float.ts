import type { Int } from '@type/Int';

/**
 * A `number` that is not an integer.
 * You can't pass a `bigint` as they are already guaranteed to be integers.
 * 
 * Use-case: Validating and documenting parameters. Other usage is limited.
 * 
 * *Note: Check this [writeup](https://github.com/sindresorhus/type-fest/issues/334#issuecomment-987787840) for more details.*
 * @example
 * function setPercentage<T extends number>(x: Float<T>) {};
 *
 * setPercentage(1.1); // OK
 * setPercentage(1); // Error
 * @category type
*/
export type Float<T extends number> = T extends Int<T> ? never : T;