<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostCategoryID extends Model
{
    protected $table = ['post_categories_ids'];

    protected $fillable = [
        'post_category_id', 'post_id'
    ];
}
