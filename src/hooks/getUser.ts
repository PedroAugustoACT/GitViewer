export function getUser(username: string) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        const userProfile = {
          username: json.login,
          img: json.avatar_url,
          description: json.bio,
          following: json.following,
          followers: json.followers,
          reps: json.public_repos,
        };
        return userProfile;
      });
  }