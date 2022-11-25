class Phone {
  constructor(mark, model, color, price, year) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("year must be integer number");
    }
    if (
      value < 1900 ||
      new Date().getFullYear() < value ||
      !Number.isInteger(value)
    ) {
      throw new RangeError(
        `year must be between 1900 and ${new Date().getFullYear()} integer`
      );
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

try {
  const telephone1 = new Phone("Nokia", "3310", "black", 2000, 2010);
  console.log("telephone1.getAge(): ", telephone1.getAge());
  telephone1.year = 2000;
  console.log("telephone1.year: ", telephone1.year);
} catch (err) {
  console.log("err: ", err);
}
