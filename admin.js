var app = angular.module('admin', []);

app.controller('postController', function($scope){
	var post = this;
	post.textArea = '';
	$scope.paragraphs = [];
	post.textSubmit = '';

	post.add = function(){
		if(post.textArea !== ''){
			$scope.paragraphs.push({'text':post.textArea});
			post.textArea = '';	
		}
		else{
			alert('the paragraph cannot be empty');
		}		
	};

	post.remove = function(index){
		$scope.paragraphs.splice(index,1);
	};

	$scope.$watch('paragraphs', function (newValue, oldValue, scope) {
    	post.textSubmit = '';
		for (var i=0; i<newValue.length; i++) {
			post.textSubmit += newValue[i]['text']+'^';
		};
	},true);
});