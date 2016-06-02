<html ng-app="ClickerApp" >
	<head>
		<meta charset="utf-8" />
		<script type="text/javascript">
			console.log("<?=$_SERVER['HTTP_REFERER']?>");
		</script>
		<script src="/js/angular.js" type="text/javascript"></script>
		<script src="/js/angular-route.js" type="text/javascript"></script>
		<script src="/js/app.js" type="text/javascript"></script>
		<script src="/js/controllers/ClickController.js" type="text/javascript"></script>
		<script src="/js/controllers/IndexController.js" type="text/javascript"></script>
		<script src="/js/controllers/SuccessController.js" type="text/javascript"></script>
		
		<base href="/">
	</head>
	
	<body>
		<ng-view> </ng-view>
	</body>
</html>
