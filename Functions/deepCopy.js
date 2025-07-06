function printData({id, ...otherData}){
    console.log(id);
    const{name, gender, isMarried, salary = 'NOT DISPLAYED'} = otherData;
    console.log(otherData);
    console.log(salary);
}
let userData = {id : '10', 'name' : 'sachin', 'gender' : 'M', 'isMarried' : true};
printData(userData)

