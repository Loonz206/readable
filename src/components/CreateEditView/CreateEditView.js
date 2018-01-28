import React from 'react';

const CreateEditView = (props) => (
    <div className="create-edit-view-container">
        <h1>Create/Edit Post</h1>
        <h2>Post</h2>
        <form action="" method="post">
            <label htmlFor="POST-title">Title:</label>
            <input id="POST-title" type="text" name="title" />
            <label htmlFor="POST-textarea">Comments:</label>
            <textarea name="" id="" cols="30" rows="12"></textarea>
            <label htmlFor="POST-author">Author:</label>
            <input id="POST-author" type="text" name="author" />
            <label htmlFor="POST-voteScore">VoteScore:</label>
            <input id="POST-voteScore" type="number" name="voteScore" />
            <input type="submit" value="Save" />
        </form>
    </div>
)

export default CreateEditView;