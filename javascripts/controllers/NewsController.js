app.controller("NewsController", ['$scope', function ($scope)
{
	var newslist = [
        {
            time: "2016-11-17",
            text: "Creazione del sito e degli strumenti Social"
        },
	];
	
	$scope.events = [
		{
            time: "2016-11-23",
            text: "Prima sessione di lavoro",
            link: "#"
		}
	]
	
	$scope.list = [];
	for(var i=0; i < newslist.length; i++)
	{
		$scope.list[i] = newslist[newslist.length - 1 - i];
	};
}]);
