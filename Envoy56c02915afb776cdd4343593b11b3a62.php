<?php $file = isset($file) ? $file : null; ?>
<?php $on = isset($on) ? $on : null; ?>
<?php $release = isset($release) ? $release : null; ?>
<?php $date = isset($date) ? $date : null; ?>
<?php $chmods = isset($chmods) ? $chmods : null; ?>
<?php $branch = isset($branch) ? $branch : null; ?>
<?php $repo = isset($repo) ? $repo : null; ?>
<?php $current = isset($current) ? $current : null; ?>
<?php $path = isset($path) ? $path : null; ?>
<?php $timezone = isset($timezone) ? $timezone : null; ?>
<?php $user = isset($user) ? $user : null; ?>
<?php
$user = 'dagna';
$timezone = 'Asia/Almaty';
$path = '/var/www/dagna ';
$current = $path . '/current';
$repo = 'git@github.com:BiTors/dagna.git';
$branch = 'master';

$chmods = [
'storage/logs'
];
$date = new DateTime('now',new DateTimeZone($timezone));
$release  = $path.'/release/'.$date->format('YmdHis');
?>

<?php $__container->servers(['production'=>$user . @45.149.128.57]); ?>

<?php $__container->startTask('clone',['on'=>$on]); ?>;
    mkdir -p <?php echo $release; ?>

git clone --depth 1 -d <?php echo $branch; ?> "<?php echo $repo; ?>" <?php echo $release; ?>

echo "#1 -Repository has been cloned"
<?php $__container->endTask(); ?>
<?php $__container->startTask('composer',['on'=>$on]); ?>
    composer self-update
    cd<?php echo $release; ?>

    composer install --no-interaction --no-dev --prefer-dist
    echo "#2 - Composer dependencies have been installed"
<?php $__container->endTask(); ?>

<?php $__container->startTask('artisan',['on'=>$on]); ?>
cd<?php echo $release; ?>

ln -nfs <?php echo $path; ?>/.env .env
chgrp -h www-data .env
 php artisan config:clear
php artisan migrate
php artisan clear-compiled --env=production;
php artisan optimize --env=production;
echo "#3 - Production"
<?php $__container->endTask(); ?>

<?php $__container->startTask('chmod',['on'=>$on]); ?>
chgrp -R www-data <?php echo $release; ?>;
chmod -R ug+rwx <?php echo $release; ?>;
<?php foreach ($chmods as $file): ?>
    chmod -R 775 <?php echo $release; ?>/<?php echo $file; ?>

    chown -R <?php echo $user; ?>:www-data <?php echo $release; ?>/<?php echo $file; ?>

    echo "#4 - <?php echo $file; ?>"
<?php $__container->endTask(); ?>

    <?php $__container->startTask('update_symlinks'); ?>
    ln -nfs <?php echo $release; ?> <?php echo $current; ?>;
    chgrp -h www-data <?php echo $current; ?>;
    echo "#5 - Symlinks"
        <?php $__container->endTask(); ?>
    <?php $__container->startMacro('deploy',['on'=>'production']); ?>
    clone
    composer
    artisan
    chmod
    update_symlinks
    <?php $__container->endMacro(); ?>


