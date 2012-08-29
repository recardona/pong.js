function test() {
    testSet();
}

function testSet() {
    
    var numberSet = new Set();
    
    numberSet.add(1);
    numberSet.add(1);
    if(numberSet.size() != 1) {
        throw "Size of Set should not change with repeated elements.";
    }
    
    numberSet.remove(1);
    if(numberSet.size() != 0) {
        throw "Size of Set should be reduced when removing element.";
    }
    
    numberSet.add(1);
    numberSet.remove(2);
    if(numberSet.size() != 1) {
        throw "Size of Set should not change when removing non existent elements.";
    }
    numberSet.remove(1);
    
    numberSet.add(12);
    numberSet.add(11);
    var twelve = numberSet.get(0);
    if(!twelve.equals(12)) {
        throw "Index element 0 should be 12";
    }
    
    alert("testSet.js succeded!");
    
    
}





