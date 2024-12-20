<?php

namespace App\Repositories\Content;

use App\Models\PostCategory;
use App\Repositories\PostCategoryRepositoryInterface;


class PostCategoryRepository implements PostCategoryRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public PostCategory $postCategory)
    {
        
    }

    public function getPostCategory()
    {
        return PostCategory::paginate(10);
    }

    public function storePostCategory(array $data):PostCategory
    {
       
        return $this->postCategory->create($data);
    }

    public function editPostCategory(PostCategory $postCategory): PostCategory
    {
        return $postCategory;
    }

    public function updatePostCategory(PostCategory $postCategory, array $data): bool
    {
        return $postCategory->update($data);
    }

    public function deletePostCategory(PostCategory $postCategory)
    {
        
    }
}
