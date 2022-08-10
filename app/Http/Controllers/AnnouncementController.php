<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Announcement;
use Illuminate\Support\Facades\Validator;

class AnnouncementController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $announcements = Announcement::all();
        return Inertia::render('Announcements/Index', ['announcements' => $announcements]);
    }

    /**
     * Show the form for public show.
     *
     * @return Public
     */
    public function index2()
    {
        $announcements = Announcement::all();
        return Inertia::render('Announcements/Public', ['announcements' => $announcements]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Announcements/Create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'content' => ['required'],
            'startDate' => 'nullable|date',
            'endDate' => 'nullable|date',
            'active' => ['required'],
        ])->validate();

        Announcement::create($request->all());

        return redirect()->route('announcements.index');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Announcement $announcement)
    {
        return Inertia::render('Announcements/Edit', [
            'announcement' => $announcement
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'content' => ['required'],
            'startDate' => 'nullable|date',
            'endDate' => 'nullable|date',
            'active' => ['required'],
        ])->validate();

        Announcement::find($id)->update($request->all());
        return redirect()->route('announcements.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Announcement::find($id)->delete();
        return redirect()->route('announcements.index');
    }
}
