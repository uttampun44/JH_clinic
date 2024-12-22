<?php


if(!function_exists('uploadImage'))
{
    function uploadImage($image)
    {
        if ($image) {
            $path = $image->storeAs('images', $image->getClientOriginalName(), 'public');

            return $path;
        }
        return null;

    }
}
