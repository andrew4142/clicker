<html ng-app="ClickerApp" >
	<head>
		<meta charset="utf-8" />
		<script type="text/javascript">
			var remote_ref = "<?=$_SERVER['HTTP_REFERER']?>";
			var remote_ua = "<?=$_SERVER['HTTP_USER_AGENT']?>";
			var remote_ip = "<?=$_SERVER['REMOTE_ADDR']?>";
		</script>
		<script src="/js/angular.js" type="text/javascript"></script>
		<script src="/js/angular-route.js" type="text/javascript"></script>
		<script src="/js/app.js" type="text/javascript"></script>
		<script src="/js/controllers/ClickController.js" type="text/javascript"></script>
		<script src="/js/controllers/IndexController.js" type="text/javascript"></script>
		<script src="/js/controllers/SuccessController.js" type="text/javascript"></script>
		<script src="/js/controllers/ErrorController.js" type="text/javascript"></script>
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/sandstone/bootstrap.min.css">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
		
		<base href="/">
	</head>
	
	<body>
		<ng-view> </ng-view>
	</body>
</html>
