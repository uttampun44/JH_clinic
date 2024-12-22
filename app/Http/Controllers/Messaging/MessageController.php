<?php

namespace App\Http\Controllers\Messaging;

use App\Http\Controllers\Controller;
use App\Repositories\MessageRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function __construct(public MessageRepositoryInterface $messageRepositoryInterface) {
        $this->messageRepositoryInterface = $messageRepositoryInterface;
    }

    public function getMessages()
    {
        return Inertia::render('Messaging/Index');
    }
}
