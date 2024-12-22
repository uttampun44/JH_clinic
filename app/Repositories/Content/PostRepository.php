<?php

namespace App\Repositories\Content;

use App\Models\Post;
use App\Repositories\PostRepositoryInterface;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;

class PostRepository implements PostRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct(public Post $post)
    {
        //
    }

    public function getPost()
    {

    }

    public function storePostStore(array $data): Post
    {

        if(isset($data['slug']) && $data['slug'])
        {
            $data['slug'] = Str::slug($data['title']);
        }

        if(isset($data['image']) && $data['image'] instanceof UploadedFile)
        {
            $data['image'] = uploadImage($data['image']);
        }

        return $this->post->create($data);
    }

    public function getPostEdit(Post $post): Post
    {
        return $post;
    }

    public function updatePost(Post $post, array $data): bool
    {
         return $post->update($data);
    }

    public function postDelete(Post $post): bool
    {
         return $post->delete();
    }
}
