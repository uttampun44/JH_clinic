<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    protected $table = 'roles';
    protected $fillable = ['name', 'display_name', 'guard_name'];

    public function users():BelongsToMany
    {
        return $this->belongsToMany(User::class, 'role_users');
    }

    public function permissions():BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'role_permissions');
    }
}
