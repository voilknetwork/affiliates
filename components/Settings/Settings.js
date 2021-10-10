import React from 'react'

export default function Settings() {
    return (
        <div class="row">
            <div class="col">
                <section class="card">
                    <header class="card-header">
                        <div class="card-actions">
                            <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                            <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                        </div>

                        <h2 class="card-title">Settings</h2>
                        <p class="card-subtitle">
						You can update your profile settings here, These changes are also going to reflect on social platform.
                        </p>
                    </header>
                    <div class="card-body">
                        <form class="form-horizontal form-bordered" method="get">
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2" for="full_name">Full Name</label>
                                <div class="col-lg-6">
                                    <input type="text" class="form-control" id="full_name" />
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2" for="location">Location</label>
                                <div class="col-lg-6">
                                    <input type="text" class="form-control" id="location" />
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2" for="website">Website</label>
                                <div class="col-lg-6">
                                    <input type="text" class="form-control" id="website" />
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2" for="about">About</label>
                                <div class="col-lg-6">
                                    <textarea class="form-control" id="about" />
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2">Profile Picture</label>
                                <div class="col-lg-6">
                                    <div class="fileupload fileupload-new" data-provides="fileupload">
                                        <div class="input-append">
                                            <div class="uneditable-input">
                                                <span class="fileupload-preview"></span>
                                            </div>
                                            <span class="btn btn-default btn-file">
                                                <span class="fileupload-exists">Change</span>
                                                <span class="fileupload-new">Select Photo</span>
                                                <input type="file" />
                                            </span>
                                            <a href="#" class="btn btn-default fileupload-exists" data-dismiss="fileupload">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2">Cover Photo</label>
                                <div class="col-lg-6">
                                    <div class="fileupload fileupload-new" data-provides="fileupload">
                                        <div class="input-append">
                                            <div class="uneditable-input">
                                                <span class="fileupload-preview"></span>
                                            </div>
                                            <span class="btn btn-default btn-file">
                                                <span class="fileupload-exists">Change</span>
                                                <span class="fileupload-new">Select Photo</span>
                                                <input type="file" />
                                            </span>
                                            <a href="#" class="btn btn-default fileupload-exists" data-dismiss="fileupload">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row pb-4">
                                <label class="col-lg-3 control-label text-lg-end pt-2"></label>
                                <div class="col-lg-6">
                                    <input type="submit" class="btn btn-success" value="Update Profile" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
