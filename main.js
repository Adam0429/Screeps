var roleHarvester = require('role.harvester');

module.exports.loop = function () {
    var index = 1;
    if(Game.spawns['Spawn1'].energy >= 300 && Game.creeps.length < 5){ 
        var name = 'worker' + index;
        Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE , MOVE], name);
        index = index + 1;
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}  
