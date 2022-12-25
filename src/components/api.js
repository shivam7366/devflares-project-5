const FIREBASE_DOMAIN =
  "https://devflares-project-5-default-rtdb.firebaseio.com";

export async function getAllHackathons() {
  const response = await fetch(`${FIREBASE_DOMAIN}/hackathon.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const hackathons = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(hackathons);
  }
}

export async function getSingleHackathon(hackathonId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/hackathon/${hackathonId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const hackathon = {
    id: hackathonId,
    ...data,
  };

  return hackathon;
}
export async function addHackathon(hackathonData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/hackathon.json`, {
    method: "POST",
    body: JSON.stringify(hackathonData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
