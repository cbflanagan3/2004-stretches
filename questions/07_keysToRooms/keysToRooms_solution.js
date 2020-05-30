const keysToRooms = (rooms) => {

let keyRing = {0: true};
for (let i = 0; i < rooms.length; i++) {
    if(keyRing[i]) {
        rooms[i].forEach(key=>{
            keyRing[key] = true;
        });
    } else {
        return false;
    }
} 
return true;
}