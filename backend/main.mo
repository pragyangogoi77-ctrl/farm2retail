import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  public type Product = {
    id : Nat;
    name : Text;
    category : Text;
    price : Float;
    unit : Text;
    description : Text;
    imageUrl : Text;
    farmId : Nat;
    inStock : Bool;
  };

  public type Farm = {
    id : Nat;
    name : Text;
    location : Text;
    description : Text;
    imageUrl : Text;
  };

  let farms = Map.fromArray<Nat, Farm>([
    (
      1,
      {
        id = 1;
        name = "Sunny Fields Farm";
        location = "California";
        description = "Organic produce farm specializing in vegetables";
        imageUrl = "https://example.com/farm1.jpg";
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Green Pastures";
        location = "Texas";
        description = "Dairy farm providing fresh milk and cheese";
        imageUrl = "https://example.com/farm2.jpg";
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Blueberry Hill";
        location = "Maine";
        description = "Fruit farm known for berries and jams";
        imageUrl = "https://example.com/farm3.jpg";
      },
    ),
  ]);

  let products = Map.fromArray<Nat, Product>([
    (
      1,
      {
        id = 1;
        name = "Organic Carrots";
        category = "Vegetables";
        price = 2.99;
        unit = "lb";
        description = "Fresh, organic carrots from Sunny Fields Farm";
        imageUrl = "https://example.com/carrot.jpg";
        farmId = 1;
        inStock = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Whole Milk";
        category = "Dairy";
        price = 3.49;
        unit = "gallon";
        description = "Creamy, local whole milk from Green Pastures";
        imageUrl = "https://example.com/milk.jpg";
        farmId = 2;
        inStock = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Blueberry Jam";
        category = "Fruit";
        price = 5.99;
        unit = "jar";
        description = "Homemade blueberry jam from Blueberry Hill";
        imageUrl = "https://example.com/jam.jpg";
        farmId = 3;
        inStock = false;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Spinach";
        category = "Vegetables";
        price = 1.99;
        unit = "bunch";
        description = "Fresh spinach from Sunny Fields Farm";
        imageUrl = "https://example.com/spinach.jpg";
        farmId = 1;
        inStock = true;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Cheddar Cheese";
        category = "Dairy";
        price = 4.99;
        unit = "block";
        description = "Aged cheddar cheese from Green Pastures";
        imageUrl = "https://example.com/cheese.jpg";
        farmId = 2;
        inStock = true;
      },
    ),
  ]);

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getAllFarms() : async [Farm] {
    farms.values().toArray();
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getFarmById(id : Nat) : async Farm {
    switch (farms.get(id)) {
      case (null) { Runtime.trap("Farm not found") };
      case (?farm) { farm };
    };
  };

  public query ({ caller }) func getProductsByFarmId(farmId : Nat) : async [Product] {
    products.values().toArray().filter(func(p) { p.farmId == farmId });
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(func(p) { p.category == category });
  };

  public query ({ caller }) func searchProductsByName(searchText : Text) : async [Product] {
    products.values().toArray().filter(
      func(p) {
        p.name.toLower().contains(#text(searchText.toLower()));
      }
    );
  };
};
