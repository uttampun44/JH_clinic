<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccountRequest;
use App\Models\RoleUser;
use App\Models\User;
use App\Models\UserProfile;
use App\Repositories\PatientRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
  
  public function createAccount(AccountRequest $request)
  {
   
     DB::beginTransaction();
    try {
      
     $data = $request->validated();

      $user =  User::create([
            'name' => $request->name,
            'email' => $data['email'],
            'password' => Hash::make($request->password),
        ]);

        
        RoleUser::create([
            'role_id' => $request->role_id,
            'user_id' => $user->id,
        ]);

       
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $data['image'] = uploadImage($data['image']);
        }

        UserProfile::create([
            'user_id' => $user->id,
            'image' => $data['image'],
        ]);
       
        DB::commit();
        return to_route('patients.index')->with('success', 'Account created successfully!');

      } catch (\Throwable $th) {
        return redirect()->back()->with('error', 'Failed to create account. Please try again.');

        Log::error('Failed to create account', [
          'error' => $th->getMessage(),
          'trace' => $th->getTraceAsString(),
          'data' => $data,
      ]);
      
        DB::rollBack();
      }

  } 
}
