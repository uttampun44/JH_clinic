<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostCategory extends Model
{
    protected $table = "post_categories";

    protected $fillable = ['title', 'meta_title', 'slug'];
}
