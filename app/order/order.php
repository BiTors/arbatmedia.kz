<?php
namespace App\order;
use App\Models\ems;
use App\Models\PayWalet;
use Illuminate\Support\Facades\Http;

class order
{
    public function Status($data){
        return true;
        $order = urlencode("<b>Заказа:</b>".$data['WMI_PAYMENT_NO']);
        $status = urlencode("<b>Статсу:</b>".$data['WMI_ORDER_STATE']);

        $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$order.$status); // URL
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
        curl_exec($ch); // Делаем запрос
        curl_close($ch); // Завершаем сеанс cURL
    }
    public function ChekOrder(){
        $key="6f64754761386650325f4d4870546d724a74335c6478636a774643";
        // Добавление полей формы в ассоциативный массив
        $fields = array();
        $fields["WMI_MERCHANT_ID"]    = "172357951243";
        $fields["WMI_PAYMENT_AMOUNT"] = "5000";
        $fields["WMI_CURRENCY_ID"]    = "398";
        $fields["WMI_PAYMENT_NO"]     = time();
        $fields["WMI_DESCRIPTION"]    = "BASE64:".base64_encode("Покупка книги ТОК");
        $fields["WMI_SUCCESS_URL"]    = "https://arbatbooks.kz/success";
        $fields["WMI_FAIL_URL"]       = "https://arbatbooks.kz/fail";

        //Сортировка значений внутри полей
        foreach($fields as $name => $val)
        {
            if(is_array($val))
            {
                usort($val, "strcasecmp");
                $fields[$name] = $val;
            }
        }
        // Формирование сообщения, путем объединения значений формы,
        // отсортированных по именам ключей в порядке возрастания.
        uksort($fields, "strcasecmp");
        $fieldValues = "";

        foreach($fields as $value)
        {
            if(is_array($value))
                foreach($value as $v)
                {
                    //Конвертация из текущей кодировки (UTF-8)
                    //необходима только если кодировка магазина отлична от Windows-1251
                    $v = iconv("utf-8", "windows-1251", $v);
                    $fieldValues .= $v;
                }
            else
            {
                //Конвертация из текущей кодировки (UTF-8)
                //необходима только если кодировка магазина отлична от Windows-1251
                $value = iconv("utf-8", "windows-1251", $value);
                $fieldValues .= $value;
            }
        }

        // Формирование значения параметра WMI_SIGNATURE, путем
        // вычисления отпечатка, сформированного выше сообщения,
        // по алгоритму MD5 и представление его в Base64

        $signature = base64_encode(pack("H*", md5($fieldValues . $key)));

        //Добавление параметра WMI_SIGNATURE в словарь параметров формы

        $fields["WMI_SIGNATURE"] = $signature;
        // Формирование HTML-кода платежной формы
        /* print "<form action='https://wl.walletone.com/checkout/checkout/Index' method='POST'>";
         foreach($fields as $key => $val)
         {
             if(is_array($val))
                 foreach($val as $value)
                 {
                     print "$key: <input type='text' name='$key' value='$value'/>";
                 }
             else
                 print "$key: <input type='text' name='$key' value='$val'/>";
         }
         print "<input type='submit'/></form>";*/
        return  $fields;
    }
    public function paymentCash($data){
        if(isset($data['data']['phone'])){
            $order = new PayWalet();
            $order->order = $data['data']['numPay'];
            $order->name = $data['data']['name'];
            $order->delivery = $data['data']['delivery'];
            $order->address = $data['data']['address'];
            $order->phone = $data['data']['phone'];
            $order->status = $data['data']['pay'];
            $order->save();

            $message =  urlencode("<b>***Новый Заказ***</b>"." \n");
            $name =  urlencode("<b>Имя:</b>".$data['data']['name']." \n");
            $phone =  urlencode("<b>Тел:</b>".$data['data']['phone']." \n");
            $address = urlencode("<b>Адресс доставки:</b>".$data['data']['address']." \n");
            $status = urlencode("<b>Оплата:</b>".$data['data']['pay']." \n");
            $delivery = urlencode("<b>Доставка:</b>".$data['data']['delivery']." \n");
            $order = urlencode("<b>Номер заказа:</b>".$data['data']['numPay']);

            $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$message.$name.$phone.$address.$status.$delivery.$order); // URL
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
            curl_exec($ch); // Делаем запрос
            curl_close($ch); // Завершаем сеанс cURL
            return true;
        }
        return false;
    }
    public function paymentOnline($data){
        if(isset($data['data']['phone'])){
            $order = new PayWalet();
            $order->order = $data['data']['numPay'];
            $order->name = $data['data']['name'];
            $order->delivery = $data['data']['delivery'];
            $order->address = $data['data']['address'];
            $order->phone = $data['data']['phone'];
            $order->status = $data['data']['pay'];
            $order->save();

            $message =  urlencode("<b>***Новый Заказ***</b>"." \n");
            $name =  urlencode("<b>Имя:</b>".$data['data']['name']." \n");
            $phone =  urlencode("<b>Тел:</b>".$data['data']['phone']." \n");
            $address = urlencode("<b>Адресс доставки:</b>".$data['data']['address']." \n");
            $status = urlencode("<b>Оплата:</b>".$data['data']['pay']." \n");
            $delivery = urlencode("<b>Доставка:</b>".$data['data']['delivery']." \n");
            $order = urlencode("<b>Номер заказа:</b>".$data['data']['numPay']);

            $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$message.$name.$phone.$address.$status.$delivery.$order); // URL
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
            curl_exec($ch); // Делаем запрос
            curl_close($ch); // Завершаем сеанс cURL
            return true;
        }
        return false;
    }
    public function paymentOnlineEms($data){
        if(isset($data['data']['phone'])){
            $order = new ems();
            $order->order = $data['data']['numPay'];
            $order->name = $data['data']['name'];
            $order->delivery = $data['data']['delivery'];
            $order->phone = $data['data']['phone'];
            $order->status = $data['data']['pay'];

            $order->obl = $data['data']['obl'];
            $order->strit = $data['data']['strit'];
            $order->home = $data['data']['home'];
            $order->zip = $data['data']['zip'];
            $order->city = $data['data']['city'];
            $order->aps = $data['data']['aps'];
            $order->save();


            $message =  urlencode("<b>***Новый Заказ***</b>"." \n");
            $name =  urlencode("<b>Имя:</b>".$data['data']['name']." \n");
            $phone =  urlencode("<b>Тел:</b>".$data['data']['phone']." \n");
            $status = urlencode("<b>Оплата:</b>".$data['data']['pay']." \n");
            $delivery = urlencode("<b>Доставка:</b>".$data['data']['delivery']." \n");
            $order = urlencode("<b>Номер заказа:</b>".$data['data']['numPay']);
            $obl = urlencode("<b>Область:</b>".$data['data']['obl']);
            $strit = urlencode("<b>Улица/Микрорайон:</b>".$data['data']['strit']);
            $home = urlencode("<b>Дом:</b>".$data['data']['home']);
            $zip = urlencode("<b>Почтовый индекс:</b>".$data['data']['zip']);
            $city = urlencode("<b>Город:</b>".$data['data']['city']);
            $aps = urlencode("<b>Аппартаменты:</b>".$data['data']['aps']);

            $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&parse_mode=HTML&text='.$message.$name.$phone.$status.$delivery.$order.$obl.$strit.$home.$zip.$city.$aps); // URL
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
            curl_exec($ch); // Делаем запрос
            curl_close($ch); // Завершаем сеанс cURL
            return true;
        }
        return false;
    }
}
