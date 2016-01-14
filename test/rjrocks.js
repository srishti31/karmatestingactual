describe( "Convert library", function () {

it("throws an error when passed an unknown from-unit", function () {
    var testFn = function () {
        Convert(1, "dollar").to("yens");
    }
    expect(testFn).toThrow(new Error("unrecognized from-unit"));
});

it("throws an error when passed an unknown to-unit", function () {
    var testFn = function () {
        Convert(1, "cm").to("furlongs");
    }
    expect(testFn).toThrow(new Error("unrecognized to-unit"));
});

describe( "distance converter", function () {
    it("converts inches to centimeters", function () {
        expect(Convert(12, "inches").to("cm")).toEqual(30.48);
    });

    it("converts centimeters to yards", function () {

 
//var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
        expect(Convert(2000, "cm").to("yards")).toEqual(21.87);
  //      expect(db).toBeDefined();
    });
});

describe( "volume converter", function () {
    it("converts liters to gallons", function () {
        expect(Convert(3, "liters").to("gallons")).toEqual(0.79);
    });

    it("converts gallons to cups", function () {
        expect(Convert(2, "gallons").to("cups")).toEqual(32);
    });
});
});

describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});