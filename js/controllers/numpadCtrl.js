var CalculatorApp = angular.module('CalculatorApp');

//Controller for calculator. Can handle press for buttons and calculate result of operations
CalculatorApp.controller("numpadController", function ($scope, $numpadConfig) {
	$scope.digits = $numpadConfig.digits;
	$scope.operations = $numpadConfig.operations;
    $scope.operationResult = 0;
    $scope.newNumber = true;
    $scope.firstNumber = 0;
    $scope.operation = false;
    
	//if clicked on some number
    $scope.digitClick = function (digit){
		if ($scope.newNumber){
			//if first pressed '.' not clear input fully
			if(digit == '.'){
				$scope.operationResult = 0+digit.toString();
			}
			else{
				$scope.operationResult = digit.toString();
			}
			$scope.newNumber = false;
		}
		else{
			$scope.operationResult += digit.toString();
		}
    };
    
	//if clicked on some operation
    $scope.operationClick = function (operation){
        $scope.operation = operation;
		$scope.firstNumber = parseFloat($scope.operationResult);
		$scope.newNumber = true;
    };
    
	//calculate result of operation
    $scope.getResult = function (){
		if($scope.operationResult && $scope.operation && $scope.firstNumber){
			var secondNumber  = $scope.operationResult;

			switch($scope.operation) {
			case "Add":
				$scope.operationResult = $scope.firstNumber + parseFloat(secondNumber);
				break;
			case "Minus":
				$scope.operationResult = $scope.firstNumber - parseFloat(secondNumber);
				break;
			case "Multiply":
				$scope.operationResult = $scope.firstNumber * parseFloat(secondNumber);
				break;
			case "Divide":
				$scope.operationResult = $scope.firstNumber / parseFloat(secondNumber);
				break;
			}
		}
    };
	
	//clear input and all operations
	$scope.clearResults = function (){
		$scope.operationResult = 0;
		$scope.newNumber = true;
		$scope.firstNumber = 0;
		$scope.operation = false;
	}
})
