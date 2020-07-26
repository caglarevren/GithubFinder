class Github {
  constructor() {
    this.client_id = 'b68aa3d29b472fcf85bf';
    this.client_secret = 'eb9066c370cc7f21e777f29bfa09cf751db154cb';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, // This is equal to profile = profile. Eğer ikiside aynıysa direk sadece profile yazabiliyoruz.
      repos,
    };
  }
}
