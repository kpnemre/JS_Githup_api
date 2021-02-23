class Storage {


  static getFromStorage() {
    let users;
    if (localStorage.getItem("searched") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }
    return users;
  }


  static addToStorage(username) {
    let users = this.getFromStorage();
    
    if (users.indexOf(username) === -1) {
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users) )
  }


  static clearAllStorage() {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("searched");
    }
    
  }
}
