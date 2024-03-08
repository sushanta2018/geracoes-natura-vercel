import fetch from "node-fetch";

export default async function handler(req, res) {
  // The URL of the external resource you want to fetch
  const url =
    "https://www.consultoriadebelezanaturaeavon.com/_next/static/css/3c1ea4af03afb95e.css";

  try {
    // Fetch the resource using node-fetch or any other HTTP request library
    const externalResponse = await fetch(url);

    // Check if the external request was successful
    if (!externalResponse.ok) {
      // If the external server returned an error, forward that error to the client
      res
        .status(externalResponse.status)
        .send("Error fetching the external resource");
      return;
    }

    // Get the content type from the external response (should be 'text/css' for a CSS file)
    const contentType = externalResponse.headers.get("content-type");

    // Send the headers you want to allow for CORS
    res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust the origin according to your needs
    res.setHeader("Content-Type", contentType);

    // Stream the response back to the client
    externalResponse.body.pipe(res);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    res.status(500).send("Internal Server Error");
  }
}
