// ## Array Cardio Day 2
//---------------------------------------------------------------------------------------------
const { log } = console;
//---------------------------------------------------------------------------------------------
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
//---------------------------------------------------------------------------------------------
// Some and Every Checks
//---------------------------------------------------------------------------------------------
// Array.prototype.some() // is at least one person 19 or older?
const evenOneOver19 = people.some(function (item) {
  const year = new Date().getFullYear();
  return year - item.year >= 19;
});
log({ evenOneOver19 });
//---------------------------------------------------------------------------------------------
// Array.prototype.every() // is everyone 19 or older?
const everyOneOlder19 = people.every(function (item) {
  return new Date().getFullYear() - item.year >= 19;
});
log({ everyOneOlder19 });
//---------------------------------------------------------------------------------------------
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment823423 = comments.find((item) => item.id === 823423);
log({comment823423}); // 1
//---------------------------------------------------------------------------------------------
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
comments.splice(
  comments.findIndex((item) => item.id === 823423),
  1
);
log({comments})
//---------------------------------------------------------------------------------------------
