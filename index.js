// Parent class
class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

// Subclass for Deciduous
class Deciduous extends Tree {
  constructor(species, name) {
    super(species); // Call the parent constructor
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

// Subclass for Evergreen
class Evergreen extends Tree {
  constructor(species, name) {
    super(species); // Call the parent constructor
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}
