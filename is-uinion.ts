// type IsUnion<T> = never;

// type case1 = IsUnion<string>; // false
// type case2 = IsUnion<string | number>; // true
// type case3 = IsUnion<[string | number]>; // false
