module.exports.loop = function(){
    // Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1' );
    var creep = Game.creeps['Harvester1'];
    var source = creep.room.find(FIND_SOURCES);
    if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
        creep.moveTo(source[0]);
    }
}