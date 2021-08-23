@setup
$user = 'dagna';
$timezone = 'Asia/Almaty';
$path = '/var/www/dagna';
$current = $path.'/current';
$repo = 'git@github.com:BiTors/dagna.kz.git';
$branch = 'master';

$chmods = [
'storage/logs'
];
$date = new DateTime('now',new DateTimeZone($timezone));
$release  = $path.'/release/'.$date->format('YmdHis');
$releaseUpdate  = $path.'/release/20210823022747/';
@endsetup

@servers(['production'=>[$user.'@45.149.128.57']])



@task('clone',['on'=>$on])
    mkdir -p {{$release}}
    git clone --depth 1 -b {{$branch}} "{{$repo}}" {{$release}}
    echo "#1 -Repository has been cloned"
@endtask



@task('composer',['on'=>$on])
    cd {{$release}}
    composer install --no-interaction --no-dev --prefer-dist
    echo "#2 - Composer dependencies have been installed"
@endtask

@task('artisan',['on'=>$on])
    cd {{$release}}
    ln -nfs {{$path}}/.env .env;
    chgrp -h www-data .env;
     php artisan config:clear
    php artisan migrate --force
    echo "#3 - Production"
@endtask

@task('chmod',['on'=>$on])
    chgrp -R www-data {{$release}};
    chmod -R ug+rwx {{$release}};

    @foreach ($chmods as $file)
        chmod -R 775 {{$release}}/{{$file}}
        chown -R {{$user}}:www-data {{$release}}/{{$file}}
        echo "permissions - {{$file}}"
    @endforeach
    echo "#4 - {{$file}}";
@endtask

@task('update_symlinks')
    ln -nfs {{$release}} {{$current}};
    chgrp -h www-data {{$current}};
    echo "#5 - Symlinks";
@endtask

@macro('deploy',['on'=>'production'])
    clone
    composer
    artisan
    chmod
    update_symlinks
@endmacro

@task('update',['on'=>$on])
    cd {{$current}}
    git reset --hard HEAD
    git pull origin master
    echo "#1 -Repository has been update"
@endtask

@task('artisan_update',['on'=>$on])
    cd {{$releaseUpdate}}
    php artisan config:clear
    php artisan migrate --force
    echo "#2 - Production-update"
@endtask

@task('npm',['on'=>$on])
    cd {{$releaseUpdate}}
    npm run prod
    echo "#3 - npm prod"
@endtask

@macro('d_update',['on'=>'production'])
    update
    artisan_update
    npm
@endmacro




