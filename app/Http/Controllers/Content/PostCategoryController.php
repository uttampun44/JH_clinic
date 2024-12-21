<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\Content\PostCategoryRequest;
use App\Models\PostCategory;
use App\Repositories\PostCategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Str;


class PostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function __construct(public PostCategoryRepositoryInterface $postCategoryRepositoryInterface)
     {
        $this->postCategoryRepositoryInterface = $postCategoryRepositoryInterface;
     }
    public function index()
    {
        $datas = $this->postCategoryRepositoryInterface->getPostCategory();

        return Inertia::render('Content/Category/Index', compact('datas'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostCategoryRequest $request)
    {

        try {

            $data = $request->validated();

            $data['meta_title'] = Str::slug($data['title']);
            $data['slug'] = Str::slug($data['title']);

        
            $this->postCategoryRepositoryInterface->storePostCategory($data);

            return to_route('blog-categories.index');

        } catch (\Throwable $th) {
            Log::error('Unable to create' . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(PostCategory $postCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PostCategory $postCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostCategoryRequest $request, PostCategory $postCategory)
    {
        try {
         
            $data = $request->validated();

            $data['meta_title'] = Str::slug($data['title']);
            $data['slug'] = Str::slug($data['title']);

            $this->postCategoryRepositoryInterface->updatePostCategory($postCategory, $data);

            return to_route('blog-categories.index');

        } catch (\Throwable $th) {
            Log::error('Unable to update' . $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostCategory $postCategory, $id)
    {
      
        $delete = PostCategory::findOrFail($id);

        if($delete)
        {
            $delete->delete();
        }

        return to_route('blog-categories.index');
    }
}
