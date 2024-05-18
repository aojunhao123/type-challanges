// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsUnknown<"">, false>>,
  Expect<Equal<IsUnknown<never>, false>>,
  Expect<Equal<IsUnknown<never | string>, false>>,
  Expect<Equal<IsUnknown<unknown>, true>>
];

type IsAny<T> = 0 extends 1 & T ? true : false;

// unknown作为top type，可以被赋值给任意类型 (xxx extends unknown)；
// 但是unknown只能赋值给unknown或者any类型 (extends unknown/any)；
type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
