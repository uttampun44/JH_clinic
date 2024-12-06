<?php
namespace App\Enums;

enum StatusEnum:string
{
 case Pending = 'Pending';
 case Completed = 'Completed';
 case Cancelled  = 'Cancelled';
}