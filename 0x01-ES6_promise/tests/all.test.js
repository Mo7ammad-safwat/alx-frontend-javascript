// START TEST SETUP
// Import functions to be tested
import getResponseFromAPI from "../1-promise"; // Note: Complete 0 and 1 before testing.
import handleResponseFromAPI from "../2-then";
import handleProfileSignup from "../3-all";

describe("0-promise.js", () => {
    // Test Case 1
    test("should return a promise", () => {
        expect(getResponseFromAPI(true)).toBeInstanceOf(Promise);
    });
});

describe("1-promise.js", () => {
    // Test Case 1
    test("should return a promise", () => {
        expect(getResponseFromAPI(true)).toBeInstanceOf(Promise);
    });
    // Test Case 2
    test("should return correct response when passed true", () => {
        return getResponseFromAPI(true).then((response) => {
            expect(response.status).toEqual(200);
            expect(response.body).toEqual("Success");
        });
    });
    // Test Case 3
    test("should return correct error when passed false", () => {
        return getResponseFromAPI(false).catch((error) => {
            expect(error).toEqual(Error("The fake API is not working currently"));
        });
    });
});

describe("2-then.js", () => {
    // Test Case 1
    test("should return correct response when passed true", () => {
        return expect(handleResponseFromAPI(Promise.resolve())).resolves.toEqual({ status: 200, body: "success" });
    });
    // Test Case 2
    test("should return correct response when passed false", () => {
        return expect(handleResponseFromAPI(Promise.reject())).resolves.toEqual(Error());
    });
    // Test Case 3
    test("should print correct message when passed true", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleResponseFromAPI(Promise.resolve()).then(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
        });
    });
    // Test Case 4
    test("should print correct message when passed false", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleResponseFromAPI(Promise.reject()).catch(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
        });
    });
});

describe("3-all.js", () => {
    // Test Case 1
    test("shouldn't return anything", () => {
        return expect(handleProfileSignup()).resolves.toBeUndefined();
    });
    // Test Case 2
    test("should print correct message when passed resolved", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleProfileSignup().then(() => {
            expect(consoleSpy.mock.calls[2][0]).toEqual("photo-profile-1 Guillaume Salva");
        });
    });
    // Test Case 3
    test("should print correct message when passed rejected", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleProfileSignup().catch(() => {
            expect(consoleSpy.mock.calls[3][0]).toEqual("Signup system offline");
        });
    });
});
