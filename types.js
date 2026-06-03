// type will be pascal case
// to avoid repitition in code we use type
var employee = {
    id: 1,
    name: 'Sanyukta',
    retire: function (date) {
        console.log(date);
    }
};
employee.retire(new Date());
