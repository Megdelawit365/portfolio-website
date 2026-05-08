const TOKEN = import.meta.env.VITE_TOKEN

export async function fetchGitHubContributions(username) {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
    `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (json.errors) {
      console.error("GitHub GraphQL Error:", json.errors);
      return [];
    }

    return json.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
  } catch (err) {
    console.error("Network error:", err);
    return [];
  }
}