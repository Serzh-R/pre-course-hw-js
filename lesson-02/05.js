const passport = {
	name: 'Petr',
	surname: 'Petrov',
};

const copyPassport = Object.assign({}, passport);

copyPassport.name = 'Ivan';

console.log(passport.name);
console.log(copyPassport.name);
