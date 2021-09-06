const gridTraveler = (x, y)   => {
    if ( x == 1 && y == 1 ) return 1
    if (x == 0 || y == 0) return 0
    return gridTraveler(x - 1, y) + gridTraveler(x, y - 1)
} 

console.log(gridTraveler(1, 1))

