// Record<K,V>：构造一个对象类型，其键为 K，值为 V。
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};
