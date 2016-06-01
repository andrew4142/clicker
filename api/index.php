<?php

require_once __DIR__.'/vendor/autoload.php';
use Doctrine\DBAL\Connection;
use Silex\Provider\DoctrineServiceProvider;

$app = new Silex\Application();

$app->register(new DoctrineServiceProvider(),
['db.options' => ['driver' => 'pdo_mysql', 'dbname' => 'clicker', 'charset' => 'utf8']]);

$app->get('/hello', function () use ($app) {
    $conn = $app['db'];
	$students = $conn->fetchAll('select * from test');

	return $app->json($students);
});

$app->get('/click', function () use ($app) {
    return $app->json('Hello!');
});

$app->run();
