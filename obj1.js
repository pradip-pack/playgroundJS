function Person(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.bmi = this.height / this.weight;
 }

    const mark = new Person('mark', 1.5, 3.0);
    const john = new Person("John", 1.8, 73)

    console.log(mark.bmi);