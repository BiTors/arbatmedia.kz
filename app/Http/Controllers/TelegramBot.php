<?php

namespace App\Http\Controllers;

use App\Jobs\TelegramBotJob;
use Illuminate\Http\Request;

class TelegramBot extends Controller
{
    public function Bot( Request $request)
    {
        $contact = '';
        $message =  urlencode("<b>***СООБЩЕНИЕ DAGNA.KZ***</b>\n");
        $name =  urlencode("<b>Имя:</b>".$request->data['name']['Name']."\n");
        $type =  urlencode("<b>Услуга:</b>".$request->data['ser']."\n");
        $typeSub =  urlencode("<b>Тип услуги:</b>".$request->data['subDer']."\n");
        $call =  urlencode("<b>***СПОСОБ СВЯЗИ***</b>\n");
        foreach($request->data['name'] as $key => $items){
            if($key == 'tel' && $items != ''){
                $contact = urlencode("<b>Телефон:</b>".$request->data['name']['tel']."\n");
            }
            if($key == 'wp' && $items != '' ){
                $contact  .= urlencode("<b>WhatsApp:</b>".$request->data['name']['wp']."\n");
            }
            if($key == 'tg' && $items != '' ){
                $contact  .= urlencode("<b>Telegram:</b>".$request->data['name']['tg']."\n");
            }
            if($key == 'vk' && $items != '' ){
                $contact  .= urlencode("<b>Вконтакте:</b>".$request->data['name']['vk']."\n");
            }
            if($key == 'fb' && $items != '' ){
                $contact  .= urlencode("<b>Facebook:</b>".$request->data['name']['fb']."\n");
            }
        }
        $title =  urlencode("<b>***КОММЕНТАРИЙ К ЗАКАЗУ***</b>\n");
        $mes =  $request->data['message'] ?? '';



        $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$message.$name . $type. $typeSub .$call . $contact. $title. $mes); // URL
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
        curl_exec($ch); // Делаем запрос
        curl_close($ch); // Завершаем сеанс cURL
        //TelegramBotJob::dispatch($request);
    }
    public function botOne(Request $request)
    {
        $message =  urlencode("<b>***СООБЩЕНИЕ DAGNA.KZ***</b>\n");
        $name =  urlencode("<b>Имя:</b>".$request->data['name']."\n");
        $email =  urlencode("<b>Email:</b>".$request->data['email']."\n");
        $phone =  urlencode("<b>Тел:</b>".$request->data['phone']);

        $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$message.$name.$email.$phone); // URL
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
        curl_exec($ch); // Делаем запрос
        curl_close($ch); // Завершаем сеанс cURL
        //TelegramBotJob::dispatch($request);
    }
}
