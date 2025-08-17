export async function fetchGitHubRepos() {
  const username = import.meta.env.GITHUB_USERNAME;
  const token = import.meta.env.GITHUB_TOKEN;

  const includedRepos = [
    "sales-data-pipeline",
    "customer_analytics_dashboard",
    "AI-Content-Analyzer",
    "mariyacarolg-portfolio",
    "Snake-game",
    "feedback-collector-analyzer-apps-script"
  ];

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    headers: {
      Authorization: `token ${token}`
    }
  });

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos");
    return [];
  }

  const data = await res.json();

  // Filter only the repos in includedRepos
  const filtered = data.filter(repo => includedRepos.includes(repo.name));

  return filtered.map(repo => ({
    title: repo.name,
    description: repo.description || "No description",
    github: repo.html_url,
    tags: [], // add tags if you want
    img: `/images/${repo.name}.png`, // optional: custom screenshots
    publishDate: new Date(repo.updated_at)
  }));
}
