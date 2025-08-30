export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Microsoft Forms submission URL with form ID
    const baseUrl = 'https://forms.microsoft.com/Pages/ResponsePage.aspx';
    const formId = 'DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAEWl0wxoyhUNks2VjBaUjVMTUJWMFdTTU4yRkNJTzNMVC4u';
    
    // Build URL with parameters
    const params = new URLSearchParams({
      id: formId,
      r80243ee18afd4903973d6b8da3b285d5: data.name || '',
      // Add more parameters as needed
      // email_parameter: data.email || '',
      // phone_parameter: data.phone || '',
    });
    
    // Submit to Microsoft Forms
    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    // Check if submission was successful
    if (response.ok || response.status === 302) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Registration submitted successfully!' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(`Submission failed with status: ${response.status}`);
    }
    
  } catch (error) {
    console.error('Microsoft Forms submission error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message || 'Failed to submit registration' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}