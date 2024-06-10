export async function submitFormData(formData) {
  try {
    // Make a POST request to your API
    const response = await fetch(`http://localhost:1337/api/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    });

    if (response.ok) {
      // Return a success message or data as needed
      return { success: true, message: "Form data submitted successfully" };
    } else {
      // Return an error message or handle errors as needed
      return { success: false, message: "Failed to submit form data" };
    }
  } catch (error) {
    // Handle network or other errors and return an error message
    return { success: false, message: "An error occurred: " + error.message };
  }
}
