<?php

namespace App\Repositories;

use App\Models\Post;

interface PostRepositoryInterface
{
    public function getPost();
    public function getPostStore(array $data): Post;
    public function getPostEdit(Post $post): Post;

    public function getPostUpdate(Post $post, array $data): bool;

    public function getPostDelete(Post $post): bool;
}
