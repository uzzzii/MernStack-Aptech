export const GetServices = async () => {
    let data = null; // Define data outside the try block
    try {
        const response = await fetch("http://localhost:8000/serives/getservices");
        
        // Check if the response is successful (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        data = await response.json(); // Assign data if the response is successful
        console.log(data); // Or handle the data as needed

    } catch (error) {
        console.error("Error:", error);
    }

    return data; // Return data after the try-catch block
};
