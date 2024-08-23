interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
    [propName: string]: any;

};

interface Directors extends Teacher {
    numberOfReports : number;       
}

function printTeacher(firstName : string, lastName : string) : string {
    
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// To ensure the constructor adheres to the interface
const Student: StudentConstructor = StudentClass;
