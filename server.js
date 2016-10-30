// 
// This is aserver side function
//

var faker = Npm.require('faker');				// NPM package for use inside package only
faker1 = Npm.require('faker');					// NPM package which can be exported

testServerFunction = function(){
	return "mpk-demo: Test Server Function";
}

fakeName = function(){
	return faker.name.findName();
}
