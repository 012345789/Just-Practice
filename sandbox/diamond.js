function diamond(integer) {
    if (integer % 2 !== 1 || integer <= 0) {
        console.log("Input must be a positive odd integer");
        return "Input must be a positive odd integer";
    }

    var i = 2,
        stars = "*",
        spaces = Array(((integer - 1)/2) + 1).join(" ");

    for (i; i < integer; i+= 2) {
        console.log(spaces + stars);
        stars += "**";
        spaces = spaces.substr(0, spaces.length - 1);
    }

    for (i; i > 1; i-= 2) {
        console.log(spaces + stars);
        stars = stars.substr(0, stars.length - 2);
        spaces += " ";
    }

}

return diamond(13);