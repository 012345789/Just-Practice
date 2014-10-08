console.log("JS Opened");

var sort = function (names) {
	var jack_counter = 0;
	var jill_counter = 0;

	i = 0;

	while (i < names.length) {
		if (names[i] === 'jack') {
			jack_counter += 1;
			names.splice(i, 1);
		} else if (names[i] === 'jill') {
			jill_counter += 1;
			names.splice(i, 1);
		} else {
			i += 1;
		}
	}

	var jack_array = Array.apply(null, new Array(jack_counter)).map(String.prototype.valueOf,"jack");
	var jill_array = Array.apply(null, new Array(jill_counter)).map(String.prototype.valueOf,"jill");

	var return_array = jack_array.concat(jill_array.concat(names));
	return return_array
}

sort(['name1', 'name2', 'jack', 'jill', 'jack', 'jack']);
sort(['bob', 'jill', 'jack', 'amanda']);
sort(['bob', 'jill', 'amanda']);
sort(["jack", "jack", "jill", "bob", "amanda"]);

// assumptions: array elements are strings and are all lower case and spelled correctly.