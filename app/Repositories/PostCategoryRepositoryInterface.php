<?php


namespace App\Repositories;

use App\Models\PostCategory;

interface PostCategoryRepositoryInterface
{
    public function getPostCategory();
    public function getPostCategoryStore(array $data): PostCategory;
    public function getPostCategoryEdit(PostCategory $postCategory): PostCategory;

    public function getPostCategoryUpdate(PostCategory $postCategory, array $data): bool;
}
