"use strict";

bindEventHandler("OnResourceStart", thisResource, (event,resource) => {
	let car = gta.createVehicle(101, new Vec3(-366.94, 239.359, 62.654));
});

addEventHandler("OnPlayerJoined", (event,client) => {
	let skin = Math.floor(Math.random() * 78);
	if (skin >= 26)
		skin += 4;
	spawnPlayer(client, [-362.94, 239.359, 60.654], 0, skin);
	fadeCamera(client, true);
});
