<?php

require_once __DIR__.'/vendor/autoload.php';
use Doctrine\DBAL\Connection;
use Silex\Provider\DoctrineServiceProvider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app->register(new DoctrineServiceProvider(),
['db.options' => ['driver' => 'pdo_mysql', 'dbname' => 'clicker', 'charset' => 'utf8']]);

$app->get('/allClicks', function () use ($app) {
    $conn = $app['db'];
	$clicks = $conn->fetchAll('select * from click');

	return $app->json($clicks);
});

$app->get('/clickByid', function (Request $request) use ($app) {
	$params['id'] = $request->get('id');
	
	$conn = $app['db'];
	
	$query = $conn->prepare("SELECT * FROM `click` WHERE id=:id");
	$query->execute($params);
	$clickInfo = $query->fetch();
	
	return $app->json($clickInfo);
});

$app->post('/click', function (Request $request) use ($app) {
    $params = json_decode($request->getContent(), true);
	$params['id'] = $verify_param['id'] = md5($params['remote_ref'].$params['remote_ua'].$params['remote_ip'].$params['param1']);
	
	$conn = $app['db'];
	
	$verify_domain_query = $conn->prepare("SELECT * FROM `bad_domains` WHERE name=:name");
	$verify_domain_query->execute(array('name'=>$params['remote_ref']));
	$is_bad_refer = $verify_domain_query->fetchAll();
	if($is_bad_refer){
		$params['bad_domain'] = 1;
	}
	else{
		$params['bad_domain'] = 0;
	}
	
	$verify_query = $conn->prepare("SELECT id, bad_domain FROM `click` WHERE id=:id");
	$verify_query->execute($verify_param);
	$verify_res = $verify_query->fetchAll();

	$insert = $conn->prepare("INSERT INTO `click` (`id`, `ua`, `ip`, `ref`, `param1`, `param2`) 
								VALUES (:id, :remote_ua, :remote_ip, :remote_ref, :param1, :param2)
								ON DUPLICATE KEY 
								UPDATE `click`.error=`click`.`error`+1, `click`.`bad_domain` = :bad_domain ;");
	$insert->execute($params);
	
	if($verify_res){
		$result['id'] = $params['id'];
		$result['bad_domain'] = $params['bad_domain'];
		$result['success'] = 0;
	}
	else{
		$result['id'] = $params['id'];
		$result['success'] = 1;
	}
	
	return $app->json($result);
});

$app->run();
