<?php

namespace App\Repositories;

use App\Models\PostCategory;

interface PostCategoryRepositoryInterface{
    
    public function getPostCategory();

    public function storePostCategory(array $data):PostCategory;

    public function editPostCategory(PostCategory $postCategory):PostCategory;

    public function updatePostCategory(PostCategory $postCategory, array $data):bool;

    public function deletePostCategory(PostCategory $postCategory);

}