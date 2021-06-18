const Data = [
    {
        miniProfile: {
            image: 'https://randomuser.me/api/portraits/med/women/34.jpg',
            employeeName: 'John Doe',
            employeeRole: 'Web Developer',
        },
        employeeID: 'F0001',
        employeeEmail: 'johndoe@example',
        joinedDate: '1 Jan 2014',
        salary: `$7000`,
    },
];

const employeeUserData = (employeData) => {
    let singleEmployee = employeData.map((employee) => {
        let {
            miniProfile: { image, employeeName, employeeRole },
            employeeID,
            employeeEmail,
            joinedDate,
            salary,
        } = employee;
        let name = employeeName;
        let picture = image;
        let role = employeeRole;

        return {
            name,
            picture,
            role,
            employeeID,
            employeeEmail,
            joinedDate,
            salary,
        };
    });
    return singleEmployee;
};

export const employeeUsersData = (allData) => {
    const { results } = allData;
    let employeenewDetails;

    if (results) {
        employeenewDetails = JSON.stringify(results, null, 2);
        employeenewDetails = JSON.parse(employeenewDetails);
        console.log(employeenewDetails);
    }
    return employeenewDetails
        ? employeeUserData(employeenewDetails)
        : employeeUserData(Data);
};
