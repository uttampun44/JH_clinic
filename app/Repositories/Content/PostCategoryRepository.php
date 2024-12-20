<?php

namespace App;

use App\Models\PostCategory;
use App\Repositories\PostCategoryRepositoryInterface;

class PostCategoryRepository implements PostCategoryRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public PostCategory $postCategory)
    {
        //
    }

    public function getPostCategory()
    {

    }

    public function getPostCategoryStore(array $data): PostCategory
    {
         return $this->postCategory->store($data);
    }

    public function getPostCategoryEdit(PostCategory $postCategory): PostCategory
    {
        return $postCategory;
    }

    public function getPostCategoryUpdate(PostCategory $postCategory, array $data): bool
    {
        return $this->postCategory->update($data);
    }
}
