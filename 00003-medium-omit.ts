// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

/* // @ts-expect-error */
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
/**
 * 实现思路：
 *  1.获取对象类型中的所有键
 *  2.排除掉指定的键类型
 *  3.通过Pick<T, K>，获取排除掉指定键类型后剩余的类型
 * */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
