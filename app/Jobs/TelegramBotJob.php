<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;

class TelegramBotJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private $formData;
        public function __construct(Request $request)
    {
        $this->formData = $request->get('data');

    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
         $message = $this->formData->message;
         $ch = curl_init('https://api.telegram.org/bot1968228224:AAFQ5k8-qhyqGTl_xpy9JRI7V_Craa7Urbc/sendMessage?chat_id=-1001567495529&text='.$message); // URL
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
         curl_exec($ch); // Делаем запрос
         curl_close($ch); // Завершаем сеанс cURL
    }
}
