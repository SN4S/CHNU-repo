function ts2() {
    let colors = ["червоний", "синій", "зелений", "жовтий", "оранжевий","світло синій", "темно синій"];
    console.log(colors)


    let lgcolor = colors.reduce((a, b) => (b.length > a.length ? b : a));
    let shcolor = colors.reduce((a, b) => (b.length < a.length ? b : a));

    console.log( lgcolor , " |||||| ", shcolor);


    colors = colors.filter(color => color.includes("синій"));

    let joinedColors = colors.join(" , ");

    console.log( joinedColors);
}