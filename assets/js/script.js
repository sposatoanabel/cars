/**
 * Created by asposato on 12/04/2017.
 */


function Car( brand, model, year, cost, dimensions, fuelEconomy, kerbWeight, tankCapacity, acceleration, maxSpeed, img ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.cost = cost;
    this.dimensions = dimensions;
    this.fuelEconomy = fuelEconomy;
    this.kerbWeight = kerbWeight;
    this.tankCapacity = tankCapacity;
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
    this.img = img;
}

Car.prototype.imgUrl = function () { return "assets/img/" + this.img ;};

function Dimensions(minLength,maxLength,minWidth, maxWidth, minHeight, maxHeight) {
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
}



var
    audiCar =     new Car("Audi", "A4", 2017, 26,265,
                  new Dimensions(4,725, 4,726, 1,842, 1,842, 1,427, 1,434),
                          "45-74 mpg combined (36-63 city, 52-83 highway)",
                          "1,320 to1,695 kg",
                          "40 to 58 L",
                          null,
                          null,
                          "audiImg.jpg"
                          ),

    mercedesCar = new Car("Mercedes-Benz", "C-Class", 2017, 28,160,
                  new Dimensions(4,686, 4,771, 1,810, 1,877, 1,400, 1,467),
                          "32-79 mpg combined (23-72 city, 39-83 highway)",
                          null,
                          null,
                          "0-62 mph: 3.9 to 10.6 seconds",
                          "76.43 to 154.7 mph",
                          "mercedesImg.jpg"
                         ),

    bmwCar =      new Car("BMW", "3 Series", 2017, 24,800,
                  new Dimensions(4,633, 4,671, 1,811, 1,877, 1,424, 1,467),
                          "32-72 mpg combined (23-60 city, 41-83 highway)",
                          null,
                          null,
                          "0-62 mph: 4.2 to 11.2 seconds",
                          null,
                          "bmwImg.jpg"
                         ),
    jaguarCar =   new Car("Jaguar", "XE", 2017, 27,525,
                  new Dimensions(4,672, 4,672, 1,850, 1,850, 1,416, 1,425),
                           "35-74 mpg combined (24-64 city, 46-83 highway)",
                           "1,435 to 1,655 kg",
                           null,
                           "0-62 mph: 5 to 8.4 seconds",
                           null,
                           "jaguarImg.jpg"
                       )
;






