const API_URL = "http://localhost:5000";

export async function listTweets() {
  const response = await fetch(`${API_URL}/api/v1/tweets`);
  return response.json();
}

export async function createTweet(tweet) {
  const response = await fetch(`${API_URL}/api/v1/tweets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(tweet),
  });
  return response.json();
}

export async function validateLogin(tweet) {
  const response = await fetch(`${API_URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(tweet),
  });
  return response.json();
}
