class Handler {
    constructor() {
        this.successor = null;
    }

    setSuccessor(successor) {
        this.successor = successor;
    }

    handleRequest(request) {
        throw new Error("This method should be overridden by subclasses");
    }
}

class ClientValidationHandler extends Handler {
    handleRequest(request) {
        if (request === 1) {
            console.log("Client information is valid. Proceeding to the next step...");
            if (this.successor) {
                this.successor.handleRequest(request);
            }
        } else {
            console.log("Invalid client information. Registration process aborted.");
        }
    }
}

class ClientIDGenerationHandler extends Handler {
    handleRequest(request) {
        if (request === 2) {
            console.log("Client ID generated successfully. Proceeding to the next step...");
            if (this.successor) {
                this.successor.handleRequest(request);
            }
        } else {
            console.log("Client ID generation failed. Registration process aborted.");
        }
    }
}

class ClientStorageHandler extends Handler {
    handleRequest(request) {
        if (request === 3) {
            console.log("Client information stored successfully. Registration process completed.");
        } else {
            console.log("Client information storage failed. Registration process aborted.");
        }
    }
}
class ClientRegistrationSystem {
    constructor() {
        const validationHandler = new ClientValidationHandler();
        const idGenerationHandler = new ClientIDGenerationHandler();
        const storageHandler = new ClientStorageHandler();
        
        validationHandler.setSuccessor(idGenerationHandler);
        idGenerationHandler.setSuccessor(storageHandler);

        this.chain = validationHandler;
    }

    processRequest(request) {
        this.chain.handleRequest(request);
    }
}

function promptStep(stepMessage, stepNumber) {
    console.log(stepMessage);
    const userInput = prompt(`Enter ${stepNumber} to proceed or any other key to abort:`);
    const step = parseInt(userInput);
    if (!isNaN(step)) {
        system.processRequest(step);
    } else {
        console.log("Invalid input. Registration process aborted.");
    }
}


const system = new ClientRegistrationSystem();

console.log(":: Notary Office ::");
console.log("Please follow the registration process step by step.");


promptStep("Step 1: Validate client information.", 1);
promptStep("Step 2: Generate client ID.", 2);
promptStep("Step 3: Store client information.", 3);