export async function fetchGitHubRepos() {
  const username = import.meta.env.GITHUB_USERNAME;
  const token = import.meta.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
    headers: {
      Authorization: `token ${token}`
    }
  });

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos");
    return [];
  }

  const data = await res.json();
  return data.map(repo => ({
    title: repo.name,
    description: repo.description || "No description",
    github: repo.html_url,
    tags: [],
    img: "/images/github-placeholder.png",
    publishDate: new Date(repo.updated_at)
  }));
}
