document.getElementById('calculateBtn').addEventListener('click', function() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
    return;
  }

  // Generate a random love percentage
  const lovePercentage = Math.floor(Math.random() * 101);

  // Display the result
  const resultContainer = document.getElementById('gameResult');
  resultContainer.innerHTML = `
        <p><strong>${name1} ❤️ ${name2}</strong></p>
        <p>The love percentage is: <strong>${lovePercentage}%</strong></p>
    `;
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you shortly.');
  } else {
    alert('Please fill out all fields.');
  }
});

function placeOrder() {
  let messages = ["order success fully", "success fully"];
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}