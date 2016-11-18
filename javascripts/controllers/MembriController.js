app.controller("MembriController", ['$scope', function($scope)
{
	var membrilist = [
		{
			name: "Balugani Lorenzo",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Casari Giovanni",
			desc: "Descrizione Qui).",
			icon: "",
		},
		{
			name: "Borghi Martina",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Torrini Edoardo",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Pietro",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Mario Benito Totaro",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Federico Ipocoana",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Alexander Magnaye",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Lupo",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Professoressa Marassi Lorena",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Professoressa Manzini Emanuela",
			desc: "Descrizione Qui",
			icon: "",
		},
		{
			name: "Pigozzi Stefano",
			desc: "Programmatore, ha creato il css e il sito base dal quale questo si è sviluppato.",
			icon: "",
		},
	]
	
	$scope.membri = [];
	
	for(var i=0; i < Math.ceil(membrilist.length) / 3; i++)
	{
		if(membrilist[i * 3] && membrilist[i * 3 + 1] && membrilist[i * 3 + 2])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1], membrilist[i * 3 + 2]];
		}
		else if(membrilist[i * 3] && membrilist[i * 3 + 1])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1]];
		}
		else if(membrilist[i * 3])
		{
			$scope.membri[i] = [membrilist[i * 3]];
		}
	};
}]);