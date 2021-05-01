class GitHub {
  constructor() {
    this.client_id = 'Iv1.fd9aa77f69999347';
    this.client_secret = '1e41829fc108db0756c1f3fbae6db06a71d93c19'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

      return {
        // it returns an object, but because both profile: profile are the same words
        // then the : profile can be left out
        profile,
        repos
      }
  }
}