class Services {
  makeRequest(url, method, data = null) {
    let config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    return fetch(url, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error making request: " + response.statusText);
        }

        const contentType = response.headers.get("content-type");
        console.log(contentType);
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response;
        }
      })
      .catch((error) => {
        console.error("Request error:", error);
        throw error;
      });
  }
}

export default Services;
