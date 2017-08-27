(function () {


    function Car(brand, model, year, cost, dimensions, fuelEconomy, kerbWeight, tankCapacity, acceleration, maxSpeed, img) {
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

    Car.prototype.imgUrl = function () {
        return "assets/img/" + this.img;
    };

    function Dimensions(minLength, maxLength, minWidth, maxWidth, minHeight, maxHeight) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
    }

    Dimensions.prototype.toString = function () {
        return this.minLength + " - " + this.maxLength + " mm L x " + this.minWidth + " mm " + "x " + "- " +
            this.maxWidth + " mm " + "W " + "x " + this.minHeight + " - " + this.maxHeight + " mm" + " H";
    };

    function Accessory(name, price) {
        this.accessoryName = name;
        this.accessoryPrice = price;
    }

    var accessoryTypes = ['freshener', 'lights', 'wheel', 'decals', 'gps', 'battery'];

    var accessoriesByBrand = {
        audi: {
            freshener: new Accessory("Audi Red In-car Gecko Air Freshener", "£" + 7.00),
            lights: new Accessory("White 2X 12V 8 LED 5W Daytime Running Front Light DRL Car Fog Day Driving Lamp", "£" + 7.89),
            wheel: new Accessory("1x 15 Audi A4/A6 wheel trim hub cap cover VGC!", "£" + 10.00),
            decals: new Accessory("AUDI Logo Alt Premium Cast Skirt Decals Stickers TT RS A3 A4 A5 S-line Quattro", "£" + 9.99),
            gps: new Accessory("Audi A4/Seat Exeo Stereo 7 \" Touch Screen Android 5.1 Car GPS Sat Nav DVD Radio\"", "£" + 249.99),
            battery: new Accessory("Genuine Audi Battery Conditioner Trickle Charger", "£" + 80.00),
        },

        mercedes: {
            freshener: new Accessory("Mercedes Car Logo Air Freshener Double Sided", "£" + 2.95),
            lights: new Accessory("2 High Quality MERCEDES BENZ C-CLASS W204 XENON COOL WHITE LED SIDE LIGHT BULBS", "£" + 5.99),
            wheel: new Accessory("16 in Wheel Trim HUB CAP Centre Cover", "£" + 23.97),
            decals: new Accessory("Mercedes AMG 3D Chrome Emblem Badge For CLK C63 A Class B Class C Class Benz", "£" + 2.99),
            gps: new Accessory("DVD GPS Player System sat nav for Mercedes Benz C Class CLK CLC W203 W209 AMG", "£" + 239.90),
            battery: new Accessory("CTEK MXS 5.0 12V Battery Charger & Conditioner", "£" + 93.16),
        },

        bmw: {
            freshener: new Accessory("Bmw Car Logo Air Freshener Double Sided", "£" + 2.95),
            lights: new Accessory("BMW 3 SERIES F30 F31 LED DRL XENON ICE WHITE DAYTIME RUNNING LIGHT NO ERROR", "£" + 17.95),
            wheel: new Accessory("16 in Wheel Trim HUB CAP Centre Cover", "£" + 23.97),
            decals: new Accessory("BMW F30 M Performance BLACK x2 Side stickers Decals Vinyl Graphics 1 3 5 series", "£" + 3.99),
            gps: new Accessory("UK Sat Nav For BMW 3 Series E46 318 320 M3 Car Stereo DVD Player GPS Free Camera (Fits: BMW 3 Series)", "£" + 205.14),
            battery: new Accessory("BMW New Genuine Car Trickle Battery Charger Conditioner 5 Amp UK 61432334070", "£" + 90.35),
        },

        jaguar: {
            freshener: new Accessory("JAGUAR X Type XE Car Air Freshener", "£" + 3.99),
            lights: new Accessory("L Shape DRL LED Daytime Running Lights Lamps Indicator Grill Jaguar 2016", "£" + 13.95),
            wheel: new Accessory("16 in Wheel Trim HUB CAP Centre Cover", "£" + 23.97),
            decals: new Accessory("JAGUAR HI - TEMP PREMIUM BRAKE CALIPER DECALS STICKERS CAST VINYL XE XF XJ", "£" + 6.59),
            gps: new Accessory("Smokeless Car Ashtray LED light Easy Clean Illuminated Ash Bin", "£" + 32.98),
            battery: new Accessory("Battery Conditioner - UK only", "£" + 177.00),
        }
    };

    var cars = {
        audi: new Car("Audi", "A4", 2017, 26.000,
            new Dimensions(4.725, 4.726, 1.842, 1.842, 1.427, 1.434),
            "45-74 mpg combined (36-63 city, 52-83 highway)",
            "1,320 to 1,695 kg",
            "40 to 58 L",
            null,
            null,
            "audi-700x500.jpg"
        ),

        mercedes: new Car("Mercedes-Benz", "C-Class", 2017, 28.000,
            new Dimensions(4.686, 4.771, 1.810, 1.877, 1.400, 1.467),
            "32-79 mpg combined (23-72 city, 39-83 highway)",
            null,
            null,
            "0-62 mph: 3.9 to 10.6 seconds",
            "76.43 to 154.7 mph",
            "mercedes-700x500.jpg"
        ),

        bmw: new Car("BMW", "3 Series", 2017, 24.000,
            new Dimensions(4.633, 4.671, 1.811, 1.877, 1.424, 1.467),
            "32-72 mpg combined (23-60 city, 41-83 highway)",
            null,
            null,
            "0-62 mph: 4.2 to 11.2 seconds",
            null,
            "bmw-700x500.jpg"
        ),

        jaguar: new Car("Jaguar", "XE", 2017, 27000,
            new Dimensions(4.672, 4.672, 1.850, 1.850, 1.416, 1.425),
            "35-74 mpg combined (24-64 city, 46-83 highway)",
            "1,435 to 1,655 kg",
            null,
            "0-62 mph: 5 to 8.4 seconds",
            null,
            "jaguar-700x500.jpg"
        )
    };

    var
        createAccessoriesMarkup = function () {
            var container = document.getElementById('accessoriesListContainer');
            var list = document.createElement('ul');
            container.appendChild(list);


            for (var i = 0; i < accessoryTypes.length; i++) {
                var listItem = document.createElement('li');

                if(i % 2 == 0) {
                  listItem.className = 'gray row';
                } else {
                  listItem.className = 'lightGray row'
                }

                listItem.id = accessoryTypes[i];
                list.appendChild(listItem);
                var name = document.createElement('span');
                name.className = 'name';
                listItem.appendChild(name);
                var price = document.createElement('span');
                price.className = 'price';
                listItem.appendChild(price);
            }
        },

        bindRadioButtons = function () {
            var carInputs = document.querySelectorAll('#carContainer .row input');

            for (var i = 0; i < carInputs.length; i++) {
                carInputs[i].addEventListener("click", function () {
                    var selectedCar = this.getAttribute("data-identifier");
                    showDetails(cars[selectedCar]);
                    showAccessories(accessoriesByBrand[selectedCar])
                })
            }
        },

        showDetails = function (car) {
            for (var carProperty in car) {
                var p = document.getElementById(carProperty);
                if (p !== null) {
                    var value = car[carProperty];
                    if (value === null) {
                        value = "Unknown"
                    }
                    p.innerHTML = value;
                }
            }

            document.getElementById("dimensions").innerHTML = car.dimensions.toString();
            document.getElementById("img").src = car.imgUrl()
        },

        showAccessories = function (accessories) {

            for (var accessoryType in accessories) {
                var accessory = accessories[accessoryType];

                document.querySelector("#" + accessoryType + " .name").innerHTML = accessory.accessoryName;
                document.querySelector("#" + accessoryType + " .price").innerHTML = accessory.accessoryPrice;
            }

        },

        init = function () {
            createAccessoriesMarkup();
            bindRadioButtons();
            showDetails(cars.audi);
            showAccessories(accessoriesByBrand.audi)
        };


//onload initialiser
    window.addEventListener("load", init);
})();
