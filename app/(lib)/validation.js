const validateName = (name) => {
    if (name.length < 3 || !name) {
        return {error: "Name must be at least 3 characters"};
    }
    return {success: "Name is valid"};
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email || !email)) {
        return {error: "Invalid email"};
    }
    return {success: "Email is valid"};
}

const validateMessage = (message) => {
    if (message.length < 10 || !message){
        return {error: "Message must be at least 10 characters"};
    }
    return {success: "Message is valid"};
}

export const validateForm = (name, email, message) => {
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const messageValidation = validateMessage(message);

    if (nameValidation.error) {
        return nameValidation;
    }

    if (emailValidation.error) {
        return emailValidation;
    }

    if (messageValidation.error) {
        return messageValidation;
    }

    return {success: "All fields are valid"};
}