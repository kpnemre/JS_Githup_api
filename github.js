class Github {
    constructor(){
        this.url = "https://api.github.com/users/"
    }

    async getGithubData (username){
const responseUser = await fetch(this.url + username);
const responseRepo = await fetch(this.url + username +"/repos");

const userData =await responseUser.json()
const userRepo =await responseRepo.json()
// bu değişkenlere atanan değer promise olduğu için beklemek için await kullanıyoruz

return{
    user:userData,
    repo:userRepo
}

    }
}