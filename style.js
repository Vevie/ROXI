// Example data for job listings
const jobListings = [
    { title: "Masseuse", description: "Hiring an experienced professional to provide relaxation massages." },
    { title: "Makeup Artist", description: "Seeking a skilled professional to provide exceptional makeup." },
    { title: "Cleaner", description: "Seeking an individul to ensure a welcoming environment for our clients and staff." },
    { title: "Hair Stylist", description: "Looking for a talented individual with a passion for hairstyling." },
  ];
  
  // Function to dynamically generate job cards
  function createJobCards() {
    const jobListContainer = document.getElementById("job-list");
  
    jobListings.forEach((job) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("col-lg-4");
  
      const cardContent = `
        <div class="card job-card">
          <div class="card-body">
            <h3 class="card-title">${job.title}</h3>
            <p class="card-text">${job.description}</p>
            <div class= text-end>
                <a href="#" class="btn btn-primary">Apply Now</a>
            </div>
          </div>
        </div>
      `;
  
      cardDiv.innerHTML = cardContent;
      jobListContainer.appendChild(cardDiv);
    });
  }
  
  // Call the function to generate the job cards on page load
  window.onload = createJobCards;
  






  // Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    // Perform form validation
    if (!name || !email || !service || !date || !time) {
      alert("Please fill in all fields");
      return;
    }
  
    // Prepare the data for submission (you can modify this according to your needs)
    const formData = {
      name,
      email,
      service,
      date,
      time,
    };
  
    // Perform an action with the form data (e.g., send it to the server)
    console.log(formData);
  
    // Reset the form fields
    document.getElementById("appointment-form").reset();

    alert("Appointment booked successfully!");

  }
  
  // Add event listener to the form submit event
  document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
