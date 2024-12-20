<?php

namespace App;

use App\Models\Post;
use App\Repositories\PostRepositoryInterface;

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

    public function getPostStore(array $data): Post
    {
        return $this->post->create($data);
    }

    public function getPostEdit(Post $post): Post
    {
      return $post;
    }

    public function getPostUpdate(Post $post, array $data): bool
    {
      return $post->update($data);
    }

    public function getPostDelete(Post $post): bool
    {
       return $post->delete();
    }
}
