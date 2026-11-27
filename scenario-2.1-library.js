const library = db.getSiblingDB("library");
const members = library.getCollection("members");

members.deleteMany({});
members.insertMany([
  {
    name: "Ravi",
    address: { city: "Chennai", pin: "600001" },
    borrowed: ["Python Basics", "MongoDB Guide"],
    fee: 0
  },
  {
    name: "Sita",
    address: { city: "Madurai", pin: "625001" },
    borrowed: ["MongoDB Guide"],
    fee: 50
  },
  {
    name: "Kumar",
    address: { city: "Chennai", pin: "600028" },
    borrowed: [],
    fee: 0
  },
  {
    name: "Lakshmi",
    address: { city: "Coimbatore", pin: "641001" },
    borrowed: ["Python Basics"],
    fee: 120
  }
]);

print("Step 1: databases");
library.getSiblingDB("admin")
  .runCommand({ listDatabases: 1, nameOnly: true })
  .databases.forEach(({ name }) => print(name));
print("Collections: " + library.getCollectionNames().join(", "));

print("\nStep 2: members in Chennai");
members.find(
  { "address.city": "Chennai" },
  { _id: 0, name: 1, address: 1 }
).forEach(printjson);

print("\nStep 3: members who borrowed MongoDB Guide");
members.find(
  { borrowed: "MongoDB Guide" },
  { _id: 0, name: 1, borrowed: 1 }
).forEach(printjson);

print("\nStep 4: members who borrowed both books");
members.find(
  { borrowed: { $all: ["Python Basics", "MongoDB Guide"] } },
  { _id: 0, name: 1 }
).forEach(printjson);

print("\nStep 5: members with no borrowed books");
members.find(
  { borrowed: { $size: 0 } },
  { _id: 0, name: 1 }
).forEach(printjson);

print("\nStep 6: change Sita's city to Chennai");
printjson(members.updateOne(
  { name: "Sita" },
  { $set: { "address.city": "Chennai" } }
));

print("\nStep 7: members owing a fee and collection cleanup");
print(members.countDocuments({ fee: { $gt: 0 } }));
print(members.drop());