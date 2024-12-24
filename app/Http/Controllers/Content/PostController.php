<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\Content\PostRequest;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostCategoryID;
use App\Repositories\PostRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function __construct(public PostRepositoryInterface $postRepositoryInterface)
     {
        $this->postRepositoryInterface = $postRepositoryInterface;
     }
    public function index()
    {
        $data =  $this->postRepositoryInterface->getPost();

        return Inertia::render('Content/Post/Index');
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $post_category = PostCategory::select('id', 'title')->get();

        return Inertia::render('Content/Post/Create', compact('post_category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostRequest $request)
    {
        DB::beginTransaction();
        try {
         
            $data = $request->validated();
        
         
          $posts =  $this->postRepositoryInterface->storePostStore($data);

            if(isset($data['title']) && $data['title'])
            {
                PostCategoryID::create([
                    'post_category_id' => $data['title'],
                    'post_id' => $posts->id
                ]);
            }
    
            
            DB::commit();
            return to_route('blog-post.index')->with('success', 'Post created successfully.');

        } catch (\Throwable $th) {
            Log::error('Unable to create post: ' . $th->getMessage(), [
                'request_data' => $request->all(),
            ]);
    
            DB::rollBack();

            return back()->withErrors(['error' => 'Unable to create post. Please try again.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Content/Post/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {

    }
}
