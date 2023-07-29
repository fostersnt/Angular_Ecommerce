interface Point{
    x: number,
    y: string
}


function lg(point: Point) {
    console.log(point.y + ' is ' + point.x);
}


lg({
    x: 2,
    y: 'Your age'
});