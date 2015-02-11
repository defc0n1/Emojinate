Meteor.publish('storySingle', function(storyId){
	return Stories.find(storyId);
})

Meteor.publish('userStories', function(){
	return Stories.find({author: this.userId});
})

Meteor.publish('publishedStories', function(limit){
	if (limit > Stories.find({published: true}).count()) {
	    limit = 0;
	}
	
	return Stories.find({published: true}, {limit: limit});
})