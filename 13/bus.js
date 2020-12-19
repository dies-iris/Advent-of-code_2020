const timestamp = 1000390;
const input = [23,"x","x","x","x","x","x","x","x","x","x","x","x",41,"x","x","x","x","x","x","x","x","x",383,"x","x","x","x","x","x","x","x","x","x","x","x",13,17,"x","x","x","x",19,"x","x","x","x","x","x","x","x","x",29,"x",503,"x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",37];
const testTimestamp = 939;
const test = [7,13,"x","x",59,"x",31,19];
const test1 = [17,"x",13,19];
const test2 = [67, 7, "x",59,61];
const test3 = [1789,37,47,1889];

const findBus = (data, time) => {
    data = data.filter(el => el !== "x");
    console.log(data);
    data.sort((a,b) => b-a);
    let busID = data[0];
    let bestTime = time+data[0];
    data.forEach(id => {
        let t = time;
        while(true){
            if(t%id === 0){
                if(t < bestTime){
                    busID = id;
                    bestTime = t;
                }
                break;
            }
            t++;
        }
    });
    console.log(busID);
    console.log(bestTime);
    return (bestTime-time)*busID;
}

// second part. Works but very slow
const findTimestamp = (data) => {
    let offsets = {};
    data.forEach((el,i) => {
        if(el !== "x"){
            offsets[el] = i;
        }
    })
    data = data.filter(el => el !== "x");
    data.sort((a,b) => b-a);
    console.log(data);
    console.log(offsets);
    let ts = 0;
    let i = 1;
    while(true){
        ts = data[0]*i - offsets[data[0]];
        if(data.every(el => (ts + offsets[el]) % el === 0)){
            break;
        }
        i++;
    }
    return ts;
}

// reddit solution
const consecutiveDeparture = (input) => {
    let buses = input
      .map((id, req) => {
        return id === 'x' ? false : { id: parseInt(id), req }
      })
      .filter(Boolean)
  
    let time = 0
    let multiplier = buses[0].id
    let unsatisfied = 1
    let next
  
    while (unsatisfied < buses.length) {
      time += multiplier
      next = buses[unsatisfied]
  
      if ((time + next.req) % next.id === 0) {
        multiplier *= next.id
        unsatisfied++
      }
    }
    return time
  }

// console.log(findBus(buses, timestamp));
console.log(consecutiveDeparture(input));