// Unsplash API
const countPhotos = 10;
const apiKey = 'oU0m6w6VS_mGxM_uSkrY6nMV48wKpVaOekvgF-phZvI'; // Deactivated after project completed
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${countPhotos}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {

    }
}

getPhotos();