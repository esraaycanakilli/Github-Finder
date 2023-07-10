
class Github{
    constructor(){
        this.client_secret="4db535882acbd8ebcfe6abace4449216752d3e46"
        this.client_id="1c9bc3b33606b426310e"
        this.repos_count=10
        this.repos_sort='asc'
    }

   async  getUser(user){
    
        const profileResponse=await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)        
            
        const repoResponse = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
              );
            const profile=await profileResponse.json();
            const repos= await repoResponse.json();
            console.log(repos);
        return {
            profile,
            repos,
        }
    }
}




export default Github;