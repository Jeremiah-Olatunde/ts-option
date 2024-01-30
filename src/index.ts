class MockOption<T> {
  constructor(private value: T | null = null){}

  static some<U>(value: U): MockOption<U> {
    return new MockOption(value);
  }

  static none<U>(value: U): MockOption<U> {
    return new MockOption();
  }
}