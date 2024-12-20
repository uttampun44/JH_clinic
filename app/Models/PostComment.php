<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    protected $table = "post_comments";

    protected $fillable = ['post_id', 'user_id', 'comment'];
}
