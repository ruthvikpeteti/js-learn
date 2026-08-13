// 📅 JavaScript Dates Basics
// This file demonstrates how to create, format, and work with dates in JavaScript

// Create a new Date object with the current date and time
let myDate = new Date()

// Shows the type of myDate (object)
console.log(typeof myDate)

// Logs full date object (includes date + time + timezone)
console.log(myDate)

// Converts date to a readable string format
console.log(myDate.toString())

// Shows only the date portion (no time)
console.log(myDate.toDateString())

// Formats date and time based on local system settings
console.log(myDate.toLocaleString())

// Create a specific date: year, month (0-based), day
// 0 = January, so this is Jan 24, 2023
let myCreateDate = new Date(2023, 0, 24)

// Display the created date in local format
console.log(myCreateDate.toLocaleString())

// Create date using string format (YYYY-MM-DD) → reliable format
let myCreateDatestring = new Date("2024-04-23")

// Logs the parsed date
console.log(myCreateDatestring)

// ⚠️ This format (DD-MM-YYYY) is NOT standard and may give Invalid Date
let myCreateDatestring2 = new Date("23-04-2024")

// Logs result (may be invalid depending on environment)
console.log(myCreateDatestring2)

// Get current timestamp (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now()

// Logs current timestamp
console.log(myTimeStamp)

// Convert a specific date to timestamp
console.log(myCreateDatestring.getTime())