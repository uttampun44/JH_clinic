<?php

namespace App\Repositories;

use App\Models\Post;

interface PostRepositoryInterface
{
    public function getPost();
    public function storePostStore(array $data): Post;
    public function getPostEdit(Post $post): Post;

    public function updatePost(Post $post, array $data): bool;

    public function postDelete(Post $post): bool;
}
