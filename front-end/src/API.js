const API_URL = 'http://localhost:5000';

export async function listTweets() {
  const response = await fetch(`${API_URL}/api/v1/tweets`);
  return response.json();
}