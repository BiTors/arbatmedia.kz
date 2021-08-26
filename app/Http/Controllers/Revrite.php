<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Revrite extends Controller
{
    public function translate(Request $request){
        $text = mb_convert_encoding($request->data['data'], 'utf-8', mb_detect_encoding($request->data['data']));


        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=en&textType=html&includeSentenceLength=false&profanityAction=NoAction&from=ru&includeAlignment=true",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "[\r
                {\r
                    \"Text\": \"$text\"\r
                }\r
            ]",
            CURLOPT_HTTPHEADER => [
                'content-type: application/json',
                'x-rapidapi-host: microsoft-translator-text.p.rapidapi.com',
               'x-rapidapi-key: 693373bd52mshd2b11b32dcf4113p19fee5jsn3550832ab253'
            ],
        ]);

        $response = curl_exec($curl);



            $textTranslate =  json_decode($response);

            $textEn = $textTranslate[0]->translations[0]->text;


        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-inference.huggingface.co/models/tuner007/pegasus_paraphrase',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>'{"inputs":'.$textEn.'}',
            CURLOPT_HTTPHEADER => array(
                'num_return_sequences: 10',
                'num_beams: 10',
                'num: 10',
                'beams: 10',
                'Authorization: Bearer api_XdqxHzYDuYrTjalXRcfJnslpGaDcakinWV',
                'Content-Type: application/json'
            ),
        ));

        $rewrite = curl_exec($curl);
        $rewriteEn = json_decode($rewrite);
        $rewriteBeforeTranslate = $rewriteEn[0]->generated_text;

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=ru&textType=plain&includeSentenceLength=false&profanityAction=NoAction&from=en&includeAlignment=true",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "[\r
                {\r
                    \"Text\": \"$rewriteBeforeTranslate\"\r
                }\r
            ]",
            CURLOPT_HTTPHEADER => [
                'content-type: application/json',
                'x-rapidapi-host: microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-key: 693373bd52mshd2b11b32dcf4113p19fee5jsn3550832ab253'
            ],
        ]);

        $responseEnd = curl_exec($curl);
        curl_close($curl);
        $textTranslateRu =  json_decode($responseEnd);
        $textRu = $textTranslateRu[0]->translations[0]->text;
        return response($textRu);
    }

    public function rewrite(Request $request)
    {
        $text = $request->data['data'];

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://www.paraphraser.io/frontend/rewriteArticleBeta/',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array('mode' => '2','data' => $text,'lang' => 'ru','code' => '0'),
            CURLOPT_HTTPHEADER => array(
                'Cookie: ci_session=l43et1mhe69cu8cbief6fmpelapotu1t'
            ),
        ));
        $response = json_decode(curl_exec($curl));
        curl_close($curl);
        $newstr = $response->paraphrase;
        return response($newstr);
    }
}
