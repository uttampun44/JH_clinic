<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = "posts";

    protected $fillable = ['title', 'meta_tile', 'slug', 'tags', 'short_summary', 'summary', 'image'];
}
