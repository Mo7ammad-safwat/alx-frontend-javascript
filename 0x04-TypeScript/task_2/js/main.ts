interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

class Director implements DirectorInterface {
    workFromHome() : string {
        return 'Working from home';
    }

    getCoffeeBreak() : string {
        return 'Getting a coffee break';
    }

    workDirectorTasks() : string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() : string {
        return 'Cannot work from home';
    }

    getCoffeeBreak() : string {
        return 'Cannot have a break';
    }

    workTeacherTasks() : string {
        return 'Getting to work';
    }
}


type Subjects = 'Math' | 'History';

function createEmployee(salary : number | string) : DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee : DirectorInterface | TeacherInterface) : employee is Director {
    return (employee instanceof Director);
}

function executeWork(employee : DirectorInterface | TeacherInterface) : string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

function teachClass(todayClass : Subjects) : string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}
