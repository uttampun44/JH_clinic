<?php
if (!function_exists('uploadImage')) {
    function uploadImage($image)
    {
        if ($image) {
          
            $uniqueName = uniqid() . '_' . $image->getClientOriginalName();

            $path = $image->storeAs('images', $uniqueName, 'public');

            if (!$path) {
                throw new \Exception('File upload failed.');
            }

            return $path;
        }
        return null;
    }
}
