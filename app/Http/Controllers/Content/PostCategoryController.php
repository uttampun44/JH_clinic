<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostCategoryRequest;
use App\Models\PostCategory;
use App\Repositories\PostCategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

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
        return Inertia::render('Content/Category/index');
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

            return $this->postCategoryRepositoryInterface->getPostCategoryStore($data);

        } catch (\Throwable $th) {
            Log::error('Unable to create');
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
    public function update(Request $request, PostCategory $postCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostCategory $postCategory)
    {
        $postCategory = $postCategory::findOrFail($postCategory->id);

        if($postCategory)
        {
            $postCategory->delete();

            return to_route('blog-categories.index');
        }
    }
}
