var roleLoad = {

    run: function(creep,target) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else{
            if(creep.build(target) == ERR_NOT_IN_RANGE)
                creep.moveTo(target);
        }
	}
};

module.exports = roleLoad;