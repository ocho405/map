// Original array of users
const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 }
];

// Transform the array using map()
const updatedUsers = users.map(user => {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    membershipStatus: user.points > 100 ? "Premium" : "Standard"
  };
});

// Print the result
console.log(updatedUsers);
