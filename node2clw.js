// Store customer name and comment
let customerName = "Rahul";
let customerComment = "The coffee was amazing and the service was excellent!";

// Create review object
const review = {
  name: customerName,
  comment: customerComment
};

// Function to display thank-you message
function thankCustomer(reviewObj) {
  // Convert name to uppercase
  let upperName = reviewObj.name.toUpperCase();

  // Get first 20 characters of comment
  let shortComment = reviewObj.comment.substring(0, 20);

  // Print message
  console.log(`Thank you, ${upperName}!`);
  console.log(`Your review: "${shortComment}..."`);
}

// Call the function
thankCustomer(review);