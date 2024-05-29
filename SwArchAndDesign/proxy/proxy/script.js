class NotaryService {
    registerClient(clientName) {
        throw new Error('Method registerClient must be implemented');
    }
}

class NotaryServiceImpl extends NotaryService {
    registerClient(clientName) {
        console.log(`Client '${clientName}' has been registered.`);
    }
}

class NotaryServiceProxy extends NotaryService {
    constructor(username, password) {
        super();
        if (username === "admin" && password === "password") {
            this.isAdmin = true;
            this.notaryService = new NotaryServiceImpl();
        } else {
            this.isAdmin = false;
        }
    }

    registerClient(clientName) {
        if (this.isAdmin) {
            this.notaryService.registerClient(clientName);
        } else {
            console.log("Only admin users can register clients.");
        }
    }
}

// Admin
let adminService = new NotaryServiceProxy("admin", "password");
adminService.registerClient("John Doe");

// User
let regularService = new NotaryServiceProxy("user", "pass123");
regularService.registerClient("Jane Smith");
