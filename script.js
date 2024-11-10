// Event details (replace with your actual event data)
const events = [
    {
        title: "Wedding Ceremony",
        date: "[Date]",
        time: "[Time]",
        location: "[Location]",
        details: "[Details]"
    },
    // ... more events
];

// Image URLs (replace with your actual image URLs)
const images = [
    "image1.jpg",
    "image2.jpg",
    // ... more images
];

// Populate events dynamically
const eventsContainer = document.getElementById("events");
events.forEach(event => {
    let eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
        <h3>${event.title}</h3>
        <p class="date">Date: ${event.date}</p>
        <p class="time">Time: ${event.time}</p>
        <p class="location">Location: ${event.location}</p>
        <p class="details">${event.details}</p>
    `;
    eventsContainer.appendChild(eventDiv);
});

// Populate images dynamically
const imageContainer = document.querySelector(".image-container");
images.forEach(image => {
    let imgElement = document.createElement("img");
    imgElement.src = image;
    imageContainer.appendChild(imgElement);
});