const employee = {
    name: "Derby",
    streetAddress: "123 Happy Street",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
/*        return {
        ...object,
        [key]: value
    }*/
    const copyOfObject = {...object};
    copyOfObject[key] = value;
    return copyOfObject;
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};

function deleteFromEmployeeByKey(object, key) {
    const copyOfObject = {...object};
    delete copyOfObject[key];
    return copyOfObject;
};

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
};

/*function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployeeWithKeyAndValue = (
        ...employee,
        name,
        "Sam",
        ...(1)
    )
    const updateEmployeeWithKeyAndValue = (
        ...employee,
        streetAddress,
        "11 Broadway"
    )
    return updateEmployeeWithKeyAndValue;
}*/
//console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '10 Broadway'))
//(employee['streetAddress']).to.equal(undefined)