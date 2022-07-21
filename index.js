const employee = {
    name: 'boglo',
    streetAddress: '123 beal pkway'
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key){
    const deleObj = {...employee.name};
    delete deleObj.key;
    return deleObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}